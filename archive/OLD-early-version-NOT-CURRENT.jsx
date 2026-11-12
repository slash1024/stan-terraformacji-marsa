import { useState, useEffect, useRef } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis
} from "recharts";

// ═══════════════════════════════════════════════════════
//  GAME DATA
// ═══════════════════════════════════════════════════════
const DEFAULT_DATA = {
  boards: ["Tharsis", "Hellas", "Elysium"],
  colonies: ["Ceres","Enceladus","Europa","Ganymede","Io","Luna","Miranda","Pluto","Titan","Triton","Callisto"],
  milestones: ["Terraformer","Mayor","Gardener","Builder","Planner","Generalist","Specialist","Ecologist","Tycoon","Legend","Energizer","Rim Settler","Diversifier","Tactician","Pioneer","Networker","Colonizer","Innovator","Hoverlord"],
  awards: ["Landlord","Banker","Scientist","Thermalist","Miner","Celebrity","Industrialist","Desert Settler","Estate Dealer","Benefactor","Contractor","Cultivator","Magnate","Space Baron","Venuphile","Investor","Entrepreneur","Fondeur"],
  preludes: ["Acquired Company","Allotted Patent","Biosphere Support","Buffer Gas","Business Empire","Donation","Early Settlement","Ecology Experts","Excentric Sponsor","Galilean Mining","Huge Asteroid","Industrial Complex","Mining Operations","Movers and Shakers","New Partner","Nitrogen-Rich Asteroid","Polar Industries","Psychrophiles","Research Network","Self-Sufficient Settlement","Septem Tribus","Solar Power","Supply Drop","Survey Mission","Valuable Gases","Vital Chemicals","Dome Farming","Entrepreneurial Spirit"],
  corporations: ["Beginner Corporation","CrediCor","EcoLine","Helion","Interplanetary Cinematics","Mining Guild","Phobolog","Saturn Systems","Teractor","Tharsis Republic","Thorgate","UNMI","Arklight","Celestic","Cheung Shing Mars","Inventrix","Manutech","Morning Star Inc.","Multigenerational Nanotech","Point Luna","Poseidon","Robinson Industries","Stormcraft Inc.","Viron","Vitor","Aridor","Aphrodite","Mons Insurance","Pristar","Recyclon","Splice","Lakefront Resorts","Philares","Polyphemos","Rego Plastics","Iapetus","Arcadian Communities","Chimera","Valley Trust","Playwrights"]
};

const PLAYER_COLORS = ["#f07030","#3a9e6a","#5a8fd4","#d4a53a","#b060d0","#d45a5a","#40c0d0","#d45090"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(arr, n) { return shuffle(arr).slice(0, n); }

// ═══════════════════════════════════════════════════════
//  STORAGE
// ═══════════════════════════════════════════════════════
async function loadData(key) {
  try { const r = await window.storage.get(key); return r ? JSON.parse(r.value) : null; }
  catch { return null; }
}
async function saveData(key, val) {
  try { await window.storage.set(key, JSON.stringify(val)); }
  catch (e) { console.error(e); }
}

// ═══════════════════════════════════════════════════════
//  STYLES
// ═══════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap');

:root {
  --bg:      #06050a;
  --surface: #0d0b13;
  --card:    #131020;
  --border:  #28203e;
  --orange:  #f07030;
  --orange2: #c85520;
  --red:     #8b1e1e;
  --cream:   #e8d8c0;
  --muted:   #685870;
  --green:   #38985e;
  --glow:    rgba(240,112,48,0.35);
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body,#root{background:var(--bg);color:var(--cream);font-family:'Exo 2',sans-serif;min-height:100vh;overflow-x:hidden}

.app{max-width:500px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column;background:var(--bg);position:relative}
.app::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 35% at 50% 0%,rgba(61,26,10,.18),transparent),radial-gradient(ellipse 60% 30% at 80% 100%,rgba(26,10,61,.15),transparent);pointer-events:none;z-index:0}

/* HEADER */
.hdr{position:relative;z-index:10;padding:.9rem 1.25rem .8rem;border-bottom:1px solid var(--border);background:linear-gradient(180deg,#0d0b13,transparent);display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'Orbitron',sans-serif;font-size:.9rem;font-weight:900;letter-spacing:.12em;color:var(--orange);text-shadow:0 0 20px var(--glow);text-transform:uppercase;line-height:1}
.logo-sub{font-size:.58rem;letter-spacing:.3em;color:var(--muted);text-transform:uppercase;margin-top:3px}
.hdr-badge{font-family:'Orbitron',sans-serif;font-size:.52rem;letter-spacing:.15em;color:var(--orange);border:1px solid var(--orange2);padding:.2rem .5rem;border-radius:3px;background:#2a1008}

/* CONTENT */
.content{flex:1;overflow-y:auto;padding:1rem 1.25rem;padding-bottom:5.5rem;position:relative;z-index:1}

/* NAV */
.nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:500px;background:#090713;border-top:1px solid var(--border);display:flex;z-index:200}
.nav-btn{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:.48rem .15rem;background:none;border:none;cursor:pointer;color:var(--muted);transition:color .2s;font-family:'Exo 2',sans-serif;position:relative}
.nav-btn.active{color:var(--orange)}
.nav-btn.active::after{content:'';position:absolute;top:0;left:15%;right:15%;height:1px;background:var(--orange);box-shadow:0 0 8px var(--orange)}
.nav-ico{font-size:.95rem;line-height:1}
.nav-lbl{font-size:.44rem;letter-spacing:.1em;text-transform:uppercase}

/* SECTION TITLE */
.stitle{font-family:'Orbitron',sans-serif;font-size:.62rem;letter-spacing:.25em;text-transform:uppercase;color:var(--orange);margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:.6rem}
.stitle::before{content:'';display:inline-block;width:3px;height:12px;background:var(--orange);border-radius:2px;box-shadow:0 0 6px var(--orange);flex-shrink:0}

/* CARDS */
.card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:1rem;margin-bottom:.75rem}
.card-lbl{font-size:.58rem;letter-spacing:.25em;text-transform:uppercase;color:var(--muted);margin-bottom:.55rem}

/* CHIPS */
.chips{display:flex;flex-wrap:wrap;gap:.28rem}
.chip{background:#1a1530;border:1px solid var(--border);border-radius:5px;padding:.22rem .5rem;font-size:.76rem;font-weight:500;color:var(--cream)}
.chip.hot{background:#2a1008;border-color:var(--orange2);color:var(--orange)}

/* BUTTONS */
.btn{font-family:'Orbitron',sans-serif;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;padding:.72rem 1.4rem;border:1px solid var(--orange);background:transparent;color:var(--orange);border-radius:7px;cursor:pointer;transition:all .2s;width:100%;position:relative;overflow:hidden}
.btn::before{content:'';position:absolute;inset:0;background:var(--orange);transform:scaleX(0);transform-origin:left;transition:transform .25s}
.btn:hover::before{transform:scaleX(1)}
.btn span{position:relative;z-index:1;transition:color .25s}
.btn:hover span{color:var(--bg)}
.btn:disabled{opacity:.4;cursor:default;pointer-events:none}
.btn-sm{font-size:.52rem;padding:.38rem .75rem;width:auto;border-radius:5px}
.btn-ghost{border-color:var(--border);color:var(--muted)}
.btn-ghost::before{background:#28203e}
.btn-ghost:hover span{color:var(--cream)}
.btn-del{border-color:var(--red);color:#e04040}
.btn-del::before{background:var(--red)}
.btn-del:hover span{color:white}
.btn-green{border-color:var(--green);color:var(--green)}
.btn-green::before{background:var(--green)}
.btn-green:hover span{color:var(--bg)}

/* INPUTS */
.inp{background:var(--surface);border:1px solid var(--border);border-radius:6px;color:var(--cream);font-family:'Exo 2',sans-serif;font-size:.92rem;font-weight:500;padding:.43rem .68rem;width:100%;transition:border-color .2s;-webkit-appearance:none}
.inp:focus{outline:none;border-color:var(--orange2)}
.inp-num{width:58px;text-align:center;font-family:'Orbitron',sans-serif;font-size:.82rem;padding:.38rem .15rem}

/* SCORE */
.stbl{width:100%;border-collapse:collapse;font-size:.78rem}
.stbl th{font-family:'Orbitron',sans-serif;font-size:.48rem;letter-spacing:.1em;color:var(--muted);text-transform:uppercase;padding:.45rem .18rem;border-bottom:1px solid var(--border);text-align:center;white-space:nowrap}
.stbl td{padding:.32rem .18rem;text-align:center;border-bottom:1px solid #100e1c;vertical-align:middle}
.score-total{font-family:'Orbitron',sans-serif;font-size:.88rem;color:var(--orange);font-weight:700}
.win-badge{display:inline-block;background:var(--orange);color:var(--bg);font-family:'Orbitron',sans-serif;font-size:.42rem;letter-spacing:.1em;padding:.13rem .38rem;border-radius:3px;margin-top:2px}

/* STATS */
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem;margin-bottom:1rem}
.stat-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.7rem .45rem;text-align:center}
.stat-num{font-family:'Orbitron',sans-serif;font-size:1.5rem;font-weight:700;color:var(--orange);line-height:1}
.stat-lbl{font-size:.52rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:4px}

/* HISTORY */
.rec{background:var(--card);border:1px solid var(--border);border-left:3px solid var(--border);border-radius:8px;padding:.78rem;margin-bottom:.6rem;transition:border-left-color .2s}
.rec:hover{border-left-color:var(--orange2)}

/* PROGRESS */
.prog-bar{height:3px;background:var(--border);border-radius:2px;overflow:hidden;margin-top:.38rem}
.prog-fill{height:100%;background:linear-gradient(90deg,var(--orange2),var(--orange));border-radius:2px;transition:width .6s cubic-bezier(.4,0,.2,1)}

/* AI */
.ai-dots{display:flex;gap:.4rem;justify-content:center;padding:2rem 0}
.ai-dot{width:8px;height:8px;background:var(--orange);border-radius:50%;animation:dotPulse 1.2s ease-in-out infinite}
.ai-dot:nth-child(2){animation-delay:.2s}
.ai-dot:nth-child(3){animation-delay:.4s}
@keyframes dotPulse{0%,100%{opacity:.2;transform:scale(.7)}50%{opacity:1;transform:scale(1.15)}}
.ai-text{font-size:.84rem;line-height:1.78;color:var(--cream);white-space:pre-wrap}

/* RANK CARD */
.rank-card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:.72rem 1rem;margin-bottom:.58rem}

/* EMPTY */
.empty{text-align:center;padding:3rem 1rem;color:var(--muted);font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;line-height:2}
.empty-ico{font-size:2.2rem;margin-bottom:.8rem;opacity:.25;display:block}

/* DIVIDER */
.divider{border:none;border-top:1px solid var(--border);margin:1rem 0}

/* ═══ MARS GLOBE ═══ */
.mars-globe{
  border-radius:50%;
  position:relative;
  background:
    radial-gradient(circle at 32% 27%, rgba(255,175,115,.48) 0%, transparent 36%),
    radial-gradient(ellipse 68% 24% at 56% 47%, rgba(45,5,0,.48) 0%, transparent 100%),
    radial-gradient(circle at 50% 48%, #d05030 0%, #9a2515 36%, #6a0e08 60%, #280402 100%);
  box-shadow:
    0 0 0 3px rgba(200,80,30,.2),
    0 0 50px rgba(232,104,42,.7),
    0 0 100px rgba(232,104,42,.3),
    0 0 180px rgba(232,104,42,.12),
    inset -28px -18px 55px rgba(0,0,0,.82),
    inset 6px 5px 18px rgba(210,110,70,.1);
  animation:marsFloat 7s ease-in-out infinite, marsGlow 4s ease-in-out infinite;
  overflow:hidden;
}
.mars-globe::before{
  content:'';position:absolute;
  top:3%;left:32%;width:36%;height:14%;
  background:radial-gradient(ellipse, rgba(255,248,238,.68), transparent 72%);
  border-radius:50%;filter:blur(3px);
}
.mars-globe::after{
  content:'';position:absolute;inset:0;border-radius:50%;
  background:
    linear-gradient(-18deg, transparent 39%, rgba(35,5,0,.24) 41%, rgba(35,5,0,.12) 43%, transparent 45%),
    radial-gradient(ellipse 38% 16% at 46% 93%, rgba(255,248,238,.5), transparent 65%),
    radial-gradient(circle 9% at 24% 42%, rgba(220,165,105,.24), transparent);
}
@keyframes marsFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes marsGlow{
  0%,100%{box-shadow:0 0 0 3px rgba(200,80,30,.2),0 0 50px rgba(232,104,42,.7),0 0 100px rgba(232,104,42,.3),0 0 180px rgba(232,104,42,.12),inset -28px -18px 55px rgba(0,0,0,.82)}
  50%{box-shadow:0 0 0 3px rgba(200,80,30,.28),0 0 70px rgba(232,104,42,.9),0 0 140px rgba(232,104,42,.45),0 0 240px rgba(232,104,42,.18),inset -28px -18px 55px rgba(0,0,0,.82)}
}

/* ═══ DRAFT OVERLAY ═══ */
.draft-ov{position:fixed;inset:0;z-index:500;background:#030208;display:flex;flex-direction:column;align-items:center;max-width:500px;left:50%;transform:translateX(-50%);overflow:hidden}
.draft-stars{position:absolute;inset:0;pointer-events:none;width:100%;height:100%;object-fit:cover}
.draft-topbar{position:relative;z-index:3;width:100%;padding:.85rem 1.25rem 0;display:flex;justify-content:space-between;align-items:center;flex-shrink:0}
.draft-prog{width:100%;height:2px;background:var(--border);position:relative;z-index:3;flex-shrink:0}
.draft-prog-fill{height:100%;background:var(--orange);box-shadow:0 0 8px var(--orange);transition:width .6s ease}
.draft-planet{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center;padding:1.1rem 0 .6rem;flex-shrink:0}
.draft-phase-lbl{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.35em;text-transform:uppercase;color:var(--orange);text-shadow:0 0 18px var(--glow);margin-top:.7rem;animation:fadeUp .4s ease-out}
.draft-body{position:relative;z-index:3;flex:1;width:100%;max-width:500px;overflow-y:auto;padding:.25rem 1.25rem 0}
.draft-footer{position:relative;z-index:3;width:100%;padding:.65rem 1.25rem 1.4rem;flex-shrink:0}

/* ═══ SLOT MACHINE ═══ */
.slot-wrap{display:flex;align-items:center;justify-content:center;min-height:46px;margin:.3rem 0;border-radius:8px;padding:.5rem .9rem;font-family:'Exo 2',sans-serif;font-size:.92rem;font-weight:600;border:1px solid var(--border);background:var(--card);color:var(--muted);letter-spacing:.04em;transition:all .3s;text-align:center}
.slot-spin{animation:slotFlicker .09s ease-in-out infinite;border-color:#382650}
.slot-locked{color:var(--cream);border-color:var(--orange2);background:linear-gradient(135deg,#1e1428,#2a1008);box-shadow:0 0 14px rgba(232,104,42,.22);animation:lockFlash .45s ease-out forwards}
.slot-board{font-family:'Orbitron',sans-serif;font-size:1.9rem;font-weight:900;min-height:82px;color:var(--orange);text-shadow:0 0 35px var(--glow);border-color:var(--orange2);background:linear-gradient(135deg,#1e1428,#2a1008)}
.slot-board.slot-spin{color:var(--muted);text-shadow:none;border-color:var(--border);background:var(--card)}
.slot-board.slot-locked{color:var(--orange);text-shadow:0 0 45px var(--glow),0 0 80px rgba(240,112,48,.4)}

@keyframes slotFlicker{0%,100%{opacity:1}50%{opacity:.65}}
@keyframes lockFlash{0%{box-shadow:0 0 35px rgba(240,112,48,.9);border-color:var(--orange)}100%{box-shadow:0 0 14px rgba(240,112,48,.22);border-color:var(--orange2)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(-7px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* player badge in draft */
.p-badge{display:flex;align-items:center;gap:.55rem;margin-bottom:.55rem;padding:.45rem .7rem;border-radius:7px;background:var(--card);border:1px solid var(--border)}
.p-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.p-badge-name{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.14em;font-weight:700}

/* ═══ SUMMARY (in draft modal) ═══ */
.sum-board{text-align:center;padding:.9rem;border:1px solid var(--orange2);border-radius:8px;background:linear-gradient(135deg,#1e1428,#2a1008);margin-bottom:.65rem}
.sum-board-name{font-family:'Orbitron',sans-serif;font-size:1.5rem;font-weight:900;color:var(--orange);text-shadow:0 0 35px var(--glow)}

/* ═══ SETTINGS ═══ */
.set-item{display:flex;align-items:center;gap:.45rem;padding:.3rem 0;border-bottom:1px solid #181428}
.set-item-name{flex:1;font-size:.84rem;color:var(--cream)}
.color-pick{display:flex;gap:.38rem;flex-wrap:wrap;margin-top:.42rem}
.color-btn{width:22px;height:22px;border-radius:50%;border:2px solid transparent;cursor:pointer;transition:transform .15s,border-color .15s;padding:0}
.color-btn.sel{border-color:white;transform:scale(1.18)}
.color-btn:hover{transform:scale(1.12)}

/* ═══ DRAFT ENTRY VIEW ═══ */
.entry-hero{text-align:center;padding:1.5rem 1rem;border:1px solid var(--orange2);border-radius:12px;background:linear-gradient(135deg,#1a1028,#200c08);margin-bottom:1rem;position:relative;overflow:hidden;cursor:pointer;transition:all .3s}
.entry-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% -10%,rgba(240,112,48,.12),transparent 65%)}
.entry-hero:hover{border-color:var(--orange);box-shadow:0 0 30px rgba(240,112,48,.15)}

/* ═══ TIMER ═══ */
.timer-ring-wrap{position:relative;width:200px;height:200px;margin:0 auto 1.2rem;flex-shrink:0}
.timer-ring-bg{fill:none;stroke:#1a1530;stroke-width:7}
.timer-ring-fg{fill:none;stroke:var(--orange);stroke-width:7;stroke-linecap:round;transition:stroke-dashoffset .25s linear,stroke .4s}
.timer-clock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.timer-time{font-family:'Orbitron',sans-serif;font-size:2.35rem;font-weight:900;color:var(--orange);text-shadow:0 0 28px var(--glow);letter-spacing:.04em;line-height:1}
.timer-status{font-family:'Orbitron',sans-serif;font-size:.45rem;letter-spacing:.35em;color:var(--muted);text-transform:uppercase;margin-top:.3rem}
.timer-btns{display:flex;gap:.55rem;justify-content:center;margin-bottom:1rem}

/* ═══ FIRST PLAYER OVERLAY ═══ */
.fp-ov{position:fixed;inset:0;z-index:600;background:#020107;display:flex;flex-direction:column;align-items:center;justify-content:space-between;max-width:500px;left:50%;transform:translateX(-50%);overflow:hidden;padding-bottom:1.8rem}
.fp-topbar{width:100%;padding:.85rem 1.25rem 0;display:flex;justify-content:space-between;align-items:center;position:relative;z-index:3;flex-shrink:0}
.fp-canvas-wrap{position:relative;flex:1;display:flex;align-items:center;justify-content:center;width:100%}
@keyframes winnerReveal{from{opacity:0;transform:scale(.4) translateY(18px)}to{opacity:1;transform:scale(1) translateY(0)}}
.fp-winner-name{font-family:'Orbitron',sans-serif;font-size:1.55rem;font-weight:900;color:var(--orange);text-shadow:0 0 40px var(--glow),0 0 80px rgba(240,112,48,.45);letter-spacing:.05em;text-align:center;animation:winnerReveal .55s cubic-bezier(.34,1.56,.64,1) both}
.fp-winner-sub{font-family:'Orbitron',sans-serif;font-size:.52rem;letter-spacing:.42em;color:var(--cream);text-transform:uppercase;text-align:center;margin-bottom:.35rem;animation:winnerReveal .55s .1s cubic-bezier(.34,1.56,.64,1) both}
@keyframes particleFly{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0}}
.particle{position:absolute;width:7px;height:7px;border-radius:50%;pointer-events:none;animation:particleFly .9s ease-out forwards}
`;

// ═══════════════════════════════════════════════════════
//  MARS GLOBE
// ═══════════════════════════════════════════════════════
function MarsGlobe({ size = 170 }) {
  return (
    <div style={{ width: size + 32, height: size + 32, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <div style={{ position: "absolute", width: size + 30, height: size + 30, borderRadius: "50%", border: "1px solid rgba(232,104,42,.22)", boxShadow: "0 0 25px rgba(232,104,42,.08) inset" }} />
      <div style={{ position: "absolute", width: size + 50, height: size + 50, borderRadius: "50%", border: "1px solid rgba(232,104,42,.06)" }} />
      <div className="mars-globe" style={{ width: size, height: size }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  STAR FIELD (canvas)
// ═══════════════════════════════════════════════════════
function StarField() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    c.width = 500; c.height = 900;
    ctx.clearRect(0, 0, 500, 900);
    for (let i = 0; i < 140; i++) {
      const x = Math.random() * 500;
      const y = Math.random() * 900;
      const r = Math.random() < .1 ? 1.6 : Math.random() < .3 ? 1.0 : 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(.15 + Math.random() * .85).toFixed(2)})`;
      ctx.fill();
    }
    // nebula hint
    const g = ctx.createRadialGradient(420, 150, 0, 420, 150, 180);
    g.addColorStop(0, "rgba(100,30,60,.08)");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 500, 900);
    const g2 = ctx.createRadialGradient(80, 700, 0, 80, 700, 200);
    g2.addColorStop(0, "rgba(30,50,120,.07)");
    g2.addColorStop(1, "transparent");
    ctx.fillStyle = g2; ctx.fillRect(0, 0, 500, 900);
  }, []);
  return <canvas ref={ref} className="draft-stars" />;
}

// ═══════════════════════════════════════════════════════
//  SLOT ITEM — single spinning cell
// ═══════════════════════════════════════════════════════
function SlotItem({ value, pool, delay = 0, onDone, isBoard = false }) {
  const [display, setDisplay] = useState(pool[0] || "???");
  const [locked, setLocked] = useState(false);
  const timerRef = useRef(null);
  const DURATION = isBoard ? 2500 : 1700;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const t0 = Date.now();
      const spin = () => {
        const elapsed = Date.now() - t0;
        if (elapsed >= DURATION) {
          setDisplay(value); setLocked(true); onDone?.(); return;
        }
        const progress = elapsed / DURATION;
        const delay = 32 + Math.pow(progress, 2.8) * 480;
        setDisplay(pool[Math.floor(Math.random() * pool.length)]);
        timerRef.current = setTimeout(spin, delay);
      };
      spin();
    }, delay);
    return () => { clearTimeout(startTimer); clearTimeout(timerRef.current); };
  }, []);

  const cls = `slot-wrap${isBoard ? " slot-board" : ""} ${locked ? "slot-locked" : "slot-spin"}`;
  return <div className={cls}>{display}</div>;
}

// ═══════════════════════════════════════════════════════
//  PHASE DISPLAY — group of slots
// ═══════════════════════════════════════════════════════
function PhaseDisplay({ items, pool, isBoard, playerName, playerColor, onAllDone }) {
  const [done, setDone] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (done >= total) { const t = setTimeout(() => onAllDone?.(), 550); return () => clearTimeout(t); }
  }, [done, total]);

  return (
    <div>
      {playerName && (
        <div className="p-badge" style={{ borderColor: (playerColor || "var(--orange)") + "44" }}>
          <div className="p-dot" style={{ background: playerColor, boxShadow: `0 0 8px ${playerColor}` }} />
          <span className="p-badge-name" style={{ color: playerColor }}>{playerName}</span>
        </div>
      )}
      {items.map((item, i) => (
        <SlotItem key={i} value={item} pool={pool}
          delay={isBoard ? 500 : i * 720 + 400}
          onDone={() => setDone(d => d + 1)}
          isBoard={isBoard}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  SUMMARY PHASE
// ═══════════════════════════════════════════════════════
function SummaryPhase({ draft, players }) {
  return (
    <div>
      <div className="sum-board"><div className="card-lbl">Plansza</div><div className="sum-board-name">{draft.board}</div></div>
      <div className="card"><div className="card-lbl">Kolonie (5)</div><div className="chips">{draft.colonies.map(c => <span key={c} className="chip hot">{c}</span>)}</div></div>
      <div className="card">
        <div className="card-lbl">Tytuły (6)</div>
        <div className="chips">{draft.milestones.map(m => <span key={m} className="chip">{m}</span>)}</div>
      </div>
      <div className="card">
        <div className="card-lbl">Nagrody (6)</div>
        <div className="chips">{draft.awards.map(a => <span key={a} className="chip">{a}</span>)}</div>
      </div>
      {draft.playerDraws.map((pd, i) => (
        <div key={i} className="card" style={{ borderColor: (players[i]?.color || "var(--border)") + "44" }}>
          <div className="card-lbl" style={{ color: players[i]?.color || "var(--orange)" }}>
            {players[i]?.name || "Pula wspólna"}
          </div>
          <div style={{ marginBottom: ".45rem" }}>
            <div style={{ fontSize: ".58rem", color: "var(--muted)", marginBottom: ".22rem" }}>Preludium:</div>
            <div className="chips">{pd.preludes.map(p => <span key={p} className="chip">{p}</span>)}</div>
          </div>
          <div>
            <div style={{ fontSize: ".58rem", color: "var(--muted)", marginBottom: ".22rem" }}>Korporacje:</div>
            <div className="chips">{pd.corporations.map(c => <span key={c} className="chip hot">{c}</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  COUNTER STEPPER — reusable +/− widget
// ═══════════════════════════════════════════════════════
function Stepper({ value, min, max, onChange, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".35rem" }}>
      <div style={{ fontSize: ".58rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={{ width: 34, height: 34, borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface)", color: value <= min ? "var(--border)" : "var(--cream)", fontSize: "1.1rem", cursor: value <= min ? "default" : "pointer", fontFamily: "Orbitron", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >−</button>
        <div style={{ fontFamily: "Orbitron", fontSize: "1.6rem", fontWeight: 700, color: "var(--orange)", minWidth: 32, textAlign: "center", textShadow: "0 0 18px var(--glow)" }}>{value}</div>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={{ width: 34, height: 34, borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface)", color: value >= max ? "var(--border)" : "var(--cream)", fontSize: "1.1rem", cursor: value >= max ? "default" : "pointer", fontFamily: "Orbitron", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >+</button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  DRAFT MODAL
// ═══════════════════════════════════════════════════════
function DraftModal({ players, gameData, corpCount, preludeCount, onClose }) {
  // Each player gets an INDEPENDENT random draw (own shuffle, own deck)
  const [draft] = useState(() => {
    const playerDraws = players.map(() => ({
      corporations: pick(gameData.corporations, corpCount),
      preludes:     pick(gameData.preludes,     preludeCount),
    }));
    return {
      board:      pick(gameData.boards, 1)[0],
      colonies:   pick(gameData.colonies, 5),
      milestones: pick(gameData.milestones, 6),
      awards:     pick(gameData.awards, 6),
      playerDraws, corpCount, preludeCount,
    };
  });

  const phases = useRef((() => {
    const list = [
      { id: "board",      label: "Plansza",  items: [draft.board],    pool: gameData.boards,    isBoard: true },
      { id: "colonies",   label: "Kolonie",  items: draft.colonies,   pool: gameData.colonies   },
      { id: "milestones", label: "Tytuły",   items: draft.milestones, pool: gameData.milestones },
      { id: "awards",     label: "Nagrody",  items: draft.awards,     pool: gameData.awards     },
    ];
    // Round 1: every player draws PRELUDES
    players.forEach((p, i) => {
      list.push({ id: `p${i}-pre`, label: "Preludium",  items: draft.playerDraws[i].preludes,     pool: gameData.preludes,     playerName: p.name, playerColor: p.color });
    });
    // Round 2: every player draws CORPORATIONS
    players.forEach((p, i) => {
      list.push({ id: `p${i}-cor`, label: "Korporacje", items: draft.playerDraws[i].corporations, pool: gameData.corporations, playerName: p.name, playerColor: p.color });
    });
    list.push({ id: "summary", label: "Podsumowanie" });
    return list;
  })()).current;

  const [idx, setIdx]     = useState(0);
  const [ready, setReady] = useState(false);

  const phase    = phases[idx];
  const progress = Math.round((idx / (phases.length - 1)) * 100);

  const advance = () => {
    if (idx < phases.length - 1) { setIdx(i => i + 1); setReady(false); }
    else onClose(draft);
  };

  return (
    <div className="draft-ov">
      <StarField />

      <div className="draft-topbar">
        <div style={{ fontFamily: "Orbitron", fontSize: ".58rem", letterSpacing: ".3em", color: "var(--muted)" }}>LOSOWANIE ROZGRYWKI</div>
        <button onClick={() => onClose(null)} style={{ background: "none", border: "1px solid var(--border)", color: "var(--muted)", borderRadius: "4px", padding: ".18rem .55rem", cursor: "pointer", fontFamily: "Orbitron", fontSize: ".5rem", letterSpacing: ".1em", position: "relative", zIndex: 4 }}>✕</button>
      </div>

      <div className="draft-prog"><div className="draft-prog-fill" style={{ width: `${progress}%` }} /></div>

      <div className="draft-planet">
        <MarsGlobe size={phase.id === "summary" ? 88 : 145} />
        <div className="draft-phase-lbl" key={phase.id}>{phase.label}</div>
      </div>

      <div className="draft-body">
        {phase.id !== "summary"
          ? <PhaseDisplay key={phase.id} items={phase.items} pool={phase.pool}
              isBoard={phase.isBoard} playerName={phase.playerName} playerColor={phase.playerColor}
              onAllDone={() => setReady(true)} />
          : <SummaryPhase draft={draft} players={players} />
        }
      </div>

      <div className="draft-footer">
        {(ready || phase.id === "summary") && (
          <button className="btn" onClick={advance} style={{ animation: "fadeIn .4s ease-out" }}>
            <span>{phase.id === "summary" ? "◈  Zakończ Losowanie" : "Dalej  →"}</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  DRAFT ENTRY VIEW
// ═══════════════════════════════════════════════════════
function DraftView({ players, gameData }) {
  const [stage,        setStage]        = useState("config");
  const [corpCount,    setCorpCount]    = useState(3);
  const [preludeCount, setPreludeCount] = useState(4);
  const [lastDraft,    setLastDraft]    = useState(null);

  const nPlayers     = players.length;
  // Pool limits are per-player (independent draws) — just need enough for 1 player
  const safeCorps    = Math.min(corpCount,    Math.min(6, gameData.corporations.length));
  const safePreludes = Math.min(preludeCount, Math.min(6, gameData.preludes.length));
  const canStart     = nPlayers >= 1;

  const handleClose = draft => { setStage("config"); if (draft) setLastDraft(draft); };

  return (
    <div>
      <p className="stitle">Losowanie Rozgrywki</p>

      {stage === "config" && (
        <>
          {/* Hero — requires players */}
          {nPlayers === 0 ? (
            <div className="card" style={{ borderColor: "#3a1f10", textAlign: "center", padding: "2rem 1rem", marginBottom: ".75rem" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: ".6rem", opacity: .4 }}>👤</div>
              <div style={{ fontFamily: "Orbitron", fontSize: ".65rem", letterSpacing: ".2em", color: "var(--orange)", marginBottom: ".45rem" }}>Brak graczy</div>
              <div style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.7 }}>
                Dodaj graczy w<br /><strong style={{ color: "var(--cream)" }}>Ustawienia → Gracze</strong>
              </div>
            </div>
          ) : (
            <div className="entry-hero" onClick={() => setStage("modal")}>
              <MarsGlobe size={110} />
              <div style={{ position: "relative", marginTop: ".5rem" }}>
                <div style={{ fontFamily: "Orbitron", fontSize: ".7rem", letterSpacing: ".2em", color: "var(--orange)", textTransform: "uppercase" }}>◈ Rozpocznij Losowanie</div>
                <div style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: ".3rem" }}>
                  {nPlayers} {nPlayers === 1 ? "gracz" : "graczy"} · każdy losuje niezależnie
                </div>
              </div>
            </div>
          )}

          {/* Config — liczba kart na gracza */}
          <div className="card" style={{ borderColor: "#2a1f40" }}>
            <div className="card-lbl" style={{ color: "var(--orange)", marginBottom: "1rem" }}>Liczba kart na gracza</div>
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem" }}>
              <Stepper label="Korporacje" value={safeCorps}    min={2} max={Math.min(6, gameData.corporations.length)} onChange={v => setCorpCount(v)} />
              <Stepper label="Preludium"  value={safePreludes} min={2} max={Math.min(6, gameData.preludes.length)}     onChange={v => setPreludeCount(v)} />
            </div>
            <div style={{ display: "flex", gap: ".5rem" }}>
              {[
                { lbl: "Korporacje / gracz", val: safeCorps,    total: gameData.corporations.length },
                { lbl: "Preludium / gracz",  val: safePreludes, total: gameData.preludes.length     },
              ].map(({ lbl, val, total }) => (
                <div key={lbl} style={{ flex: 1, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "7px", padding: ".5rem .65rem" }}>
                  <div style={{ fontSize: ".52rem", color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: ".22rem" }}>{lbl}</div>
                  <div style={{ fontFamily: "Orbitron", fontSize: ".95rem", color: "var(--orange)", fontWeight: 700 }}>{val}</div>
                  <div style={{ fontSize: ".6rem", color: "var(--muted)", marginTop: ".16rem" }}>pula: {total}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Players list */}
          {nPlayers > 0 && (
            <div className="card">
              <div className="card-lbl">Gracze ({nPlayers})</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {players.map(p => (
                  <div key={p.id} style={{ display: "flex", alignItems: "center", gap: ".3rem", background: "#1a1530", border: "1px solid var(--border)", borderRadius: "5px", padding: ".22rem .55rem" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                    <span style={{ fontSize: ".8rem", fontWeight: 500 }}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Last draft summary */}
          {lastDraft && (
            <>
              <p style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--orange)", marginBottom: ".7rem" }}>Ostatnie Losowanie</p>
              <div className="sum-board"><div className="card-lbl">Plansza</div><div className="sum-board-name">{lastDraft.board}</div></div>
              <div className="card">
                <div style={{ marginBottom: ".4rem" }}><div className="card-lbl">Kolonie</div><div className="chips">{lastDraft.colonies.map(c => <span key={c} className="chip hot">{c}</span>)}</div></div>
                <div className="divider" />
                <div style={{ marginBottom: ".4rem" }}><div className="card-lbl">Tytuły</div><div className="chips">{lastDraft.milestones.map(m => <span key={m} className="chip">{m}</span>)}</div></div>
                <div className="divider" />
                <div><div className="card-lbl">Nagrody</div><div className="chips">{lastDraft.awards.map(a => <span key={a} className="chip">{a}</span>)}</div></div>
              </div>
              {lastDraft.playerDraws.map((pd, i) => (
                <div key={i} className="card" style={{ borderColor: (players[i]?.color || "var(--border)") + "44" }}>
                  <div className="card-lbl" style={{ color: players[i]?.color || "var(--orange)" }}>{players[i]?.name || `Gracz ${i + 1}`}</div>
                  <div style={{ marginBottom: ".4rem" }}>
                    <div style={{ fontSize: ".58rem", color: "var(--muted)", marginBottom: ".22rem" }}>Korporacje ({lastDraft.corpCount}):</div>
                    <div className="chips">{pd.corporations.map(c => <span key={c} className="chip hot">{c}</span>)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: ".58rem", color: "var(--muted)", marginBottom: ".22rem" }}>Preludium ({lastDraft.preludeCount}):</div>
                    <div className="chips">{pd.preludes.map(p => <span key={p} className="chip">{p}</span>)}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}

      {stage === "modal" && (
        <DraftModal players={players} gameData={gameData}
          corpCount={safeCorps} preludeCount={safePreludes}
          onClose={handleClose} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  SCORE VIEW
// ═══════════════════════════════════════════════════════
const EP = () => ({ name: "", color: "", tr: 20, greeneries: 0, cities: 0, cards: 0, milestones: 0, awards: 0, custom: {} });

function ScoreView({ onSave, players, customCats }) {
  const [ps, setPs] = useState(() =>
    players.length > 0
      ? players.map(p => ({ name: p.name, color: p.color, tr: 20, greeneries: 0, cities: 0, cards: 0, milestones: 0, awards: 0, custom: {} }))
      : [EP(), EP()]
  );
  const [saved, setSaved] = useState(false);
  const [breakdown, setBreakdown] = useState(null); // index of player to show breakdown

  const calcCustom = p => Object.values(p.custom || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
  const calc = p => p.tr + p.greeneries + p.cities + p.cards + p.milestones + p.awards + calcCustom(p);

  const upd = (i, f, v) => {
    const a = [...ps];
    a[i] = { ...a[i], [f]: f === "name" ? v : (parseInt(v) || 0) };
    setPs(a);
  };
  const updCustom = (playerIdx, catId, v) => {
    const a = [...ps];
    a[playerIdx] = { ...a[playerIdx], custom: { ...a[playerIdx].custom, [catId]: parseInt(v) || 0 } };
    setPs(a);
  };

  const doSave = async () => {
    const game = { id: Date.now(), date: new Date().toISOString(), players: ps.map(p => ({ ...p, total: calc(p) })) };
    const ex = (await loadData("tfm:games")) || [];
    await saveData("tfm:games", [game, ...ex]);
    onSave(); setSaved(true); setTimeout(() => setSaved(false), 2500);
  };

  const tots = ps.map(calc);
  const maxT = Math.max(...tots);

  const STD_COLS = [
    { f: "tr",         lbl: "TR", tip: "Terraform Rating" },
    { f: "greeneries", lbl: "🌿", tip: "Zieleniny" },
    { f: "cities",     lbl: "🏙", tip: "Miasto × zieleniny" },
    { f: "cards",      lbl: "🃏", tip: "VP z kart" },
    { f: "milestones", lbl: "⭐", tip: "Tytuły" },
    { f: "awards",     lbl: "🏆", tip: "Nagrody" },
  ];

  return (
    <div>
      <p className="stitle">Liczenie Punktów</p>

      {/* ── Standard table ── */}
      <div className="card" style={{ overflowX: "auto", padding: ".7rem .45rem", marginBottom: ".6rem" }}>
        <table className="stbl">
          <thead>
            <tr>
              <th style={{ textAlign: "left", paddingLeft: ".45rem" }}>Gracz</th>
              {STD_COLS.map(c => <th key={c.f} title={c.tip}>{c.lbl}</th>)}
              <th>VP</th>
            </tr>
          </thead>
          <tbody>
            {ps.map((p, i) => (
              <tr key={i} style={{ cursor: "pointer" }} onClick={() => setBreakdown(breakdown === i ? null : i)}>
                <td style={{ minWidth: 88 }} onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                    {p.color && <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.color, flexShrink: 0, boxShadow: `0 0 5px ${p.color}` }} />}
                    <input className="inp" style={{ fontSize: ".78rem", padding: ".28rem .38rem" }}
                      placeholder={`Gracz ${i + 1}`} value={p.name} onChange={e => upd(i, "name", e.target.value)} />
                  </div>
                </td>
                {STD_COLS.map(c => (
                  <td key={c.f} onClick={e => e.stopPropagation()}>
                    <input type="number" className="inp inp-num" value={p[c.f]} onChange={e => upd(i, c.f, e.target.value)} />
                  </td>
                ))}
                <td>
                  <div className="score-total">{tots[i]}</div>
                  {tots[i] === maxT && tots[i] > 0 && ps.length > 1 && <div className="win-badge">WIN</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Score breakdown popup ── */}
      {breakdown !== null && ps[breakdown] && (
        <div className="card" style={{ borderColor: ps[breakdown].color ? ps[breakdown].color + "55" : "var(--orange2)", marginBottom: ".6rem", animation: "fadeIn .2s ease-out" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".6rem" }}>
            <div className="card-lbl" style={{ marginBottom: 0, color: ps[breakdown].color || "var(--orange)" }}>
              Rozkład: {ps[breakdown].name || `Gracz ${breakdown + 1}`}
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => setBreakdown(null)} style={{ width: "auto", padding: ".15rem .4rem" }}><span>✕</span></button>
          </div>
          {[
            { lbl: "Terraform Rating", val: ps[breakdown].tr },
            { lbl: "Zieleniny",        val: ps[breakdown].greeneries },
            { lbl: "Miasto × Zieleniny", val: ps[breakdown].cities },
            { lbl: "VP z kart",        val: ps[breakdown].cards },
            { lbl: "Tytuły",           val: ps[breakdown].milestones },
            { lbl: "Nagrody",          val: ps[breakdown].awards },
            ...customCats.map(c => ({ lbl: c.name, val: (ps[breakdown].custom || {})[c.id] || 0, isCustom: true })),
          ].map(({ lbl, val, isCustom }) => (
            <div key={lbl} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".22rem 0", borderBottom: "1px solid #181428" }}>
              <span style={{ fontSize: ".82rem", color: isCustom ? "var(--orange)" : "var(--muted)" }}>{lbl}</span>
              <span style={{ fontFamily: "Orbitron", fontSize: ".8rem", color: val > 0 ? "var(--cream)" : "var(--muted)" }}>{val}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: ".5rem", marginTop: ".1rem" }}>
            <span style={{ fontSize: ".82rem", fontWeight: 600 }}>ŁĄCZNIE</span>
            <span style={{ fontFamily: "Orbitron", fontSize: "1rem", color: "var(--orange)", fontWeight: 700 }}>{tots[breakdown]} VP</span>
          </div>
        </div>
      )}

      {/* ── Custom categories ── */}
      {customCats.length > 0 && (
        <div className="card" style={{ borderColor: "#2a1f40", marginBottom: ".6rem" }}>
          <div className="card-lbl" style={{ color: "var(--orange)", marginBottom: ".7rem" }}>Dodatkowe Punkty</div>
          {customCats.map(cat => (
            <div key={cat.id} style={{ marginBottom: ".85rem" }}>
              <div style={{ fontSize: ".68rem", letterSpacing: ".12em", color: "var(--cream)", textTransform: "uppercase", marginBottom: ".4rem", display: "flex", alignItems: "center", gap: ".4rem" }}>
                <span style={{ color: "var(--orange)", fontSize: ".75rem" }}>{cat.emoji || "◆"}</span>
                {cat.name}
              </div>
              <div style={{ display: "flex", gap: ".35rem", flexWrap: "wrap" }}>
                {ps.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: ".28rem", background: "var(--surface)", border: `1px solid ${p.color ? p.color + "33" : "var(--border)"}`, borderRadius: "7px", padding: ".3rem .45rem" }}>
                    {p.color && <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.color, flexShrink: 0 }} />}
                    <span style={{ fontSize: ".7rem", color: "var(--muted)", whiteSpace: "nowrap", maxWidth: 55, overflow: "hidden", textOverflow: "ellipsis" }}>{p.name || `G${i + 1}`}</span>
                    <input
                      type="number"
                      className="inp"
                      style={{ width: 46, textAlign: "center", fontFamily: "Orbitron", fontSize: ".78rem", padding: ".28rem .15rem" }}
                      value={(p.custom || {})[cat.id] || 0}
                      onChange={e => updCustom(i, cat.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Player management ── */}
      <div style={{ display: "flex", gap: ".5rem", marginBottom: ".75rem", flexWrap: "wrap" }}>
        <button className="btn btn-ghost btn-sm" onClick={() => ps.length < 6 && setPs([...ps, EP()])} disabled={ps.length >= 6}><span>+ Gracz</span></button>
        {ps.length > 2 && <button className="btn btn-del btn-sm" onClick={() => setPs(ps.slice(0, -1))}><span>− Usuń</span></button>}
        {customCats.length === 0 && <span style={{ fontSize: ".65rem", color: "var(--muted)", alignSelf: "center" }}>Dodatkowe kryteria → Ustawienia</span>}
      </div>

      <div style={{ fontSize: ".68rem", color: "var(--muted)", marginBottom: ".85rem", lineHeight: 1.7, padding: ".6rem .75rem", background: "var(--card)", borderRadius: "8px", border: "1px solid var(--border)" }}>
        TR · 🌿 Zieleniny · 🏙 Miasta · 🃏 Karty · ⭐ Tytuły · 🏆 Nagrody
        {customCats.length > 0 && <> · <span style={{ color: "var(--orange)" }}>+ {customCats.length} dodatkowe</span></>}
        <br /><span style={{ opacity: .7 }}>Kliknij wiersz gracza, aby zobaczyć pełny rozkład punktów.</span>
      </div>

      <button className="btn" onClick={doSave} disabled={saved}>
        <span>{saved ? "✓  Zapisano!" : "◈  Zapisz Wyniki"}</span>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  HISTORY VIEW
// ═══════════════════════════════════════════════════════
function HistoryView({ games, onDelete }) {
  if (!games.length) return <div><p className="stitle">Historia Wyników</p><div className="empty"><span className="empty-ico">◉</span>Brak zapisanych rozgrywek</div></div>;
  return (
    <div>
      <p className="stitle">Historia Wyników</p>
      <div style={{ fontSize: ".68rem", color: "var(--muted)", marginBottom: ".7rem" }}>{games.length} rozgrywek łącznie</div>
      {games.map(g => {
        const sorted = [...g.players].sort((a, b) => b.total - a.total);
        const d = new Date(g.date);
        return (
          <div key={g.id} className="rec">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".55rem" }}>
              <div style={{ fontSize: ".65rem", color: "var(--muted)", letterSpacing: ".07em" }}>
                {d.toLocaleDateString("pl-PL", { day: "numeric", month: "short", year: "numeric" })} · {d.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })}
              </div>
              <button className="btn btn-del btn-sm" style={{ padding: ".18rem .45rem" }} onClick={() => onDelete(g.id)}><span>✕</span></button>
            </div>
            {sorted.map((p, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".22rem 0", borderBottom: i < sorted.length - 1 ? "1px solid #181428" : "none" }}>
                <div style={{ display: "flex", gap: ".45rem", alignItems: "center" }}>
                  {i === 0 && <span className="win-badge">WIN</span>}
                  <span style={{ fontSize: ".86rem", color: i === 0 ? "var(--cream)" : "var(--muted)", fontWeight: i === 0 ? 600 : 400 }}>{p.name || `Gracz ${i + 1}`}</span>
                </div>
                <span style={{ fontFamily: "Orbitron", fontSize: ".78rem", color: i === 0 ? "var(--orange)" : "var(--muted)" }}>{p.total} VP</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  MONTHLY SUMMARY
// ═══════════════════════════════════════════════════════
function MonthView({ games }) {
  const now = new Date();
  const [sel, setSel] = useState(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);
  const [sY, sM] = sel.split("-").map(Number);

  const filtered = games.filter(g => { const d = new Date(g.date); return d.getFullYear() === sY && d.getMonth() + 1 === sM; });
  const pm = {};
  filtered.forEach(g => {
    const sorted = [...g.players].sort((a, b) => b.total - a.total);
    g.players.forEach(p => {
      const n = p.name || "Gracz";
      if (!pm[n]) pm[n] = { wins: 0, games: 0, total: 0, best: 0 };
      pm[n].games++; pm[n].total += p.total;
      if (p.total > pm[n].best) pm[n].best = p.total;
      if (sorted[0] === p) pm[n].wins++;
    });
  });

  const pl = Object.entries(pm).map(([name, s]) => ({ name, ...s, avg: Math.round(s.total / s.games), wr: Math.round((s.wins / s.games) * 100) })).sort((a, b) => b.wins - a.wins || b.avg - a.avg);
  const mSet = [...new Set(games.map(g => { const d = new Date(g.date); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`; }))].sort().reverse();
  if (!mSet.includes(sel)) mSet.unshift(sel);

  return (
    <div>
      <p className="stitle">Podsumowanie Miesiąca</p>
      <div style={{ marginBottom: ".85rem" }}>
        <select className="inp" value={sel} onChange={e => setSel(e.target.value)}>
          {mSet.map(m => <option key={m} value={m}>{new Date(m + "-01").toLocaleDateString("pl-PL", { month: "long", year: "numeric" })}</option>)}
        </select>
      </div>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-num">{filtered.length}</div><div className="stat-lbl">Rozgrywki</div></div>
        <div className="stat-card"><div className="stat-num">{pl.length}</div><div className="stat-lbl">Gracze</div></div>
        <div className="stat-card"><div className="stat-num">{pl[0]?.best ?? "—"}</div><div className="stat-lbl">Rekord</div></div>
      </div>
      {pl.length === 0
        ? <div className="empty" style={{ padding: "2rem 0" }}>Brak rozgrywek w wybranym miesiącu</div>
        : pl.map((p, i) => (
          <div key={p.name} className="rank-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".38rem" }}>
              <div style={{ display: "flex", gap: ".55rem", alignItems: "center" }}>
                <span style={{ fontFamily: "Orbitron", fontSize: ".82rem", color: i === 0 ? "var(--orange)" : "var(--muted)", minWidth: "1.1rem" }}>{i + 1}.</span>
                <span style={{ fontSize: ".95rem", fontWeight: 600 }}>{p.name}</span>
                {i === 0 && <span className="win-badge" style={{ background: "var(--orange)", color: "var(--bg)" }}>LIDER</span>}
              </div>
              <span style={{ fontFamily: "Orbitron", fontSize: ".82rem", color: "var(--orange)" }}>{p.wr}%</span>
            </div>
            <div style={{ display: "flex", gap: "1.1rem", fontSize: ".7rem", color: "var(--muted)" }}>
              <span>Gry: <strong style={{ color: "var(--cream)" }}>{p.games}</strong></span>
              <span>Wygrane: <strong style={{ color: "var(--cream)" }}>{p.wins}</strong></span>
              <span>Śr: <strong style={{ color: "var(--cream)" }}>{p.avg}</strong></span>
              <span>Max: <strong style={{ color: "var(--orange)" }}>{p.best}</strong></span>
            </div>
            <div className="prog-bar"><div className="prog-fill" style={{ width: `${p.wr}%` }} /></div>
          </div>
        ))
      }
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  STATS VIEW
// ═══════════════════════════════════════════════════════
const PC = ["#f07030","#3a9e6a","#5a8fd4","#d4a53a","#b060d0","#d45a5a","#40c0d0","#d45090"];

function StatsView({ games }) {
  const pm = {};
  games.forEach(g => {
    const sorted = [...g.players].sort((a, b) => b.total - a.total);
    g.players.forEach(p => {
      const n = p.name || "Gracz";
      if (!pm[n]) pm[n] = { wins: 0, games: 0, scores: [], best: 0 };
      pm[n].games++; pm[n].scores.push(p.total);
      if (p.total > pm[n].best) pm[n].best = p.total;
      if (sorted[0] === p) pm[n].wins++;
    });
  });

  const pl = Object.entries(pm).map(([name, s]) => ({
    name, wins: s.wins, games: s.games,
    avg: Math.round(s.scores.reduce((a, b) => a + b, 0) / s.games),
    best: s.best, wr: Math.round((s.wins / s.games) * 100),
  })).sort((a, b) => b.wr - a.wr || b.avg - a.avg);

  const barData = pl.map(p => ({ name: p.name.split(" ")[0], Średnia: p.avg, Rekord: p.best }));
  const trend = [...games].slice(0, 10).reverse().map((g, i) => {
    const o = { g: i + 1 };
    g.players.forEach(p => { o[p.name || "Gracz"] = p.total; });
    return o;
  });

  const topP = pl[0];
  const radarData = topP && games.length > 1 ? [
    { cat: "TR",        val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.tr)).reduce((a,b)=>a+b,0) / topP.games) },
    { cat: "Zieleniny", val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.greeneries)).reduce((a,b)=>a+b,0) / topP.games) },
    { cat: "Miasta",    val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.cities)).reduce((a,b)=>a+b,0) / topP.games) },
    { cat: "Karty",     val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.cards)).reduce((a,b)=>a+b,0) / topP.games) },
    { cat: "Tytuły",    val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.milestones)).reduce((a,b)=>a+b,0) / topP.games) },
    { cat: "Nagrody",   val: Math.round(games.flatMap(g => g.players.filter(p => (p.name||"Gracz") === topP.name).map(p => p.awards)).reduce((a,b)=>a+b,0) / topP.games) },
  ] : [];

  const glBest = games.length ? Math.max(...games.flatMap(g => g.players.map(p => p.total))) : 0;

  if (!games.length) return <div><p className="stitle">Statystyki</p><div className="empty"><span className="empty-ico">◑</span>Zagraj kilka partii!</div></div>;

  const TT = { contentStyle: { background: "#131020", border: "1px solid #28203e", borderRadius: "8px", fontFamily: "Exo 2", fontSize: ".78rem" }, labelStyle: { color: "#e8d8c0" }, itemStyle: { color: "#e8d8c0" } };

  return (
    <div>
      <p className="stitle">Statystyki Graczy</p>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-num">{games.length}</div><div className="stat-lbl">Gier</div></div>
        <div className="stat-card"><div className="stat-num">{pl.length}</div><div className="stat-lbl">Graczy</div></div>
        <div className="stat-card"><div className="stat-num">{glBest}</div><div className="stat-lbl">Rekord</div></div>
      </div>

      {barData.length > 0 && (
        <div className="card">
          <div className="card-lbl">Wyniki graczy</div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={barData} margin={{ top: 5, right: 5, left: -22, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#28203e" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#685870", fontFamily: "Exo 2" }} />
              <YAxis tick={{ fontSize: 10, fill: "#685870", fontFamily: "Exo 2" }} />
              <Tooltip {...TT} />
              <Bar dataKey="Średnia" fill="#f07030" radius={[4,4,0,0]} />
              <Bar dataKey="Rekord"  fill="#28203e" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {trend.length > 1 && (
        <div className="card">
          <div className="card-lbl">Trend (ostatnie {trend.length} gier)</div>
          <ResponsiveContainer width="100%" height={175}>
            <LineChart data={trend} margin={{ top: 5, right: 5, left: -22, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#28203e" vertical={false} />
              <XAxis dataKey="g" tick={{ fontSize: 10, fill: "#685870" }} />
              <YAxis tick={{ fontSize: 10, fill: "#685870" }} />
              <Tooltip {...TT} />
              {pl.map((p, i) => (
                <Line key={p.name} type="monotone" dataKey={p.name} stroke={PC[i % PC.length]} strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {radarData.length > 0 && topP && (
        <div className="card">
          <div className="card-lbl">Profil: {topP.name}</div>
          <ResponsiveContainer width="100%" height={210}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#28203e" />
              <PolarAngleAxis dataKey="cat" tick={{ fontSize: 10, fill: "#685870", fontFamily: "Exo 2" }} />
              <Radar dataKey="val" stroke="#f07030" fill="#f07030" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      <p style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--orange)", marginBottom: ".7rem" }}>Ranking Ogólny</p>
      {pl.map((p, i) => (
        <div key={p.name} className="rank-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".32rem" }}>
            <div style={{ display: "flex", gap: ".55rem", alignItems: "center" }}>
              <span style={{ fontFamily: "Orbitron", fontSize: ".82rem", color: i === 0 ? "var(--orange)" : "var(--muted)", minWidth: "1.1rem" }}>{i + 1}.</span>
              <span style={{ fontSize: ".95rem", fontWeight: 600 }}>{p.name}</span>
            </div>
            <span style={{ fontFamily: "Orbitron", fontSize: ".82rem", color: "var(--orange)" }}>{p.wr}% WR</span>
          </div>
          <div style={{ display: "flex", gap: "1rem", fontSize: ".7rem", color: "var(--muted)" }}>
            <span>Gry: <strong style={{ color: "var(--cream)" }}>{p.games}</strong></span>
            <span>Wyg: <strong style={{ color: "var(--cream)" }}>{p.wins}</strong></span>
            <span>Śr: <strong style={{ color: "var(--cream)" }}>{p.avg}</strong></span>
            <span>Max: <strong style={{ color: "var(--orange)" }}>{p.best}</strong></span>
          </div>
          <div className="prog-bar"><div className="prog-fill" style={{ width: `${p.wr}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  AI REPORT
// ═══════════════════════════════════════════════════════
function AIView({ games }) {
  const [report, setReport]  = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr]         = useState("");

  const generate = async () => {
    if (!games.length) { setErr("Brak danych. Zagraj kilka partii!"); return; }
    setLoading(true); setErr(""); setReport("");
    const summary = games.slice(0, 25).map(g => {
      const s = [...g.players].sort((a, b) => b.total - a.total);
      return `${new Date(g.date).toLocaleDateString("pl-PL")}: Zwycięzca ${s[0].name||"Gracz"} (${s[0].total}VP) | ${g.players.map(p=>`${p.name||"G"}:${p.total}VP[TR:${p.tr} 🌿:${p.greeneries} 🏙:${p.cities} 🃏:${p.cards} ⭐:${p.milestones} 🏆:${p.awards}]`).join(" | ")}`;
    }).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          messages: [{ role: "user", content: `Jesteś ekspertem od gry planszowej Terraformacja Marsa. Przeanalizuj poniższe wyniki rozgrywek i napisz wciągający raport po polsku. Zawrzyj: kto dominuje, ciekawe statystyki, trendy, porady strategiczne dla graczy. Pisz żywo i z pasją.\n\nRozgrywki (${games.length} łącznie):\n${summary}` }]
        })
      });
      const data = await res.json();
      if (data.content?.[0]?.text) setReport(data.content[0].text);
      else setErr("Błąd odpowiedzi AI.");
    } catch { setErr("Błąd połączenia z AI."); }
    setLoading(false);
  };

  return (
    <div>
      <p className="stitle">Raport AI</p>
      <div className="card" style={{ marginBottom: "1rem", borderColor: "#2a1f40" }}>
        <div className="card-lbl">Analiza Rozgrywek</div>
        <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>AI przeanalizuje historię rozgrywek i dostarczy strategiczny raport z wnioskami i poradami dla każdego gracza.</p>
        {games.length > 0 && <div style={{ marginTop: ".5rem", fontSize: ".7rem", color: "var(--orange)" }}>{games.length} rozgrywek w bazie</div>}
      </div>
      <button className="btn" onClick={generate} disabled={loading} style={{ marginBottom: "1rem" }}>
        <span>{loading ? "⟳  Analizowanie..." : "◈  Generuj Raport AI"}</span>
      </button>
      {loading && <><div className="ai-dots"><div className="ai-dot"/><div className="ai-dot"/><div className="ai-dot"/></div><p style={{textAlign:"center",fontSize:".68rem",color:"var(--muted)",letterSpacing:".12em"}}>PRZETWARZANIE DANYCH MARSJAŃSKICH...</p></>}
      {err && <div className="card" style={{ borderColor: "var(--red)", color: "#e04040", fontSize: ".83rem" }}>⚠ {err}</div>}
      {report && <div className="card" style={{ borderColor: "#2a1f40" }}><div className="card-lbl" style={{ color: "var(--orange)", marginBottom: ".7rem" }}>⬡ Analiza AI — {new Date().toLocaleDateString("pl-PL")}</div><div className="ai-text">{report}</div></div>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  SETTINGS VIEW
// ═══════════════════════════════════════════════════════
const CAT_PRESETS = [
  { emoji: "🪐", name: "Venus" },
  { emoji: "🌪️", name: "Turmoil" },
  { emoji: "🏛️", name: "Specjalne kafle" },
  { emoji: "🤝", name: "Delegaci" },
  { emoji: "💰", name: "Megakredyty" },
  { emoji: "⚗️", name: "Nauka" },
];

function SettingsView({ players, setPlayers, gameData, setGameData, onSavePlayers, onSaveGameData, customCats, setCustomCats, onSaveCustomCats }) {
  const [tab, setTab]         = useState("players");
  const [newName, setNewName] = useState("");
  const [editing, setEditing] = useState(null);
  const [editCat, setEditCat] = useState("boards");
  const [newItem, setNewItem] = useState("");
  // Custom scoring state
  const [newCatEmoji, setNewCatEmoji]   = useState("");
  const [newCatName, setNewCatName]     = useState("");
  const [editingCat, setEditingCat]     = useState(null); // id of cat being edited
  const [editCatVal, setEditCatVal]     = useState({ emoji: "", name: "" });

  // ── Players ──
  const addPlayer = () => {
    if (!newName.trim() || players.length >= 8) return;
    const used = players.map(p => p.color);
    const color = PLAYER_COLORS.find(c => !used.includes(c)) || PLAYER_COLORS[players.length % PLAYER_COLORS.length];
    const np = [...players, { id: Date.now(), name: newName.trim(), color }];
    setPlayers(np); onSavePlayers(np); setNewName("");
  };
  const removePlayer = id  => { const np = players.filter(p => p.id !== id); setPlayers(np); onSavePlayers(np); };
  const updColor     = (id, c) => { const np = players.map(p => p.id === id ? {...p, color:c} : p); setPlayers(np); onSavePlayers(np); };
  const updName      = (id, n) => { const np = players.map(p => p.id === id ? {...p, name:n} : p); setPlayers(np); onSavePlayers(np); };

  // ── Game data ──
  const addItem   = () => { if (!newItem.trim()) return; const u = {...gameData, [editCat]: [...gameData[editCat], newItem.trim()]}; setGameData(u); onSaveGameData(u); setNewItem(""); };
  const removeItem = i => { const u = {...gameData, [editCat]: gameData[editCat].filter((_,j) => j !== i)}; setGameData(u); onSaveGameData(u); };
  const resetCat   = () => { const u = {...gameData, [editCat]: [...DEFAULT_DATA[editCat]]}; setGameData(u); onSaveGameData(u); };

  // ── Custom scoring cats ──
  const addCustomCat = (emoji, name) => {
    const e = emoji.trim(); const n = name.trim();
    if (!n) return;
    const nc = [...customCats, { id: Date.now(), emoji: e, name: n }];
    setCustomCats(nc); onSaveCustomCats(nc);
    setNewCatEmoji(""); setNewCatName("");
  };
  const removeCustomCat = id => {
    const nc = customCats.filter(c => c.id !== id);
    setCustomCats(nc); onSaveCustomCats(nc);
  };
  const startEditCat = cat => { setEditingCat(cat.id); setEditCatVal({ emoji: cat.emoji || "", name: cat.name }); };
  const saveEditCat  = () => {
    const nc = customCats.map(c => c.id === editingCat ? { ...c, emoji: editCatVal.emoji, name: editCatVal.name } : c);
    setCustomCats(nc); onSaveCustomCats(nc); setEditingCat(null);
  };

  const GAME_CATS = [
    { key: "boards",       lbl: "Plansze"    },
    { key: "colonies",     lbl: "Kolonie"    },
    { key: "milestones",   lbl: "Tytuły"     },
    { key: "awards",       lbl: "Nagrody"    },
    { key: "preludes",     lbl: "Preludium"  },
    { key: "corporations", lbl: "Korporacje" },
  ];

  return (
    <div>
      <p className="stitle">Ustawienia</p>

      {/* ── Tab bar ── */}
      <div style={{ display: "flex", gap: ".4rem", marginBottom: "1.1rem" }}>
        {[
          { id: "players", lbl: "👤 Gracze"   },
          { id: "scoring", lbl: "📊 Punktacja" },
          { id: "data",    lbl: "🗂 Dane Gry"  },
        ].map(t => (
          <button key={t.id} className={`btn btn-sm ${tab === t.id ? "" : "btn-ghost"}`} onClick={() => setTab(t.id)} style={{ flex: 1 }}>
            <span>{t.lbl}</span>
          </button>
        ))}
      </div>

      {/* ── PLAYERS ── */}
      {tab === "players" && (
        <div>
          {players.length === 0 && <div className="empty" style={{ padding: "1.5rem 0" }}>Brak graczy. Dodaj pierwszego!</div>}
          {players.map(p => (
            <div key={p.id} className="card" style={{ borderColor: p.color + "33", marginBottom: ".6rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".55rem" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: p.color, boxShadow: `0 0 8px ${p.color}`, flexShrink: 0 }} />
                {editing === p.id
                  ? <input className="inp" style={{ flex: 1 }} value={p.name} autoFocus onChange={e => updName(p.id, e.target.value)} onKeyDown={e => e.key === "Enter" && setEditing(null)} />
                  : <span style={{ flex: 1, fontSize: ".95rem", fontWeight: 600 }}>{p.name}</span>}
                <button className="btn btn-ghost btn-sm" style={{ width: "auto", padding: ".3rem .55rem" }} onClick={() => setEditing(editing === p.id ? null : p.id)}><span>{editing === p.id ? "✓" : "✎"}</span></button>
                <button className="btn btn-del   btn-sm" style={{ width: "auto", padding: ".3rem .55rem" }} onClick={() => removePlayer(p.id)}><span>✕</span></button>
              </div>
              {editing === p.id && (
                <div className="color-pick">
                  {PLAYER_COLORS.map(c => <button key={c} className={`color-btn ${p.color === c ? "sel" : ""}`} style={{ background: c }} onClick={() => updColor(p.id, c)} />)}
                </div>
              )}
            </div>
          ))}
          {players.length < 8 && (
            <div style={{ display: "flex", gap: ".5rem", marginTop: ".4rem" }}>
              <input className="inp" placeholder="Imię gracza..." value={newName} onChange={e => setNewName(e.target.value)} onKeyDown={e => e.key === "Enter" && addPlayer()} />
              <button className="btn btn-green btn-sm" onClick={addPlayer} style={{ flexShrink: 0 }}><span>+ Dodaj</span></button>
            </div>
          )}
        </div>
      )}

      {/* ── CUSTOM SCORING ── */}
      {tab === "scoring" && (
        <div>
          {/* Info */}
          <div className="card" style={{ borderColor: "#2a1f40", marginBottom: ".85rem" }}>
            <div className="card-lbl">Dodatkowe Kryteria Punktacji</div>
            <p style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.65 }}>
              Dodaj własne kategorie punktów (np. z rozszerzeń Venus, Turmoil). Pojawią się w arkuszu wyników pod tabelą standardową.
            </p>
          </div>

          {/* Quick presets */}
          <div style={{ marginBottom: ".85rem" }}>
            <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)", marginBottom: ".5rem" }}>Szybkie dodanie</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
              {CAT_PRESETS.map(p => {
                const exists = customCats.some(c => c.name === p.name);
                return (
                  <button key={p.name} className={`btn btn-ghost btn-sm ${exists ? "" : ""}`}
                    onClick={() => !exists && addCustomCat(p.emoji, p.name)}
                    style={{ opacity: exists ? .4 : 1, cursor: exists ? "default" : "pointer" }}>
                    <span>{p.emoji} {p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current custom cats */}
          {customCats.length > 0 && (
            <div style={{ marginBottom: ".85rem" }}>
              <div style={{ fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: ".5rem" }}>
                Aktywne Kryteria ({customCats.length})
              </div>
              {customCats.map((cat, idx) => (
                <div key={cat.id} className="card" style={{ padding: ".65rem .85rem", marginBottom: ".45rem", borderColor: editingCat === cat.id ? "var(--orange2)" : "var(--border)" }}>
                  {editingCat === cat.id ? (
                    <div>
                      <div style={{ display: "flex", gap: ".4rem", marginBottom: ".5rem" }}>
                        <input className="inp" style={{ width: 55, textAlign: "center" }} placeholder="🪐" value={editCatVal.emoji} onChange={e => setEditCatVal(v => ({...v, emoji: e.target.value}))} />
                        <input className="inp" style={{ flex: 1 }} value={editCatVal.name} onChange={e => setEditCatVal(v => ({...v, name: e.target.value}))} onKeyDown={e => e.key === "Enter" && saveEditCat()} autoFocus />
                      </div>
                      <div style={{ display: "flex", gap: ".4rem" }}>
                        <button className="btn btn-green btn-sm" onClick={saveEditCat} style={{ flex: 1 }}><span>✓ Zapisz</span></button>
                        <button className="btn btn-ghost btn-sm" onClick={() => setEditingCat(null)} style={{ flex: 1 }}><span>Anuluj</span></button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: ".55rem" }}>
                      <span style={{ fontSize: "1.1rem", lineHeight: 1, flexShrink: 0 }}>{cat.emoji || "◆"}</span>
                      <span style={{ flex: 1, fontSize: ".88rem", fontWeight: 600 }}>{cat.name}</span>
                      <button className="btn btn-ghost btn-sm" style={{ width: "auto", padding: ".28rem .5rem" }} onClick={() => startEditCat(cat)}><span>✎</span></button>
                      <button className="btn btn-del   btn-sm" style={{ width: "auto", padding: ".28rem .5rem" }} onClick={() => removeCustomCat(cat.id)}><span>✕</span></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {customCats.length === 0 && (
            <div className="empty" style={{ padding: "1.5rem 0" }}>
              Brak dodatkowych kryteriów.<br />Użyj szybkiego dodania lub formularza poniżej.
            </div>
          )}

          {/* Add new */}
          <div className="card" style={{ borderColor: "#1a1f40" }}>
            <div className="card-lbl">Nowe kryterium</div>
            <div style={{ display: "flex", gap: ".4rem", marginBottom: ".5rem" }}>
              <input className="inp" style={{ width: 55, textAlign: "center", fontSize: "1rem" }}
                placeholder="🏆" value={newCatEmoji} onChange={e => setNewCatEmoji(e.target.value)} />
              <input className="inp" style={{ flex: 1 }} placeholder="Nazwa kategorii..."
                value={newCatName} onChange={e => setNewCatName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addCustomCat(newCatEmoji, newCatName)} />
            </div>
            <button className="btn btn-green" onClick={() => addCustomCat(newCatEmoji, newCatName)}>
              <span>+ Dodaj Kryterium</span>
            </button>
          </div>
        </div>
      )}

      {/* ── GAME DATA ── */}
      {tab === "data" && (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".3rem", marginBottom: ".85rem" }}>
            {GAME_CATS.map(c => (
              <button key={c.key} className={`btn btn-sm ${editCat === c.key ? "" : "btn-ghost"}`} onClick={() => { setEditCat(c.key); setNewItem(""); }} style={{ flex: "none" }}>
                <span>{c.lbl}</span>
              </button>
            ))}
          </div>
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".55rem" }}>
              <div className="card-lbl" style={{ marginBottom: 0 }}>{GAME_CATS.find(c => c.key === editCat)?.lbl} ({gameData[editCat].length})</div>
              <button className="btn btn-ghost btn-sm" onClick={resetCat} style={{ fontSize: ".48rem" }}><span>↺ Reset</span></button>
            </div>
            <div style={{ maxHeight: "260px", overflowY: "auto", marginBottom: ".65rem" }}>
              {gameData[editCat].map((item, idx) => (
                <div key={idx} className="set-item">
                  <span className="set-item-name">{item}</span>
                  <button className="btn btn-del btn-sm" onClick={() => removeItem(idx)} style={{ width: "auto", padding: ".13rem .38rem", flexShrink: 0 }}><span>✕</span></button>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: ".45rem" }}>
              <input className="inp" placeholder="Dodaj pozycję..." value={newItem} onChange={e => setNewItem(e.target.value)} onKeyDown={e => e.key === "Enter" && addItem()} />
              <button className="btn btn-green btn-sm" onClick={addItem} style={{ flexShrink: 0 }}><span>+</span></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  TIMER VIEW
// ═══════════════════════════════════════════════════════
const CIRC = 2 * Math.PI * 88; // circumference for r=88

function TimerView({ onFinish }) {
  const [elapsed,  setElapsed]  = useState(0);
  const [phase,    setPhase]    = useState("idle"); // idle | running | paused
  const [history,  setHistory]  = useState([]);
  const intervalRef = useRef(null);
  const startRef    = useRef(0);

  useEffect(() => {
    loadData("tfm:timerHist").then(h => { if (h) setHistory(h); });
  }, []);

  useEffect(() => {
    if (phase === "running") {
      startRef.current = Date.now() - elapsed * 1000;
      intervalRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
      }, 200);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [phase]);

  const fmtTime = s => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
      : `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
  };
  const fmtMin = s => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  };

  const handleStart  = () => setPhase("running");
  const handlePause  = () => setPhase("paused");
  const handleResume = () => setPhase("running");

  const handleStop = async () => {
    setPhase("idle");
    if (elapsed < 5) { setElapsed(0); return; }
    const entry = { date: new Date().toISOString(), duration: elapsed };
    const h = [entry, ...history].slice(0, 15);
    setHistory(h);
    await saveData("tfm:timerHist", h);
    onFinish?.(elapsed);
    setElapsed(0);
  };

  const handleReset = () => { setPhase("idle"); setElapsed(0); };

  const deleteHistEntry = async idx => {
    const h = history.filter((_, i) => i !== idx);
    setHistory(h);
    await saveData("tfm:timerHist", h);
  };

  // Ring: animate per-minute cycle (resets every 60s for visual interest)
  const ringPct  = (elapsed % 3600) / 3600;
  const ringOffset = CIRC * (1 - ringPct);
  const ringColor  = phase === "running" ? "var(--orange)"
                   : phase === "paused"  ? "#5a8fd4"
                   : "var(--border)";

  return (
    <div>
      <p className="stitle">Mierzenie Partii</p>

      {/* Ring clock */}
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.5rem 1rem 1rem", marginBottom: ".75rem" }}>
        <div className="timer-ring-wrap">
          <svg className="timer-ring-svg" width="200" height="200" style={{ transform: "rotate(-90deg)" }}>
            <circle className="timer-ring-bg" cx="100" cy="100" r="88" />
            <circle
              className="timer-ring-fg"
              cx="100" cy="100" r="88"
              strokeDasharray={CIRC}
              strokeDashoffset={phase === "idle" ? CIRC : ringOffset}
              style={{ stroke: ringColor }}
            />
          </svg>
          <div className="timer-clock">
            <div className="timer-time">{fmtTime(elapsed)}</div>
            <div className="timer-status">
              {phase === "idle" ? "gotowy" : phase === "running" ? "▶ gra trwa" : "⏸ pauza"}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="timer-btns">
          {phase === "idle" && (
            <button className="btn btn-green btn-sm" onClick={handleStart} style={{ flex: 1, maxWidth: 160 }}>
              <span>▶ Start</span>
            </button>
          )}
          {phase === "running" && <>
            <button className="btn btn-ghost btn-sm" onClick={handlePause} style={{ flex: 1 }}><span>⏸ Pauza</span></button>
            <button className="btn btn-del   btn-sm" onClick={handleStop}  style={{ flex: 1 }}><span>⏹ Zapisz</span></button>
          </>}
          {phase === "paused" && <>
            <button className="btn btn-sm"           onClick={handleResume} style={{ flex: 1 }}><span>▶ Wznów</span></button>
            <button className="btn btn-del   btn-sm" onClick={handleStop}   style={{ flex: 1 }}><span>⏹ Zapisz</span></button>
            <button className="btn btn-ghost btn-sm" onClick={handleReset}  style={{ flex: "none", width: "auto", padding: ".38rem .65rem" }}><span>↺</span></button>
          </>}
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <>
          <p style={{ fontSize: ".58rem", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--orange)", marginBottom: ".65rem" }}>Historia Czasów</p>
          {history.map((h, i) => {
            const d = new Date(h.date);
            return (
              <div key={i} className="rec" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "Orbitron", fontSize: ".88rem", color: "var(--cream)", fontWeight: 600 }}>{fmtMin(h.duration)}</div>
                  <div style={{ fontSize: ".62rem", color: "var(--muted)", marginTop: ".1rem" }}>
                    {d.toLocaleDateString("pl-PL", { day: "numeric", month: "short" })} · {d.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
                <button className="btn btn-del btn-sm" onClick={() => deleteHistEntry(i)} style={{ width: "auto", padding: ".2rem .45rem" }}><span>✕</span></button>
              </div>
            );
          })}
          {history.length > 1 && (
            <div className="card" style={{ marginTop: ".4rem" }}>
              <div className="card-lbl">Średni czas</div>
              <div style={{ fontFamily: "Orbitron", fontSize: "1rem", color: "var(--orange)" }}>
                {fmtMin(Math.round(history.reduce((a, h) => a + h.duration, 0) / history.length))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  FIRST PLAYER LOTTERY
// ═══════════════════════════════════════════════════════
function FirstPlayerLottery({ players, onClose }) {
  const canvasRef  = useRef(null);
  const rafRef     = useRef(null);
  const stateRef   = useRef({ phase: "idle", angle: 0, speed: 0, winner: -1 });
  const [uiPhase,  setUiPhase]  = useState("idle");   // idle | spinning | result
  const [winner,   setWinner]   = useState(null);
  const [particles, setParticles] = useState([]);

  const W = 320, H = 320, CX = 160, CY = 160, ORBIT_R = 108;
  const n = players.length;

  // Stable player angles on orbit
  const playerAngles = players.map((_, i) => (i / n) * Math.PI * 2 - Math.PI / 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    const drawMars = () => {
      // Outer glow rings
      [1.6, 1.35, 1.15].forEach((scale, ri) => {
        ctx.beginPath();
        ctx.arc(CX, CY, 42 * scale, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232,104,42,${0.06 - ri * 0.015})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      // Mars body
      const grd = ctx.createRadialGradient(CX - 12, CY - 10, 2, CX, CY, 42);
      grd.addColorStop(0, "#e07848");
      grd.addColorStop(0.45, "#c03018");
      grd.addColorStop(1, "#3a0808");
      ctx.beginPath(); ctx.arc(CX, CY, 42, 0, Math.PI * 2);
      ctx.fillStyle = grd; ctx.fill();
      // Highlight
      ctx.beginPath();
      ctx.ellipse(CX - 9, CY - 11, 14, 8, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,240,220,.28)"; ctx.fill();
    };

    const drawOrbit = () => {
      ctx.beginPath(); ctx.arc(CX, CY, ORBIT_R, 0, Math.PI * 2);
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = "rgba(240,112,48,.14)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawBeam = angle => {
      ctx.save(); ctx.translate(CX, CY); ctx.rotate(angle);
      const grad = ctx.createLinearGradient(0, 0, ORBIT_R + 24, 0);
      grad.addColorStop(0, "rgba(240,112,48,.0)");
      grad.addColorStop(0.5, "rgba(240,112,48,.22)");
      grad.addColorStop(1, "rgba(240,112,48,.0)");
      ctx.beginPath();
      ctx.moveTo(44, 0);
      const halfAngle = 0.22;
      ctx.lineTo(Math.cos(-halfAngle) * (ORBIT_R + 22), Math.sin(-halfAngle) * (ORBIT_R + 22));
      ctx.lineTo(Math.cos(halfAngle) * (ORBIT_R + 22), Math.sin(halfAngle) * (ORBIT_R + 22));
      ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
      // Beam tip dot
      ctx.beginPath(); ctx.arc(ORBIT_R, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(240,112,48,.8)"; ctx.fill();
      ctx.restore();
    };

    const drawPlayers = (beamAngle, phase, winnerIdx) => {
      players.forEach((p, i) => {
        const ang = playerAngles[i];
        const px = CX + Math.cos(ang) * ORBIT_R;
        const py = CY + Math.sin(ang) * ORBIT_R;

        // How close is beam to this player?
        const normBeam = ((beamAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const normAng  = ((ang + Math.PI * 2) % (Math.PI * 2));
        const diff = Math.min(Math.abs(normBeam - normAng), Math.PI * 2 - Math.abs(normBeam - normAng));
        const isLit  = phase === "spinning" && diff < 0.3;
        const isWin  = phase === "result" && winnerIdx === i;
        const r = isWin ? 19 : 13;

        if (isLit || isWin) {
          ctx.shadowBlur = isWin ? 32 : 16;
          ctx.shadowColor = p.color;
        }
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.fill();
        if (isWin) {
          ctx.beginPath(); ctx.arc(px, py, r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = p.color + "66"; ctx.lineWidth = 2; ctx.stroke();
        }
        ctx.shadowBlur = 0;

        // Name label
        const lblR = ORBIT_R + 26;
        const lx = CX + Math.cos(ang) * lblR;
        const ly = CY + Math.sin(ang) * lblR;
        ctx.font = `${isWin ? "bold " : ""}10px 'Exo 2',sans-serif`;
        ctx.fillStyle = isWin ? "#fff" : isLit ? "rgba(255,255,255,.9)" : "rgba(180,160,170,.55)";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        // Clip long names
        const name = p.name.length > 9 ? p.name.slice(0, 8) + "…" : p.name;
        ctx.fillText(name, lx, ly);
      });
    };

    const draw = () => {
      const s = stateRef.current;
      ctx.clearRect(0, 0, W, H);
      drawOrbit();
      if (s.phase !== "idle") drawBeam(s.angle);
      drawMars();
      drawPlayers(s.angle, s.phase, s.winner);
    };

    const loop = () => {
      const s = stateRef.current;
      if (s.phase === "spinning") {
        s.angle += s.speed;
        s.speed *= 0.984;
        if (s.speed < 0.006) {
          // Find closest player
          const norm = ((s.angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
          let best = 0, bestD = Infinity;
          playerAngles.forEach((a, i) => {
            const na = ((a + Math.PI * 2) % (Math.PI * 2));
            const d  = Math.min(Math.abs(norm - na), Math.PI * 2 - Math.abs(norm - na));
            if (d < bestD) { bestD = d; best = i; }
          });
          // Snap angle to winner
          s.angle = playerAngles[best];
          s.phase  = "result";
          s.winner = best;
          setUiPhase("result");
          setWinner(players[best]);
          // Spawn particles
          const px = CX + Math.cos(playerAngles[best]) * ORBIT_R;
          const py = CY + Math.sin(playerAngles[best]) * ORBIT_R;
          const newP = Array.from({ length: 18 }, (_, j) => ({
            id: Date.now() + j,
            x: px, y: py,
            tx: (Math.random() - .5) * 120 + "px",
            ty: (Math.random() - .5) * 120 + "px",
            color: players[best].color,
          }));
          setParticles(newP);
          setTimeout(() => setParticles([]), 1000);
        }
      }
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    draw();
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [players]);

  const spin = () => {
    stateRef.current = { phase: "spinning", angle: stateRef.current.angle, speed: 0.28 + Math.random() * 0.14, winner: -1 };
    setUiPhase("spinning"); setWinner(null); setParticles([]);
  };

  const reset = () => {
    stateRef.current = { phase: "idle", angle: 0, speed: 0, winner: -1 };
    setUiPhase("idle"); setWinner(null); setParticles([]);
  };

  return (
    <div className="fp-ov">
      <StarField />

      <div className="fp-topbar" style={{ zIndex: 4 }}>
        <div style={{ fontFamily: "Orbitron", fontSize: ".58rem", letterSpacing: ".3em", color: "var(--muted)" }}>PIERWSZY GRACZ</div>
        <button onClick={onClose} style={{ background: "none", border: "1px solid var(--border)", color: "var(--muted)", borderRadius: "4px", padding: ".18rem .55rem", cursor: "pointer", fontFamily: "Orbitron", fontSize: ".5rem", letterSpacing: ".1em", position: "relative", zIndex: 4 }}>✕</button>
      </div>

      <div className="fp-canvas-wrap" style={{ zIndex: 3, position: "relative" }}>
        <canvas ref={canvasRef} style={{ display: "block", maxWidth: "100%", maxHeight: "60vw" }} />
        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="particle"
            style={{
              left: p.x, top: p.y,
              background: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              "--tx": p.tx, "--ty": p.ty,
              animationDelay: Math.random() * 0.15 + "s",
            }}
          />
        ))}
      </div>

      {/* Winner reveal */}
      <div style={{ position: "relative", zIndex: 3, textAlign: "center", minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {winner ? (
          <>
            <div className="fp-winner-sub">Pierwszy Gracz</div>
            <div className="fp-winner-name" style={{ color: winner.color, textShadow: `0 0 40px ${winner.color}, 0 0 80px ${winner.color}55` }}>
              {winner.name}
            </div>
          </>
        ) : uiPhase === "idle" ? (
          <div style={{ fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em" }}>Naciśnij, aby wylosować pierwszego gracza</div>
        ) : (
          <div className="ai-dots" style={{ padding: ".5rem 0" }}>
            <div className="ai-dot" /><div className="ai-dot" /><div className="ai-dot" />
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ position: "relative", zIndex: 3, width: "100%", padding: "0 1.25rem", display: "flex", gap: ".6rem" }}>
        {uiPhase !== "spinning" && (
          <button className="btn" onClick={spin} style={{ flex: 1 }}>
            <span>{winner ? "◈ Losuj Ponownie" : "◈ Losuj"}</span>
          </button>
        )}
        {winner && uiPhase !== "spinning" && (
          <button className="btn btn-ghost" onClick={reset} style={{ flex: "none", width: "auto", padding: ".72rem 1rem" }}>
            <span>↺</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  GAME VIEW (Timer + First Player)
// ═══════════════════════════════════════════════════════
function GameView({ players }) {
  const [tab,    setTab]    = useState("timer");
  const [showFP, setShowFP] = useState(false);

  return (
    <div>
      <p className="stitle">Gra</p>

      <div style={{ display: "flex", gap: ".5rem", marginBottom: "1rem" }}>
        <button className={`btn btn-sm ${tab === "timer"  ? "" : "btn-ghost"}`} onClick={() => setTab("timer")}  style={{ flex: 1 }}><span>⏱ Stoper</span></button>
        <button className={`btn btn-sm ${tab === "player" ? "" : "btn-ghost"}`} onClick={() => setTab("player")} style={{ flex: 1 }}><span>🚀 Pierwszy Gracz</span></button>
      </div>

      {tab === "timer" && <TimerView />}

      {tab === "player" && (
        players.length < 2
          ? (
            <div className="card" style={{ borderColor: "#3a1f10", textAlign: "center", padding: "2rem 1rem" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: ".6rem", opacity: .4 }}>🚀</div>
              <div style={{ fontFamily: "Orbitron", fontSize: ".65rem", letterSpacing: ".2em", color: "var(--orange)", marginBottom: ".45rem" }}>Minimum 2 graczy</div>
              <div style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.7 }}>
                Dodaj graczy w<br /><strong style={{ color: "var(--cream)" }}>Ustawienia → Gracze</strong>
              </div>
            </div>
          ) : (
            <div>
              <div className="card" style={{ borderColor: "#1f2a40", marginBottom: ".75rem" }}>
                <div className="card-lbl">Gracze ({players.length})</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginBottom: ".85rem" }}>
                  {players.map(p => (
                    <div key={p.id} style={{ display: "flex", alignItems: "center", gap: ".3rem", background: "#1a1530", border: "1px solid var(--border)", borderRadius: "5px", padding: ".2rem .5rem" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, boxShadow: `0 0 5px ${p.color}` }} />
                      <span style={{ fontSize: ".8rem" }}>{p.name}</span>
                    </div>
                  ))}
                </div>
                <button className="btn" onClick={() => setShowFP(true)}>
                  <span>🚀 Wylosuj Pierwszego Gracza</span>
                </button>
              </div>
            </div>
          )
      )}

      {showFP && players.length >= 2 && (
        <FirstPlayerLottery players={players} onClose={() => setShowFP(false)} />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
//  ROOT APP
// ═══════════════════════════════════════════════════════
const NAV = [
  { id: "draft",    ico: "◈", lbl: "Losuj"   },
  { id: "score",    ico: "✦", lbl: "Wyniki"  },
  { id: "game",     ico: "⏱", lbl: "Gra"     },
  { id: "history",  ico: "◉", lbl: "Historia"},
  { id: "stats",    ico: "◑", lbl: "Stat."   },
  { id: "ai",       ico: "⬡", lbl: "AI"      },
  { id: "settings", ico: "⚙", lbl: "Ustaw."  },
];

export default function App() {
  const [view,       setView]       = useState("draft");
  const [games,      setGames]      = useState([]);
  const [players,    setPlayers]    = useState([]);
  const [gameData,   setGameData]   = useState(() => ({ ...DEFAULT_DATA }));
  const [customCats, setCustomCats] = useState([]);

  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
    Promise.all([
      loadData("tfm:games"),
      loadData("tfm:players"),
      loadData("tfm:customData"),
      loadData("tfm:customCats"),
    ]).then(([g, p, d, cats]) => {
      if (g)    setGames(g);
      if (p)    setPlayers(p);
      if (d)    setGameData(d);
      if (cats) setCustomCats(cats);
    });
    return () => document.head.removeChild(el);
  }, []);

  const reload         = async () => { const d = await loadData("tfm:games"); if (d) setGames(d); };
  const delGame        = async id => { const u = games.filter(g => g.id !== id); setGames(u); await saveData("tfm:games", u); };
  const savePlayers    = p    => { setPlayers(p);    saveData("tfm:players",    p); };
  const saveGD         = d    => { setGameData(d);   saveData("tfm:customData", d); };
  const saveCustomCats = cats => { setCustomCats(cats); saveData("tfm:customCats", cats); };

  return (
    <div className="app">
      <header className="hdr">
        <div><div className="logo">Terraformacja Marsa</div><div className="logo-sub">Companion App</div></div>
        <div className="hdr-badge">TFM v2.3</div>
      </header>

      <main className="content">
        {view === "draft"    && <DraftView players={players} gameData={gameData} />}
        {view === "score"    && <ScoreView onSave={reload} players={players} customCats={customCats} />}
        {view === "game"     && <GameView players={players} />}
        {view === "history"  && <HistoryView games={games} onDelete={delGame} />}
        {view === "month"    && <MonthView games={games} />}
        {view === "stats"    && <StatsView games={games} />}
        {view === "ai"       && <AIView games={games} />}
        {view === "settings" && (
          <SettingsView
            players={players} setPlayers={setPlayers}
            gameData={gameData} setGameData={setGameData}
            onSavePlayers={savePlayers} onSaveGameData={saveGD}
            customCats={customCats} setCustomCats={setCustomCats} onSaveCustomCats={saveCustomCats}
          />
        )}
      </main>

      <nav className="nav">
        {NAV.map(n => (
          <button key={n.id} className={`nav-btn ${view === n.id ? "active" : ""}`} onClick={() => setView(n.id)}>
            <span className="nav-ico">{n.ico}</span>
            <span className="nav-lbl">{n.lbl}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
