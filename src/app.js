const { useState, useEffect, useRef } = React;

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DEFAULT_DATA = {
  boards: ["Tharsis", "Hellas", "Elysium"],
  colonies: ["IO", "Ganimedes", "Kallisto", "Miranda", "Europa", "Ceres", "Księżyc", "Enceladus", "Pluton", "Tytan", "Tryton"],
  awards: ["Hamulcowy", "Rubieże Marsa", "Kolonizator", "Dezorganizator", "Górnik", "Magnat", "Budowniczy", "Księżycowy Magnat", "Planetariusz", "Bankier", "W Punkt", "Hydrofob", "W Centrum Wydarzeń", "Celebryta", "Wykonawca", "Wenufil", "Przemysłowiec", "Kolekcjoner", "Osadnik Pustyni", "Architekt", "Tu Ziemia", "Kosmiczny Baron", "Ekscentryk", "Kultywator", "Przodownik", "Bojownik", "Naukowiec", "Deweloper", "Eko Miasto", "Dobroczyńca", "Aktywista Klimatyczny", "Na Równiku", "Magnat Cieplny", "Pełnia Księżyca", "Hodowca", "Poza Marsem", "Bez Rozgłosu"],
  milestones: ["Władcy Przestworzy", "Wenusjanin", "Farmer", "Destruktor", "Legenda", "Prezydent", "Wielki Krok", "Oszczędności", "Omnibus", "Odkrywca Polarny", "Przy Władzy", "Kolonista", "Odludzie", "Ziemianin", "Dostawca Energii", "Osadnik Rubieży", "Międzyplanetarny", "Gotówka", "Specjalista", "Sabotażysta", "Dywersyfikator", "Gwiezdny Kupiec", "Specjalista od Obszarów", "Taktyk", "Poszukiwacz", "Multimilioner", "Astronom", "Planista", "Ogrodnik", "Elektryk", "Poza Zasięgiem", "Ekolog", "Terraformator", "Konstruktor", "Bezinteresowny", "Lunarchitekt", "Inwestor", "Mikrobiolog", "Balans", "Niesymboliczny"],
  preludes: ["Biopaliwa", "Legendarny Operator", "Samowystarczalna Osada", "Wspomaganie Biosfery", "Dostawa Surowców", "Darowizna", "Górnictwo w Obszarze Mohole", "Wsparcie Społeczeństwa", "Placówka Badawcza na IO", "Pożyczka", "Turbiny Wodne", "Ogromna Planetoida", "Ekscentryczny Sponsor", "Generatory Energii", "Górnictwo na Księżycach Galileuszowych", "Jowiszowe Kasyno", "Program Stałych Lotów", "Eksperci od Ekologii", "Dostawa", "Gmina Eklektyczna", "Kolonizacja Fali Zero", "Biznesowe Imperium", "Pierwsze Osadnictwo", "Kolonia Nuklearna", "Przemysł Marsjański", "Przedsięwzięcie Górnicze", "Podwykonawca Unmi", "Planetoida Klasy M", "Rolnictwo Kopułowe", "Sieć Badawcza", "Eksperymentalny Las", "Nudna Placówka", "Projekt Mohole", "Wsparcie Przedsięwzięcia", "Spółka Hutnicza", "Przemysł Polarny", "Wielka Warstwa Wodonośna", "Laboratorium Biologiczne", "Sprzymierzony Bank", "Spółka Metalurgiczna", "Zakup Agencji Kosmicznej", "Stocznia Orbitalna", "Dostawa Azotu"],
  corporations: ["Tax Corp", "TerraLabs", "Digital Science", "Terraforming Solution Ltd", "Republika Tharsis", "Teractor", "Hard Hat Construction", "The Grand Luna Capital Group", "Microbia", "Unitrix", "Spaceways", "Blooming Vales", "Dubai Colonies", "Saturn Systems", "Hydrodynamics", "Mons Insurance", "Marabout Shiritori", "Arklight", "Stormcraft Incorporated", "Mars Nomads", "Polyphemos", "Point Luna", "Manutech", "Thorgate", "Pristar", "Agua Corp", "Mars Trade Federation", "Luna First Incorporated", "Venus Princess", "Factorum", "Credicor", "Napotech Industries", "Celestic", "United Mars Charities", "Mining Guild", "Valley Trust", "Omnisearch", "Luna Trade Federation", "Viron", "Robinson Industries", "Mars Express", "Ares Technology", "Oxylabs", "Mars Nuclear Facility", "Luna Hyperloop Corporation", "Poseidon", "Nuclear Power Plant Inc.", "Tempest Consultancy", "Inventrix", "Deep Space Freight Lines", "Utopia Invest", "Vitor", "The Darkside of the Moon Syndicate", "Fusiongate", "ArkLab Inc.", "Eonix", "Pathfinder", "Mega Security Corp", "Aerospace Alloys", "Aridor", "Ecoline", "Phoblog", "Aphrodite", "Septem Tribus", "Plantopia", "Morning Star Inc.", "Sky Ranchers", "Chronicles Crime", "Mimix", "Crescent Research Association", "Aperture Science", "Intragen Sanctuary Headquarters", "Lakefront Resorts", "United Nations Mars Initiative", "Aquarius", "Hermetic Order of Mars", "Helion", "Interplanetary Cinematics", "Philares", "Material Engineering", "Cheung Shing Mars", "Barsoom Retro-Future", "Politicorp", "The Archaic Foundation Institute"]
};
var PLAYER_COLORS = ["#f07030", "#3a9e6a", "#5a8fd4", "#d4a53a", "#b060d0", "#d45a5a", "#40c0d0", "#d45090"];
function shuffle(arr) {
  var a = [].concat(arr);
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [a[j], a[i]];
    a[i] = _ref[0];
    a[j] = _ref[1];
  }
  return a;
}
function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}
function loadData(key) {
  try {
    var v = localStorage.getItem(key);
    return Promise.resolve(v ? JSON.parse(v) : null);
  } catch (_unused) {
    return Promise.resolve(null);
  }
}
function saveData(key, val) {
  try {
    if (val === null || val === undefined) localStorage.removeItem(key);else localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
  return Promise.resolve();
}

// ═══ SOUNDS ═══
var _audioCtx = null,
  _soundEnabled = true;
function getAudioCtx() {
  try {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (_audioCtx.state === "suspended") _audioCtx.resume();
    return _audioCtx;
  } catch (_unused2) {
    return null;
  }
}
function playTone(_temp) {
  var _ref2 = _temp === void 0 ? {} : _temp,
    _ref2$freq = _ref2.freq,
    freq = _ref2$freq === void 0 ? 440 : _ref2$freq,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? "sine" : _ref2$type,
    _ref2$vol = _ref2.vol,
    vol = _ref2$vol === void 0 ? 0.15 : _ref2$vol,
    _ref2$dur = _ref2.dur,
    dur = _ref2$dur === void 0 ? 0.12 : _ref2$dur,
    _ref2$delay = _ref2.delay,
    delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
    _ref2$bend = _ref2.bend,
    bend = _ref2$bend === void 0 ? 0 : _ref2$bend;
  if (!_soundEnabled) return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  var t = ctx.currentTime + delay;
  var osc = ctx.createOscillator();
  var gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (bend) osc.frequency.exponentialRampToValueAtTime(freq * bend, t + dur);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
  osc.start(t);
  osc.stop(t + dur + 0.01);
}
function playNoise(_temp2) {
  var _ref3 = _temp2 === void 0 ? {} : _temp2,
    _ref3$vol = _ref3.vol,
    vol = _ref3$vol === void 0 ? 0.08 : _ref3$vol,
    _ref3$dur = _ref3.dur,
    dur = _ref3$dur === void 0 ? 0.05 : _ref3$dur,
    _ref3$delay = _ref3.delay,
    delay = _ref3$delay === void 0 ? 0 : _ref3$delay;
  if (!_soundEnabled) return;
  var ctx = getAudioCtx();
  if (!ctx) return;
  var t = ctx.currentTime + delay;
  var buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
  var data = buf.getChannelData(0);
  for (var i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  var src = ctx.createBufferSource();
  var gain = ctx.createGain();
  var filt = ctx.createBiquadFilter();
  filt.type = "bandpass";
  filt.frequency.value = 3000;
  filt.Q.value = 0.5;
  src.buffer = buf;
  src.connect(filt);
  filt.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
  src.start(t);
  src.stop(t + dur + 0.01);
}
var SFX = {
  click: function click() {
    return playTone({
      freq: 660,
      type: "square",
      vol: 0.06,
      dur: 0.05,
      bend: 0.85
    });
  },
  slotTick: function slotTick() {
    return playTone({
      freq: 400 + Math.random() * 600,
      type: "square",
      vol: 0.03,
      dur: 0.04
    });
  },
  slotLock: function slotLock() {
    playTone({
      freq: 520,
      type: "sine",
      vol: 0.18,
      dur: 0.06
    });
    playTone({
      freq: 1040,
      type: "sine",
      vol: 0.12,
      dur: 0.18,
      delay: 0.05,
      bend: 0.6
    });
    playNoise({
      vol: 0.06,
      dur: 0.04
    });
  },
  boardLock: function boardLock() {
    [1, 1.26, 1.5, 2].forEach(function (m, i) {
      return playTone({
        freq: 220 * m,
        type: "sine",
        vol: 0.2 - i * 0.04,
        dur: 0.4,
        delay: i * 0.08,
        bend: 0.7
      });
    });
    playNoise({
      vol: 0.08,
      dur: 0.08
    });
  },
  advance: function advance() {
    playTone({
      freq: 880,
      type: "sine",
      vol: 0.1,
      dur: 0.08
    });
    playTone({
      freq: 1100,
      type: "sine",
      vol: 0.08,
      dur: 0.1,
      delay: 0.08
    });
  },
  victory: function victory() {
    [523, 659, 784, 1047].forEach(function (f, i) {
      return playTone({
        freq: f,
        type: "sine",
        vol: 0.18,
        dur: 0.25,
        delay: i * 0.12,
        bend: 1.02
      });
    });
    playTone({
      freq: 1047,
      type: "sine",
      vol: 0.22,
      dur: 0.5,
      delay: 0.48,
      bend: 0.95
    });
  },
  spin: function spin() {
    for (var i = 0; i < 6; i++) playTone({
      freq: 300 + i * 80,
      type: "sawtooth",
      vol: 0.04,
      dur: 0.08,
      delay: i * 0.03,
      bend: 1.3
    });
  },
  winnerReveal: function winnerReveal() {
    [392, 494, 587, 784, 1047].forEach(function (f, i) {
      return playTone({
        freq: f,
        type: "sine",
        vol: 0.22,
        dur: 0.35,
        delay: i * 0.09,
        bend: 1.015
      });
    });
    playNoise({
      vol: 0.05,
      dur: 0.15
    });
  },
  save: function save() {
    playTone({
      freq: 660,
      type: "sine",
      vol: 0.1,
      dur: 0.08
    });
    playTone({
      freq: 880,
      type: "sine",
      vol: 0.1,
      dur: 0.1,
      delay: 0.09
    });
  }
};

// ═══════════════════════════════════════════════════════
//  PRESS CONFERENCE — FULL SYSTEM
// ═══════════════════════════════════════════════════════

var JOURNALISTS = [{
  name: "Anna Kowalska",
  outlet: "Marsjańska Agencja Prasowa",
  emoji: "📰"
}, {
  name: "Piotr Nowak",
  outlet: "Hellas Tribune",
  emoji: "🎙"
}, {
  name: "Maria Wiśniewska",
  outlet: "Tharsis Times",
  emoji: "📺"
}, {
  name: "Tomasz Zając",
  outlet: "Elysium Post",
  emoji: "📡"
}, {
  name: "Red. Korespondent",
  outlet: "Biuro Prasowe UNMI",
  emoji: "🛰"
}, {
  name: "Studio Mars24",
  outlet: "Galaktyczny Monitor",
  emoji: "🌌"
}, {
  name: "Special Reporter",
  outlet: "Czerwona Planeta TV",
  emoji: "🔴"
}, {
  name: "Katarzyna Wróbel",
  outlet: "Interplanetary Wire",
  emoji: "⚡"
}, {
  name: "Michał Dąbrowski",
  outlet: "Terraformer Weekly",
  emoji: "🗞"
}, {
  name: "Agata Szymańska",
  outlet: "Olimpus Gazette",
  emoji: "🏔"
}];

// Each Q: id, type, j (journalist index), text(ctx), answerPool (7+ answers, 5 randomly picked)
// ctx = { player, winner, others, rank, margin, totalPlayers }

function makePool(ctx) {
  var _others$, _others$2;
  var player = ctx.player,
    winner = ctx.winner,
    others = ctx.others,
    rank = ctx.rank,
    margin = ctx.margin,
    totalPlayers = ctx.totalPlayers;
  var isWinner = rank === 1;
  var isLast = rank === totalPlayers;
  var wn = winner.name;
  var pn = player.name;
  var o1 = ((_others$ = others[0]) == null ? void 0 : _others$.name) || "rywal";
  var o2 = ((_others$2 = others[1]) == null ? void 0 : _others$2.name) || "pozostali";
  var margin2 = margin > 0 ? margin : 1;
  var W = [{
    id: "w1",
    j: 0,
    tone: "friendly",
    text: pn + ", " + player.total + " punkt\xF3w \u2014 niesamowity wynik! Co zadecydowa\u0142o o zwyci\u0119stwie?",
    pool: ["Konsekwentna strategia od pierwszej generacji, bez rozpraszania uwagi.", "Kluczowa synergia korporacji z kartami \u2014 wszystko si\u0119 zaz\u0119bi\u0142o idealnie.", "Obserwowa\u0142em plansz\u0119 globalnie, nie tylko w\u0142asny kawa\u0142ek Marsa.", "Szcz\u0119\u015Bcie przy losowaniu plus umiej\u0119tno\u015B\u0107 jego wykorzystania.", "Agresywna terraformacja w odpowiednim momencie \u2014 TR to wszystko.", "Cierpliwo\u015B\u0107. Czeka\u0142em na w\u0142a\u015Bciw\u0105 chwil\u0119 i wtedy uderzy\u0142em.", "Nie zdradz\u0119 szczeg\xF3\u0142\xF3w \u2014 gramy tutaj regularnie."]
  }, {
    id: "w2",
    j: 2,
    tone: "friendly",
    text: "Wygra\u0142e\u015B z przewag\u0105 " + margin2 + " VP. Kiedy poczu\u0142e\u015B, \u017Ce to Tw\xF3j wiecz\xF3r?",
    pool: ["Gdzie\u015B w trzeciej generacji, gdy moje zasoby zacz\u0119\u0142y naprawd\u0119 pracowa\u0107.", "Dopiero przy ko\u0144cowym liczeniu \u2014 walczy\u0142em do ostatniego kafelka.", "Od samego pocz\u0105tku. Stara\u0142em si\u0119 nie dawa\u0107 szansy innym na oddech.", "Nie liczy\u0142em przewag w trakcie \u2014 to rozprasza. Skupia\u0142em si\u0119 na grze.", "Gdy zobaczy\u0142em, \u017Ce " + o1 + " pope\u0142nia b\u0142\u0105d, kt\xF3ry da\u0142 mi ogromny bonus.", "Nie by\u0142em pewny a\u017C do ko\u0144ca. Ten wynik mnie samego zaskoczy\u0142.", "Kilka ruch\xF3w przed ko\u0144cem, gdy policzy\u0142em, \u017Ce nikt mnie ju\u017C nie dogoni."]
  }, {
    id: "w3",
    j: 3,
    tone: "attacking",
    text: "Krytycy m\xF3wi\u0105, \u017Ce wygra\u0142e\u015B bo rywale sami siebie zniszczyli. Co na to?",
    pool: ["Widzenie cudzych b\u0142\u0119d\xF3w i ich wykorzystanie to te\u017C umiej\u0119tno\u015B\u0107.", "Moje zwyci\u0119stwo, moja gra. Nie komentuj\u0119 gry innych.", "Mo\u017Ce maj\u0105 troch\u0119 racji, ale dotar\u0142em tu na w\u0142asnych nogach.", "W plansz\xF3wkach nie ma przypadkowych zwyci\u0119stw. Zawsze jest pow\xF3d.", "Interesuj\u0105ca teza. Mo\u017Ce moi rywale powinni j\u0105 om\xF3wi\u0107 z krytykami.", "Strategia to te\u017C przewidywanie b\u0142\u0119d\xF3w przeciwnika i stawianie pu\u0142apek.", "Bez komentarza."]
  }, {
    id: "w4",
    j: 4,
    tone: "attacking",
    text: "Ile procent szcz\u0119\u015Bcia, ile umiej\u0119tno\u015Bci w tej wygranej?",
    pool: ["70 umiej\u0119tno\u015Bci, 30 szcz\u0119\u015Bcie. Nie udaj\u0119 pe\u0142nego kontrolera losowania.", "Szcz\u0119\u015Bcie to warunek konieczny. Umiej\u0119tno\u015B\u0107 \u2014 wystarczaj\u0105cy.", "Nie mierz\u0119 szcz\u0119\u015Bcia. Mierz\u0119 wyniki.", "Ka\u017Cde losowanie ma element przypadku. Kto lepiej go zagospodaruje \u2014 wygrywa.", "Prosz\u0119 zapyta\u0107 przegranych \u2014 oni pewnie maj\u0105 w\u0142asn\u0105 statystyk\u0119.", "Szczerze? Tym razem trafi\u0142em kilka kluczowych kart. Wi\u0119c mo\u017Ce 50/50.", "Bez komentarza."]
  }, {
    id: "w5",
    j: 7,
    tone: "neutral",
    text: "Jaka by\u0142a najwa\u017Cniejsza pojedyncza decyzja tej partii?",
    pool: ["Wyb\xF3r korporacji. To fundament, na kt\xF3rym budujesz wszystko.", "Moment gdy wybra\u0142em szybkie miasto zamiast dodatkowych zasob\xF3w.", "Odpowiednie Preludium ustawi\u0142o mnie na silny start.", "Rezygnacja z pewnej karty na rzecz skupienia na terraformacji.", "Obserwacja rywali w generacji trzeciej i zmiana planu w ostatniej chwili.", "Agresywna ekspansja kolonii, zanim ktokolwiek zd\u0105\u017Cy\u0142 zareagowa\u0107.", "Nie potrafi\u0119 wskaza\u0107 jednej. Seria ma\u0142ych, dobrych decyzji z\u0142o\u017Cy\u0142a si\u0119 na wynik."]
  }, {
    id: "w6",
    j: 1,
    tone: "friendly",
    text: "Co powiesz nowym graczom, kt\xF3rzy chc\u0105 wygrywa\u0107?",
    pool: ["Nie rozpraszajcie zasob\xF3w \u2014 lepsza jedna mocna strategia ni\u017C pi\u0119\u0107 s\u0142abych.", "TR to Wasz bank. Terraformujcie agresywnie od pierwszej generacji.", "Patrzcie co graj\u0105 inni. Najlepsza karta to ta, kt\xF3ra psuje plan rywala.", "Studiujcie korporacje przed gr\u0105. Znajomo\u015B\u0107 mo\u017Cliwo\u015Bci to podstawa.", "Elastyczno\u015B\u0107 \u2014 plan jest wa\u017Cny, ale Mars ma w\u0142asne zdanie.", "Graczcie regularnie. Ta gra nagradza do\u015Bwiadczenie ponad wszystko.", "Bez komentarza \u2014 to moja przewaga."]
  }, {
    id: "w7",
    j: 9,
    tone: "attacking",
    text: o1 + " by\u0142 dzi\u015B bardzo blisko. Czy nie jeste\u015B zbyt pewny siebie na przysz\u0142o\u015B\u0107?",
    pool: ["Pewno\u015B\u0107 siebie i arogancja to r\xF3\u017Cne rzeczy. Znam t\u0119 r\xF3\u017Cnic\u0119.", o1 + " gra coraz lepiej \u2014 to fakt, kt\xF3ry mnie mobilizuje, nie niepokoi.", "W nast\u0119pnej partii mo\u017Ce by\u0107 odwrotnie. Taki jest urok tej gry.", "Nie wygrywam przez pewno\u015B\u0107 siebie, wygrywam przez przygotowanie.", "Doceniam ka\u017Cdego przy tym stole. Dzi\u015B akurat by\u0142em lepszy.", "Interesuj\u0105ce pytanie. Mo\u017Ce " + o1 + " chcia\u0142by odpowiedzie\u0107 zamiast mnie?", "Bez komentarza."]
  }, {
    id: "w8",
    j: 5,
    tone: "friendly",
    text: "Jak oceniasz poziom tej grupy graczy?",
    pool: ["Bardzo wysoki. Ka\u017Cda partia wymaga tu prawdziwego my\u015Blenia.", "Ro\u015Bniemy razem \u2014 kilka miesi\u0119cy temu grali\u015Bmy zupe\u0142nie inaczej.", "Wymagaj\u0105cy poziom. Wygranie tutaj daje prawdziw\u0105 satysfakcj\u0119.", "Mam szcz\u0119\u015Bcie gra\u0107 z lud\u017Ami, kt\xF3rzy traktuj\u0105 gr\u0119 powa\u017Cnie.", "Jeden z najtrudniejszych sto\u0142\xF3w, przy kt\xF3rych siada\u0142em.", "Nie por\xF3wnuj\u0119. Ka\u017Cda grupa ma sw\xF3j charakter.", "Bez komentarza."]
  }, {
    id: "w9",
    j: 6,
    tone: "attacking",
    text: "Ile razy wygra\u0142e\u015B z rz\u0119du? Czy to nie zaczyna by\u0107 nudne dla innych?",
    pool: ["Wygrywanie nigdy nie jest nudne. Pytajcie przegranych o nud\u0119.", "Ka\u017Cda wygrana smakuje inaczej. To nie jest seria \u2014 to wynik pracy.", "Je\u015Bli rywalom nudzi si\u0119 przegrywanie, mog\u0105 spr\xF3bowa\u0107 wygrywa\u0107.", "Nie liczy\u0142em. Skupiam si\u0119 na ka\u017Cdej grze osobno.", "Dobra passa kiedy\u015B si\u0119 sko\u0144czy. Korzystam p\xF3ki trwa.", "Mo\u017Ce w\u0142a\u015Bnie ten wynik zmotywuje innych do powa\u017Cniejszego grania.", "Bez komentarza."]
  }, {
    id: "w10",
    j: 8,
    tone: "neutral",
    text: "Kt\xF3re preludium lub karta odegra\u0142y dzisiaj kluczow\u0105 rol\u0119?",
    pool: ["Preludium przemys\u0142owe \u2014 da\u0142o zasoby na agresywny start.", "Nie jedna karta, ale ich kombinacja. Synergia by\u0142a kluczem.", "Wol\u0119 nie zdradza\u0107. Ci sami rywale si\u0105d\u0105 ze mn\u0105 za tydzie\u0144.", "Wczesne miasto, kt\xF3re p\xF3\u017Aniej przynios\u0142o mas\u0119 punkt\xF3w z zielenin.", "Karta pozwalaj\u0105ca na szybk\u0105 terraformacj\u0119 na pocz\u0105tku gry.", "Sie\u0107 bada\u0144 \u2014 elastyczno\u015B\u0107 kart wygra\u0142a t\u0119 parti\u0119.", "Bez komentarza."]
  }];
  var L = [{
    id: "l1",
    j: 0,
    tone: "sympathetic",
    text: pn + ", trudna partia. Co posz\u0142o nie tak?",
    pool: ["Z\u0142y wyb\xF3r korporacji \u2014 nie pasowa\u0142a do kart i nigdy nie z\u0142apa\u0142em rytmu.", "Zbyt wolna ekspansja. Gdy chcia\u0142em goni\u0107, by\u0142o ju\u017C za p\xF3\u017Ano.", "Niedoceni\u0142em " + wn + ". Rozwin\u0105\u0142 si\u0119 cicho i mia\u0142 przewag\u0119.", "Kilka z\u0142ych decyzji z rz\u0119du we wczesnej fazie wybi\u0142o mnie z tempa.", "Mars by\u0142 dla mnie mniej \u0142askawy ni\u017C dla rywali. Takie losowanie.", "Strategia by\u0142a dobra. Wykonanie \u2014 mniej.", "Bez komentarza."]
  }, {
    id: "l2",
    j: 3,
    tone: "attacking",
    text: "Przegra\u0142e\u015B o " + margin2 + " punkt\xF3w. To spora r\xF3\u017Cnica. Gdzie regularnie tracisz?",
    pool: ["W zarz\u0105dzaniu miastami \u2014 za rzadko s\u0105siaduj\u0105 z zieleniami.", "Za p\xF3\u017Ano loguj\u0119 tytu\u0142y. Zawsze kto\u015B mnie uprzedza.", "Nie zamierzam publicznie ujawnia\u0107 s\u0142abo\u015Bci. Rywale siedz\u0105 obok.", "Tempo ekspansji. Reaguj\u0119 za p\xF3\u017Ano na to, co dzieje si\u0119 na planszy.", "Synergi\u0119 kart. Wybieram dobre karty, ale nie tworz\u0105 sp\xF3jnej ca\u0142o\u015Bci.", "Zarz\u0105dzanie TR \u2014 zbyt d\u0142ugo czekam z terraformacj\u0105.", "Bez komentarza."]
  }, {
    id: "l3",
    j: 6,
    tone: "attacking",
    text: "Szczerze \u2014 czy mia\u0142e\u015B plan na t\u0119 rozgrywk\u0119?",
    pool: ["Mia\u0142em plan. Niestety Mars mia\u0142 inny pomys\u0142.", "Plan by\u0142. Wykonanie by\u0142o z\u0142e i to jest moja odpowied\u017A.", "Improwizacja to te\u017C strategia. Dzi\u015B nie zadzia\u0142a\u0142a.", "Plany w tej grze to lu\u017Ane sugestie. Kluczowa jest adaptacja.", "Tak, ale " + wn + " zablokowa\u0142 kluczowe elementy mojej strategii.", "Za ma\u0142o bada\u0144 przed gr\u0105. Korporacja nie by\u0142a przemy\u015Blana.", "Bez komentarza."]
  }, {
    id: "l4",
    j: 1,
    tone: "sympathetic",
    text: "Co by\u015B zmieni\u0142, gdyby\u015B m\xF3g\u0142 zagra\u0107 t\u0119 parti\u0119 jeszcze raz?",
    pool: ["Inna korporacja, bez dyskusji. Ta mnie ogranicza\u0142a od startu.", "Bardziej agresywne Preludium \u2014 za ma\u0142o rozgrza\u0142em si\u0119 na start.", "Skupi\u0142bym si\u0119 mniej na kartach VP, bardziej na TR.", "Inn\u0105 reakcj\u0119 na ruch " + wn + " w trzeciej generacji.", "Wczesniejsz\u0105 budow\u0119 miast \u2014 straci\u0142em mn\xF3stwo potencjalnych punkt\xF3w.", "Agresywniejsze blokowanie kolonii " + o1 + " na pocz\u0105tku.", "Nic. Ucz\u0119 si\u0119 na b\u0142\u0119dach, nie cofam si\u0119 do nich."]
  }, {
    id: "l5",
    j: 4,
    tone: "attacking",
    text: wn + " zdominowa\u0142 rozgrywk\u0119. Kiedy to si\u0119 w ko\u0144cu zmieni?",
    pool: ["Przy nast\u0119pnym losowaniu. Gwarantuj\u0119.", "Ka\u017Cdy ma swoj\u0105 pass\u0119. Przyjdzie moja kolej.", "Gdy przestan\u0119 dawa\u0107 " + wn + " tak wygodne pozycje na starcie.", "To kwestia jednej lepszej partii z mojej strony.", "Niepr\u0119dko, je\u015Bli dalej b\u0119d\u0119 gra\u0107 tak jak dzi\u015B.", "Wol\u0119 my\u015Ble\u0107 o w\u0142asnej grze ni\u017C o cudzej dominacji.", "Bez komentarza."]
  }, {
    id: "l6",
    j: 2,
    tone: "neutral",
    text: "Jak oceniasz w\u0142asn\u0105 gr\u0119 w tej partii, w skali 1-10?",
    pool: ["5 z 10. Po\u0142owa decyzji by\u0142a dobra, po\u0142owa katastrofalna.", "4 z 10. Poni\u017Cej moich mo\u017Cliwo\u015Bci, co boli podw\xF3jnie.", "3 z 10. Wiem, \u017Ce sta\u0107 mnie na wi\u0119cej \u2014 i to jest najtrudniejsze.", "6 z 10. Plan by\u0142 niez\u0142y, realizacja zawiod\u0142a.", "7 z 10. Mia\u0142em moment, gdy mog\u0142em przej\u0105\u0107 kontrol\u0119. Nie skorzysta\u0142em.", "2 z 10. Jeden z moich gorszych wieczor\xF3w przy tym stole.", "Bez komentarza."]
  }, {
    id: "l7",
    j: 7,
    tone: "sympathetic",
    text: "Co ta przegrana daje Ci do my\u015Blenia na przysz\u0142o\u015B\u0107?",
    pool: ["Musz\u0119 popracowa\u0107 nad wyczuciem tempa \u2014 kiedy przyspieszy\u0107, kiedy czeka\u0107.", "Analiza korporacji przed gr\u0105. By\u0142em zbyt spontaniczny w wyborze.", "Obserwacja rywali \u2014 gra\u0142em zbyt we w\u0142asnym tunelu.", "Trzeba wi\u0119cej \u0107wiczy\u0107 synergi\u0119 kart ni\u017C indywidualn\u0105 jako\u015B\u0107 kart.", "Nie da\u0107 si\u0119 zaskoczy\u0107 w kluczowych momentach. Dzi\u015B to mnie pokona\u0142o.", "Ka\u017Cda przegrana to data bazowa do analizy. Co\u015B dobrego z tego wyjdzie.", "Bez komentarza."]
  }, {
    id: "l8",
    j: 9,
    tone: "attacking",
    text: "Czy obwiniasz kogo\u015B za t\u0119 pora\u017Ck\u0119?",
    pool: ["Tylko siebie. Z\u0142e decyzje by\u0142y moje, wynik jest m\xF3j.", "Mo\u017Ce troch\u0119 pechowe losowanie, ale gra\u0107 trzeba tym co si\u0119 ma.", "Nie szukam winnych. Szukam rozwi\u0105za\u0144.", wn + " zagra\u0142 \u015Bwietnie. Nie mo\u017Cna mu tego odebra\u0107.", "Obwiniam siebie za brak elastyczno\u015Bci w kluczowym momencie.", "Pytanie o obwinianie jest dobre dla medi\xF3w, niekoniecznie dla graczy.", "Bez komentarza."]
  }, {
    id: "l9",
    j: 5,
    tone: "sympathetic",
    text: "Co najbardziej frustruje Ci\u0119 w tej przegranej?",
    pool: ["\u017Be widzia\u0142em jak b\u0142\u0119dy pope\u0142niam i nie potrafi\u0142em ich zatrzyma\u0107.", "Stracone tytu\u0142y \u2014 kto\u015B zawsze mnie uprzedza\u0142 o jeden krok.", "R\xF3\u017Cnica by\u0142a mniejsza ni\u017C wida\u0107. Kilka kart mog\u0142o zmieni\u0107 wszystko.", "Brak rytmu od pocz\u0105tku. Nigdy nie wszed\u0142em w normaln\u0105 gr\u0119.", "Fakt, \u017Ce znam swoj\u0105 s\u0142abo\u015B\u0107 i nadal j\u0105 pope\u0142niam.", "Nic konkretnego. Czasem tak jest.", "Bez komentarza."]
  }, {
    id: "l10",
    j: 8,
    tone: "attacking",
    text: "Twoi kibice \u2014 je\u015Bli tacy istniej\u0105 \u2014 s\u0105 rozczarowani. Masz co\u015B dla nich?",
    pool: ["Wr\xF3c\u0119 silniejszy. To jedyna rzecz, kt\xF3r\u0105 mog\u0119 obieca\u0107.", "Gra planszowa to nie mundial \u2014 kibice mnie nie martwi\u0105.", "Przepraszam za ten wyst\u0119p. Nast\u0119pna b\u0119dzie inna.", "Moi kibice rozumiej\u0105, \u017Ce nie ka\u017Cda partia mo\u017Ce by\u0107 wygrana.", "Dedykuj\u0119 t\u0119 analiz\u0119 b\u0142\u0119d\xF3w wszystkim, kt\xF3rzy wierz\u0105 w m\xF3j powr\xF3t.", "Jakich kibic\xF3w? To regularna gra ze znajomymi.", "Bez komentarza."]
  }];
  var LAST_EXTRA = isLast ? [{
    id: "last1",
    j: 6,
    tone: "attacking",
    text: "Ostatnie miejsce. Jak to naprawd\u0119 smakuje?",
    pool: ["Gorzko. Nie zamierzam udawa\u0107, \u017Ce mi to nie przeszkadza.", "Motywuj\u0105co. Ni\u017Cej ju\u017C nie mog\u0119 spa\u015B\u0107, wi\u0119c tylko w g\xF3r\u0119.", "Jak bardzo s\u0142ona kawa. Niby uczysz si\u0119, niby boli.", "Przyjmuj\u0119 wynik z pokor\u0105. Dzi\u015B nie by\u0142 m\xF3j dzie\u0144.", "To dane do analizy. Nic wi\u0119cej.", "Smakuje jak impuls do zmiany strategii.", "Bez komentarza."]
  }, {
    id: "last2",
    j: 4,
    tone: "attacking",
    text: "Czy jest jedna decyzja z tej partii, za kt\xF3r\u0105 si\u0119 wstydzisz?",
    pool: ["Tak. Nie powiem jaka \u2014 wszyscy tu siedz\u0105.", "Wstyd to za du\u017Ce s\u0142owo. \u017Bal \u2014 tak.", "Kilka. Zbieram je jak lekcje, nie jak puchary.", "Jedna? Ca\u0142a struktura mojej gry by\u0142a z\u0142a dzi\u015B.", "Nie wstyd, ale rozczarowanie \u2014 tak.", "To pytanie jest zbyt osobiste jak na konferencj\u0119 prasow\u0105.", "Bez komentarza."]
  }] : [];
  var GENERAL = [{
    id: "g1",
    j: 0,
    tone: "neutral",
    text: "Kt\xF3re Preludium lub korporacja zmieni\u0142y t\u0119 rozgrywk\u0119 najbardziej?",
    pool: ["Przemys\u0142owe Preludium \u2014 da\u0142o zasoby na agresywny start.", "Sie\u0107 Bada\u0144 \u2014 elastyczno\u015B\u0107 kart zmieni\u0142a dynamik\u0119 w po\u0142owie gry.", "Korporacja terraformacyjna \u2014 szybki TR zdominowa\u0142 ko\u0144cowe liczenie.", "Trudno wskaza\u0107 jedno \u2014 wiele element\xF3w z\u0142o\u017Cy\u0142o si\u0119 na wynik.", "Wczesna kolonia, kt\xF3ra przynios\u0142a bonusy przez ca\u0142\u0105 gr\u0119.", "Karty daj\u0105ce dodatkowe tytu\u0142y \u2014 to by\u0142y ciche punkty przez generacje.", "Bez komentarza."]
  }, {
    id: "g2",
    j: 1,
    tone: "friendly",
    text: "T\u0119 sesj\u0119 oceniasz jako ci\u0119\u017Ck\u0105 prac\u0119 czy czyst\u0105 przyjemno\u015B\u0107?",
    pool: ["100% przyjemno\u015B\u0107 \u2014 nawet je\u015Bli my\u015Blenie boli.", "Ci\u0119\u017Cka praca, kt\xF3ra daje przyjemno\u015B\u0107. Najlepszy rodzaj.", "Dzi\u015B bardziej praca ni\u017C przyjemno\u015B\u0107, ale za tydzie\u0144 wracam.", "Pomi\u0119dzy. Ta gra potrafi frustrowa\u0107 i zachwyca\u0107 naraz.", "Czysta przyjemno\u015B\u0107 \u2014 wynik jest drugorz\u0119dny przy tej atmosferze.", "Praca \u2014 wymagaj\u0105ca, satysfakcjonuj\u0105ca, z momentami frustracji.", "Bez komentarza."]
  }, {
    id: "g3",
    j: 5,
    tone: "neutral",
    text: "Czy plansza mia\u0142a du\u017Cy wp\u0142yw na Twoj\u0105 strategi\u0119?",
    pool: ["Kluczowy. Uk\u0142ad bonus\xF3w na planszy zmieni\u0142 moj\u0105 prioritety.", "Znacz\u0105cy, ale korporacja jest wa\u017Cniejsza ni\u017C mapa.", "Prawie \u017Caden \u2014 gram kartami, nie plansz\u0105.", "Plansza wyznacza rytm gry, ale strategia musi by\u0107 elastyczna.", "Bonusy na planszy ukszta\u0142towa\u0142y m\xF3j plan ju\u017C przy wyborze korporacji.", "Za ma\u0142o bra\u0142em pod uwag\u0119 plansz\u0119 \u2014 to jeden z moich b\u0142\u0119d\xF3w dzi\u015B.", "Bez komentarza."]
  }, {
    id: "g4",
    j: 8,
    tone: "friendly",
    text: "Co najbardziej lubisz w graniu z t\u0105 konkretn\u0105 grup\u0105?",
    pool: ["Ka\u017Cdy ma inny styl \u2014 to sprawia, \u017Ce ka\u017Cda partia jest inna.", "Powa\u017Cne traktowanie gry przy zachowaniu \u015Bwietnej atmosfery.", "Konkurencja, kt\xF3ra motywuje do prawdziwego my\u015Blenia.", "Zaufanie i fair-play przy stole.", "Wszyscy si\u0119 rozwijamy \u2014 wida\u0107 post\u0119p z partii na parti\u0119.", "Rozmowy po grze \u2014 to gdzie naprawd\u0119 uczymy si\u0119 od siebie.", "Bez komentarza."]
  }, {
    id: "g5",
    j: 9,
    tone: "neutral",
    text: "Kt\xF3re rozszerzenie do Terraformacji Marsa uwa\u017Casz za najlepsze?",
    pool: ["Preludium \u2014 zmienia dynamik\u0119 od pierwszej generacji.", "Venus Next \u2014 otwiera nowy wymiar planszowy.", "Kolonie \u2014 zupe\u0142nie nowe strategie i mo\u017Cliwo\u015Bci.", "Turmoil \u2014 polityczny chaos dodaje tyle emocji.", "Podstawka bez rozszerze\u0144 jest idealna \u2014 prosta i g\u0142\u0119boka.", "Ka\u017Cde co\u015B wnosi. Nie wyr\xF3\u017Cniam jednego.", "Bez komentarza."]
  }, {
    id: "g6",
    j: 2,
    tone: "friendly",
    text: "Jak opisa\u0142by\u015B t\u0119 rozgrywk\u0119 w jednym zdaniu?",
    pool: ["Walka o ka\u017Cdy jeden punkt do ostatniej sekundy.", "Spokojne budowanie, kt\xF3re w finale da\u0142o satysfakcj\u0119.", "Chaos, z kt\xF3rego wy\u0142oni\u0142 si\u0119 zwyci\u0119zca.", "Lekcja o tym, \u017Ce Mars zawsze ma w\u0142asny plan.", "Korporacje przem\xF3wi\u0142y g\u0142o\u015Bniej ni\u017C strategie.", "Wiecz\xF3r pe\u0142en moment\xF3w, o kt\xF3rych b\u0119dziemy rozmawia\u0107 tydzie\u0144.", "Bez komentarza."]
  }, {
    id: "g7",
    j: 3,
    tone: "attacking",
    text: "Kt\xF3ry ruch przy stole by\u0142 dzi\u015B najbardziej kontrowersyjny?",
    pool: ["Blokowanie tlenowych kafelk\xF3w w kluczowym momencie \u2014 wiedz\u0105 kto.", "Kto\u015B skrad\u0142 tytu\u0142 sprzed nosa \u2014 to by\u0142o na granicy fair-play.", "Agresywna ekspansja kolonii w momencie, gdy wszyscy byli s\u0142abi.", "Wej\u015Bcie w wod\u0119 przed innymi \u2014 klasyczna taktyka, klasyczne oburzenie.", "Nie by\u0142o kontrowersji \u2014 to by\u0142 czysty poker.", "Ka\u017Cdy ruch by\u0142 legalny. Kontrowersje to cz\u0119\u015B\u0107 gry.", "Bez komentarza."]
  }, {
    id: "g8",
    j: 7,
    tone: "neutral",
    text: "Co Tw\xF3j umys\u0142 robi mi\u0119dzy generacjami, gdy czekasz na ruch?",
    pool: ["Licz\u0119 punkty przeciwnik\xF3w i szukam gdzie jestem.", "Obserwuj\u0119 karty i surowce na stole innych graczy.", "Planuj\u0119 dwa ruchy do przodu i szukam alternatyw.", "Staram si\u0119 wej\u015B\u0107 w g\u0142ow\u0119 " + wn + " \u2014 co zaplanuje.", "Odpoczywam. Ta gra wymaga skupienia, a nie ci\u0105g\u0142ego my\u015Blenia.", "W\u0142a\u015Bciwie nic \u2014 intuicja gra tu du\u017C\u0105 rol\u0119.", "Bez komentarza."]
  }];
  return isWinner ? [].concat(W, GENERAL) : [].concat(L, LAST_EXTRA, GENERAL);
}

// ── PressConference Intro ─────────────────────────────────────────────
function PressConferenceIntro(_ref4) {
  var players = _ref4.players,
    onStart = _ref4.onStart,
    onSkip = _ref4.onSkip;
  var _useState = useState("standard"),
    format = _useState[0],
    setFormat = _useState[1];
  var fmts = [{
    id: "quick",
    lbl: "⚡ Szybka",
    desc: players.length * 3 + " pyta\u0144 \u0142\u0105cznie",
    perPlayer: 3
  }, {
    id: "standard",
    lbl: "🎤 Standardowa",
    desc: players.length * 5 + " pyta\u0144 \u0142\u0105cznie",
    perPlayer: 5
  }, {
    id: "long",
    lbl: "📡 Długa",
    desc: players.length * 10 + " pyta\u0144 \u0142\u0105cznie",
    perPlayer: 10
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 8000,
      background: "rgba(4,3,10,.97)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.25rem 1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "2.8rem",
      marginBottom: ".6rem"
    }
  }, "\uD83C\uDF99"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".52rem",
      letterSpacing: ".4em",
      color: "var(--muted)",
      textTransform: "uppercase",
      marginBottom: ".4rem"
    }
  }, "po rozgrywce"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: "1.05rem",
      fontWeight: 900,
      color: "var(--orange)",
      textShadow: "0 0 20px var(--glow)"
    }
  }, "Konferencja Prasowa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      marginTop: ".5rem",
      lineHeight: 1.7
    }
  }, "Dziennikarze z ca\u0142ego Uk\u0142adu S\u0142onecznego", /*#__PURE__*/React.createElement("br", null), "czekaj\u0105 na wypowiedzi graczy przy stole.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "1.1rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".55rem",
      letterSpacing: ".25em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: ".55rem"
    }
  }, "Format konferencji"), fmts.map(function (f) {
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: function onClick() {
        return setFormat(f.id);
      },
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".72rem .95rem",
        marginBottom: ".38rem",
        border: "1px solid " + (format === f.id ? "var(--orange)" : "var(--border)"),
        borderRadius: 9,
        background: format === f.id ? "linear-gradient(135deg, var(--card), color-mix(in srgb, var(--orange) 8%, var(--card)))" : "var(--card)",
        cursor: "pointer",
        transition: "all .2s"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".65rem",
        letterSpacing: ".1em",
        color: format === f.id ? "var(--orange)" : "var(--cream)"
      }
    }, f.lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".68rem",
        color: "var(--muted)",
        marginTop: ".14rem"
      }
    }, f.desc, " \xB7 ", f.perPlayer, " pyt./gracz")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 16,
        height: 16,
        borderRadius: "50%",
        border: "2px solid " + (format === f.id ? "var(--orange)" : "var(--border)"),
        background: format === f.id ? "var(--orange)" : "transparent",
        flexShrink: 0
      }
    }));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: function onClick() {
      SFX.click();
      onStart(format);
    },
    style: {
      marginBottom: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFA4 Rozpocznij konferencj\u0119")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: onSkip,
    style: {
      width: "100%",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pomi\u0144 \u2014 zako\u0144cz bez konferencji"))));
}

// ── Main Conference Screen ────────────────────────────────────────────
function PressConferenceModal(_ref5) {
  var _q$j;
  var players = _ref5.players,
    format = _ref5.format,
    onDone = _ref5.onDone;
  var photos = usePhotos();
  var questionsPerPlayer = format === "quick" ? 3 : format === "standard" ? 5 : 10;
  var sorted = [].concat(players).sort(function (a, b) {
    return b.total - a.total;
  });
  var winner = sorted[0];

  // Build question lists per player — deduplicated, shuffled answers
  var allQuestions = function () {
    var usedIds = new Set();
    var playerQs = players.map(function (player) {
      var rank = sorted.findIndex(function (p) {
        return p.name === player.name;
      }) + 1;
      var margin = Math.abs(winner.total - player.total);
      var others = players.filter(function (p) {
        return p.name !== player.name;
      });
      var pool = makePool({
        player: player,
        winner: winner,
        others: others,
        rank: rank,
        margin: margin,
        totalPlayers: players.length
      });
      // Shuffle, deduplicate, take N
      var available = shuffle(pool).filter(function (q) {
        return !usedIds.has(q.id);
      });
      var picked = available.slice(0, questionsPerPlayer);
      picked.forEach(function (q) {
        return usedIds.add(q.id);
      });
      // For each question, shuffle its answer pool and pick 4, then append "Bez komentarza" as #5
      return picked.map(function (q) {
        var shuffledPool = shuffle(q.pool.filter(function (a) {
          return a !== "Bez komentarza";
        }));
        var answers = [].concat(shuffledPool.slice(0, 4), ["Bez komentarza."]);
        return _extends({}, q, {
          answers: answers,
          player: player
        });
      });
    });

    // Interleave round-robin
    var interleaved = [];
    var _loop = function _loop(i) {
      playerQs.forEach(function (pqs) {
        if (pqs[i]) interleaved.push(pqs[i]);
      });
    };
    for (var i = 0; i < questionsPerPlayer; i++) {
      _loop(i);
    }
    return interleaved;
  }();
  var _useState2 = useState(0),
    qIdx = _useState2[0],
    setQIdx = _useState2[1];
  var _useState3 = useState(null),
    chosen = _useState3[0],
    setChosen = _useState3[1];
  var _useState4 = useState([]),
    answers = _useState4[0],
    setAnswers = _useState4[1];
  var _useState5 = useState("question"),
    phase = _useState5[0],
    setPhase = _useState5[1];
  var totalQ = allQuestions.length;
  var q = allQuestions[qIdx];
  var journalist = JOURNALISTS[(_q$j = q == null ? void 0 : q.j) != null ? _q$j : 0];
  var submit = function submit(ans) {
    SFX.slotLock();
    var record = {
      questionIndex: qIdx,
      playerName: q.player.name,
      playerRank: sorted.findIndex(function (p) {
        return p.name === q.player.name;
      }) + 1,
      isWinner: q.player.name === winner.name,
      journalist: journalist.name,
      outlet: journalist.outlet,
      tone: q.tone,
      question: q.text,
      answer: ans,
      isNoComment: ans.startsWith("Bez komentarza"),
      timestamp: new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    setAnswers(function (prev) {
      return [].concat(prev, [record]);
    });
    setChosen(ans);
    setPhase("answered");
    setTimeout(function () {
      if (qIdx + 1 >= totalQ) {
        setPhase("done");
        SFX.victory();
      } else {
        setQIdx(function (i) {
          return i + 1;
        });
        setChosen(null);
        setPhase("question");
      }
    }, 1100);
  };
  if (phase === "done") {
    var byPlayer = players.map(function (p) {
      return {
        name: p.name,
        count: answers.filter(function (a) {
          return a.playerName === p.name;
        }).length,
        noComment: answers.filter(function (a) {
          return a.playerName === p.name && a.isNoComment;
        }).length
      };
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 8000,
        background: "rgba(4,3,10,.97)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: "1.25rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "2.5rem",
        marginBottom: ".5rem"
      }
    }, "\u2705"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".52rem",
        letterSpacing: ".4em",
        color: "var(--muted)",
        textTransform: "uppercase",
        marginBottom: ".4rem"
      }
    }, "zako\u0144czono"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".95rem",
        fontWeight: 900,
        color: "var(--orange)"
      }
    }, "Konferencja zako\u0144czona"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".78rem",
        color: "var(--muted)",
        marginTop: ".4rem"
      }
    }, answers.length, " odpowiedzi zapisane do analizy AI")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 520,
        marginBottom: "1.1rem"
      }
    }, byPlayer.map(function (p) {
      return /*#__PURE__*/React.createElement("div", {
        key: p.name,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".4rem .65rem",
          marginBottom: ".3rem",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".85rem"
        }
      }, p.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".72rem",
          color: "var(--muted)"
        }
      }, p.count, " pyt. \xB7 ", p.noComment, " \"bez komentrza\""));
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      style: {
        maxWidth: 440,
        width: "100%"
      },
      onClick: function onClick() {
        SFX.click();
        onDone(answers);
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u25C8 Zapisz i zako\u0144cz")));
  }
  if (!q) return null;
  var progress = qIdx / totalQ * 100;
  var toneColor = q.tone === "friendly" ? "var(--green)" : q.tone === "attacking" ? "#d45a5a" : "var(--muted)";
  var toneLbl = q.tone === "friendly" ? "😊 Przyjazne" : q.tone === "attacking" ? "🔥 Atakujące" : "📊 Neutralne";
  var pColor = q.player.color || "var(--orange)";
  var pRank = sorted.findIndex(function (p) {
    return p.name === q.player.name;
  }) + 1;
  var playerQsDone = answers.filter(function (a) {
    return a.playerName === q.player.name;
  }).length;
  var playerQsTotal = questionsPerPlayer;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 8000,
      background: "#030208",
      display: "flex",
      flexDirection: "column",
      maxWidth: 560,
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: ".8rem 1.25rem .45rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      background: "rgba(0,0,0,.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".5rem",
      letterSpacing: ".28em",
      color: "var(--muted)",
      textTransform: "uppercase"
    }
  }, "Konferencja Prasowa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".6rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".6rem",
      color: "var(--orange)",
      background: "rgba(240,112,48,.12)",
      padding: ".18rem .5rem",
      borderRadius: 4,
      border: "1px solid rgba(240,112,48,.25)"
    }
  }, qIdx + 1, " / ", totalQ))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: "var(--border)",
      flexShrink: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: progress + "%",
      background: "linear-gradient(90deg, var(--orange2), var(--orange))",
      transition: "width .45s ease",
      boxShadow: "0 0 8px var(--glow)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "1rem 1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".3rem",
      marginBottom: ".7rem"
    }
  }, players.map(function (p) {
    var isCurrent = p.name === q.player.name;
    var done = answers.filter(function (a) {
      return a.playerName === p.name;
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        background: isCurrent ? "linear-gradient(90deg, " + (p.color || "var(--orange)") + " " + done / questionsPerPlayer * 100 + "%, rgba(255,255,255,.1) 0%)" : "linear-gradient(90deg, " + (p.color || "var(--muted)") + "88 " + done / questionsPerPlayer * 100 + "%, var(--border) 0%)",
        transition: "background .3s",
        position: "relative"
      },
      title: p.name + ": " + done + "/" + questionsPerPlayer
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".6rem",
      marginBottom: ".75rem",
      padding: ".5rem .75rem",
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.2rem",
      flexShrink: 0
    }
  }, journalist.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".82rem",
      fontWeight: 600,
      color: "var(--cream)",
      lineHeight: 1.3
    }
  }, journalist.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".65rem",
      color: "var(--muted)"
    }
  }, journalist.outlet)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".55rem",
      padding: ".14rem .4rem",
      borderRadius: 4,
      border: "1px solid " + toneColor,
      color: toneColor,
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, toneLbl)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".65rem",
      marginBottom: ".75rem",
      padding: ".6rem .9rem",
      borderRadius: 9,
      background: pColor + "18",
      border: "1.5px solid " + pColor + "55"
    }
  }, /*#__PURE__*/React.createElement(PlayerPhoto, {
    src: photoFor(photos, q.player.name),
    name: q.player.name,
    color: pColor,
    size: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".7rem",
      letterSpacing: ".1em",
      color: pColor,
      fontWeight: 700
    }
  }, q.player.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".6rem",
      color: "var(--muted)"
    }
  }, "#", pRank, " \xB7 ", q.player.total, " VP \xB7 pytanie ", playerQsDone + 1, "/", playerQsTotal)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".2rem"
    }
  }, Array.from({
    length: playerQsTotal
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: i < playerQsDone ? pColor : i === playerQsDone ? pColor + "88" : "var(--border)",
        transition: "background .3s"
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid " + (phase === "answered" ? "var(--orange2)" : "var(--border)"),
      borderRadius: 10,
      padding: "1rem",
      marginBottom: ".85rem",
      transition: "border-color .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".55rem",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginBottom: ".5rem"
    }
  }, "Pytanie dziennikarza"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".9rem",
      fontWeight: 600,
      color: "var(--cream)",
      lineHeight: 1.6
    }
  }, "\u201E", q.text, "\"")), phase === "question" && q.answers.map(function (ans, ai) {
    var isNoComment = ans.startsWith("Bez komentarza");
    return /*#__PURE__*/React.createElement("button", {
      key: ai,
      onClick: function onClick() {
        SFX.click();
        submit(ans);
      },
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        background: isNoComment ? "var(--surface)" : "var(--card)",
        border: "1px solid " + (isNoComment ? "var(--border)" : "var(--border)"),
        borderRadius: 8,
        padding: ".62rem .85rem",
        marginBottom: ".38rem",
        cursor: "pointer",
        color: isNoComment ? "var(--muted)" : "var(--cream)",
        fontSize: ".85rem",
        lineHeight: 1.5,
        fontFamily: "'Exo 2',sans-serif",
        transition: "all .15s"
      },
      className: isNoComment ? "conf-ans-btn conf-no-comment" : "conf-ans-btn"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".5rem",
        color: "var(--orange)",
        marginRight: ".45rem"
      }
    }, ai + 1, "."), ans);
  }), phase === "answered" && chosen && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, var(--card), " + pColor + "18)",
      border: "1px solid " + pColor + "66",
      borderRadius: 10,
      padding: ".85rem 1rem",
      animation: "fadeIn .3s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".52rem",
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: pColor,
      marginBottom: ".4rem"
    }
  }, q.player.name, " odpowiada:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".88rem",
      color: "var(--cream)",
      lineHeight: 1.55,
      fontStyle: "italic"
    }
  }, "\u201E", chosen, "\""))));
}

// ════════════════════════════════════════════════════════
//  PERIOD STATS + PLAYER TITLES helper
// ════════════════════════════════════════════════════════
function periodGames(games, months) {
  var cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - months);
  return games.filter(function (g) {
    return new Date(g.date) >= cutoff;
  });
}
function PeriodBadge(_ref6) {
  var games = _ref6.games,
    label = _ref6.label;
  if (!games.length) return null;
  var pm = {};
  games.forEach(function (g) {
    var sorted = [].concat(g.players).sort(function (a, b) {
      return b.total - a.total;
    });
    g.players.forEach(function (p) {
      var n = p.name || "Gracz";
      if (!pm[n]) pm[n] = {
        wins: 0,
        games: 0,
        scores: []
      };
      pm[n].games++;
      pm[n].scores.push(p.total);
      if (sorted[0] === p) pm[n].wins++;
    });
  });
  var pl = Object.entries(pm).map(function (_ref7) {
    var name = _ref7[0],
      s = _ref7[1];
    return {
      name: name,
      wins: s.wins,
      games: s.games,
      wr: s.games > 0 ? Math.round(s.wins / s.games * 100) : 0,
      avg: Math.round(s.scores.reduce(function (a, b) {
        return a + b;
      }, 0) / s.scores.length),
      best: Math.max.apply(Math, s.scores)
    };
  }).sort(function (a, b) {
    return b.wr - a.wr || b.avg - a.avg;
  });
  var TITLES = [{
    key: "wr",
    title: "👑 Gracz Okresu",
    desc: function desc(p) {
      return p.wins + "/" + p.games + " zwyc. (" + p.wr + "% WR)";
    }
  }, {
    key: "avg",
    title: "📊 Analityk Okresu",
    desc: function desc(p) {
      return "\u015Br. " + p.avg + " VP";
    }
  }, {
    key: "best",
    title: "⚡ Rekord Okresu",
    desc: function desc(p) {
      return "max " + p.best + " VP";
    }
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".65rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, label, " \xB7 ", games.length, " gier"), pl.slice(0, 1).map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: ".4rem"
      }
    }, TITLES.map(function (t) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.key,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".35rem .5rem",
          borderRadius: 6,
          background: "var(--surface)",
          border: "1px solid var(--border)"
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".62rem",
          letterSpacing: ".12em",
          color: "var(--orange)",
          textTransform: "uppercase"
        }
      }, t.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: ".85rem",
          fontWeight: 700,
          color: "var(--cream)"
        }
      }, pl.sort(function (a, b) {
        return b[t.key] - a[t.key];
      })[0].name)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".72rem",
          color: "var(--muted)"
        }
      }, t.desc(pl.sort(function (a, b) {
        return b[t.key] - a[t.key];
      })[0])));
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: ".5rem",
      display: "flex",
      flexDirection: "column",
      gap: ".2rem"
    }
  }, pl.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: ".75rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: i === 0 ? "var(--orange)" : "var(--muted)"
      }
    }, ["🥇", "🥈", "🥉"][i] || i + 1 + ".", " ", p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--cream)",
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".68rem"
      }
    }, p.wr, "% WR \xB7 ", p.avg, "VP \u015Br"));
  })));
}

// ═══════════════════════════════════════════════════════
//  MARS GLOBE
// ═══════════════════════════════════════════════════════
function MarsGlobe(_ref8) {
  var _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 170 : _ref8$size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size + 32,
      height: size + 32,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: size + 30,
      height: size + 30,
      borderRadius: "50%",
      border: "1px solid rgba(232,104,42,.22)",
      boxShadow: "0 0 25px rgba(232,104,42,.08) inset"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: size + 50,
      height: size + 50,
      borderRadius: "50%",
      border: "1px solid rgba(232,104,42,.06)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mars-globe",
    style: {
      width: size,
      height: size
    }
  }));
}

// ═══════════════════════════════════════════════════════
//  STAR FIELD (canvas)
// ═══════════════════════════════════════════════════════
function StarField() {
  var ref = useRef(null);
  useEffect(function () {
    var c = ref.current;
    if (!c) return;
    var ctx = c.getContext("2d");
    c.width = 500;
    c.height = 900;
    ctx.clearRect(0, 0, 500, 900);
    for (var i = 0; i < 140; i++) {
      var x = Math.random() * 500;
      var y = Math.random() * 900;
      var r = Math.random() < .1 ? 1.6 : Math.random() < .3 ? 1.0 : 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + (.15 + Math.random() * .85).toFixed(2) + ")";
      ctx.fill();
    }
    // nebula hint
    var g = ctx.createRadialGradient(420, 150, 0, 420, 150, 180);
    g.addColorStop(0, "rgba(100,30,60,.08)");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 500, 900);
    var g2 = ctx.createRadialGradient(80, 700, 0, 80, 700, 200);
    g2.addColorStop(0, "rgba(30,50,120,.07)");
    g2.addColorStop(1, "transparent");
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, 500, 900);
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    className: "draft-stars"
  });
}

// ═══════════════════════════════════════════════════════
//  SLOT ITEM — single spinning cell
// ═══════════════════════════════════════════════════════
function SlotItem(_ref9) {
  var value = _ref9.value,
    pool = _ref9.pool,
    _ref9$delay = _ref9.delay,
    delay = _ref9$delay === void 0 ? 0 : _ref9$delay,
    onDone = _ref9.onDone,
    _ref9$isBoard = _ref9.isBoard,
    isBoard = _ref9$isBoard === void 0 ? false : _ref9$isBoard;
  var _useState6 = useState("— — — — —"),
    display = _useState6[0],
    setDisplay = _useState6[1];
  var _useState7 = useState(false),
    locked = _useState7[0],
    setLocked = _useState7[1];
  var timerRef = useRef(null);
  var DURATION = isBoard ? 2500 : 1700;
  useEffect(function () {
    var startTimer = setTimeout(function () {
      var t0 = Date.now();
      var _spin = function spin() {
        var elapsed = Date.now() - t0;
        if (elapsed >= DURATION) {
          setDisplay(value);
          setLocked(true);
          isBoard ? SFX.boardLock() : SFX.slotLock();
          onDone == null || onDone();
          return;
        }
        var progress = elapsed / DURATION;
        var delay = 32 + Math.pow(progress, 2.8) * 480;
        setDisplay(pool[Math.floor(Math.random() * pool.length)]);
        if (Math.random() < 0.3) SFX.slotTick();
        timerRef.current = setTimeout(_spin, delay);
      };
      _spin();
    }, delay);
    return function () {
      clearTimeout(startTimer);
      clearTimeout(timerRef.current);
    };
  }, []);
  var cls = "slot-wrap" + (isBoard ? " slot-board" : "") + " " + (locked ? "slot-locked" : "slot-spin");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, display);
}

// ═══════════════════════════════════════════════════════
//  PHASE DISPLAY — group of slots
// ═══════════════════════════════════════════════════════
function PhaseDisplay(_ref0) {
  var items = _ref0.items,
    pool = _ref0.pool,
    isBoard = _ref0.isBoard,
    playerName = _ref0.playerName,
    playerColor = _ref0.playerColor,
    onAllDone = _ref0.onAllDone;
  var photos = usePhotos();
  var _useState8 = useState(0),
    done = _useState8[0],
    setDone = _useState8[1];
  var total = items.length;
  useEffect(function () {
    if (done >= total) {
      var t = setTimeout(function () {
        return onAllDone == null ? void 0 : onAllDone();
      }, 550);
      return function () {
        return clearTimeout(t);
      };
    }
  }, [done, total]);
  return /*#__PURE__*/React.createElement("div", null, playerName && /*#__PURE__*/React.createElement("div", {
    className: "p-badge",
    style: {
      borderColor: (playerColor || "var(--orange)") + "44"
    }
  }, /*#__PURE__*/React.createElement(PlayerPhoto, {
    src: photoFor(photos, playerName),
    name: playerName,
    color: playerColor || "var(--orange)",
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    className: "p-badge-name",
    style: {
      color: playerColor
    }
  }, playerName)), items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(SlotItem, {
      key: i,
      value: item,
      pool: pool,
      delay: isBoard ? 500 : i * 720 + 400,
      onDone: function onDone() {
        return setDone(function (d) {
          return d + 1;
        });
      },
      isBoard: isBoard
    });
  }));
}

// ═══════════════════════════════════════════════════════
//  SUMMARY PHASE
// ═══════════════════════════════════════════════════════
function SummaryPhase(_ref1) {
  var draft = _ref1.draft,
    players = _ref1.players,
    firstPlayer = _ref1.firstPlayer;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '.68rem',
      color: 'var(--muted)',
      marginBottom: '.65rem',
      letterSpacing: '.08em'
    }
  }, "Wci\u015Bnij \"Zacznij Gr\u0119\" aby przej\u015B\u0107 do liczenia wynik\xF3w ze stoperem"), firstPlayer && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: ".65rem",
      padding: ".7rem",
      border: "1px solid " + (firstPlayer.color || "var(--orange)") + "66",
      borderRadius: 9,
      background: (firstPlayer.color || "var(--orange)") + "18"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".52rem",
      letterSpacing: ".3em",
      color: "var(--muted)",
      textTransform: "uppercase",
      marginBottom: ".3rem"
    }
  }, "Pierwszy Gracz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: "1.2rem",
      fontWeight: 900,
      color: firstPlayer.color || "var(--orange)",
      textShadow: "0 0 20px " + (firstPlayer.color || "var(--orange)")
    }
  }, firstPlayer.name)), /*#__PURE__*/React.createElement("div", {
    className: "sum-board"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Plansza"), /*#__PURE__*/React.createElement("div", {
    className: "sum-board-name"
  }, draft.board)), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Kolonie (5)"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, draft.colonies.map(function (c) {
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip hot"
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Tytu\u0142y (6)"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, draft.milestones.map(function (m) {
    return /*#__PURE__*/React.createElement("span", {
      key: m,
      className: "chip"
    }, m);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Nagrody (6)"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, draft.awards.map(function (a) {
    return /*#__PURE__*/React.createElement("span", {
      key: a,
      className: "chip"
    }, a);
  }))), draft.playerDraws.map(function (pd, i) {
    var _players$i, _players$i2, _players$i3;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        borderColor: (((_players$i = players[i]) == null ? void 0 : _players$i.color) || "var(--border)") + "44"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-lbl",
      style: {
        color: ((_players$i2 = players[i]) == null ? void 0 : _players$i2.color) || "var(--orange)"
      }
    }, ((_players$i3 = players[i]) == null ? void 0 : _players$i3.name) || "Pula wspólna"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: ".45rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".58rem",
        color: "var(--muted)",
        marginBottom: ".22rem"
      }
    }, "Preludium:"), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, pd.preludes.map(function (p) {
      return /*#__PURE__*/React.createElement("span", {
        key: p,
        className: "chip"
      }, p);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".58rem",
        color: "var(--muted)",
        marginBottom: ".22rem"
      }
    }, "Korporacje:"), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, pd.corporations.map(function (c) {
      return /*#__PURE__*/React.createElement("span", {
        key: c,
        className: "chip hot"
      }, c);
    }))));
  }));
}

// ═══════════════════════════════════════════════════════
//  COUNTER STEPPER — reusable +/− widget
// ═══════════════════════════════════════════════════════
function Stepper(_ref10) {
  var value = _ref10.value,
    min = _ref10.min,
    max = _ref10.max,
    onChange = _ref10.onChange,
    label = _ref10.label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: ".35rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".58rem",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(Math.max(min, value - 1));
    },
    disabled: value <= min,
    style: {
      width: 34,
      height: 34,
      borderRadius: "6px",
      border: "1px solid var(--border)",
      background: "var(--surface)",
      color: value <= min ? "var(--border)" : "var(--cream)",
      fontSize: "1.1rem",
      cursor: value <= min ? "default" : "pointer",
      fontFamily: "Orbitron",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: "1.6rem",
      fontWeight: 700,
      color: "var(--orange)",
      minWidth: 32,
      textAlign: "center",
      textShadow: "0 0 18px var(--glow)"
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(Math.min(max, value + 1));
    },
    disabled: value >= max,
    style: {
      width: 34,
      height: 34,
      borderRadius: "6px",
      border: "1px solid var(--border)",
      background: "var(--surface)",
      color: value >= max ? "var(--border)" : "var(--cream)",
      fontSize: "1.1rem",
      cursor: value >= max ? "default" : "pointer",
      fontFamily: "Orbitron",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, "+")));
}

// ═══════════════════════════════════════════════════════
//  INLINE FIRST-PLAYER LOTTERY (embedded in draft modal)

function InlineLottery(_ref11) {
  var players = _ref11.players,
    onDone = _ref11.onDone;
  var canvasRef = useRef(null);
  var rafRef = useRef(null);
  var stateRef = useRef({
    phase: "idle",
    angle: 0,
    speed: 0,
    winner: -1
  });
  var _useState9 = useState("idle"),
    uiPhase = _useState9[0],
    setUiPhase = _useState9[1];
  var _useState0 = useState(null),
    winner = _useState0[0],
    setWinner = _useState0[1];
  var W = 380,
    H = 400,
    CX = 190,
    CY = 175,
    ORBIT_R = 130;
  var n = players.length;
  var playerAngles = players.map(function (_, i) {
    return i / n * Math.PI * 2 - Math.PI / 2;
  });
  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
  function drawAstronaut(ctx, cx, cy, color, isLit, isWin) {
    var s = isWin ? 1.5 : 1.0;
    var _hexToRgb = hexToRgb(color.startsWith('#') ? color : '#f07030'),
      r = _hexToRgb[0],
      g = _hexToRgb[1],
      b = _hexToRgb[2];
    var bright = "rgb(" + Math.min(255, r + 60) + "," + Math.min(255, g + 60) + "," + Math.min(255, b + 60) + ")";
    var dark = "rgb(" + Math.max(0, r - 60) + "," + Math.max(0, g - 60) + "," + Math.max(0, b - 60) + ")";
    ctx.save();

    // Glow halo behind astronaut
    if (isLit || isWin) {
      ctx.shadowBlur = isWin ? 35 : 18;
      ctx.shadowColor = color;
    }

    // LEGS
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.ellipse(cx - 3.5 * s, cy + 14 * s, 3 * s, 5 * s, -0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx + 3.5 * s, cy + 14 * s, 3 * s, 5 * s, 0.12, 0, Math.PI * 2);
    ctx.fill();
    // Boots
    ctx.fillStyle = "rgba(30,15,5,0.85)";
    ctx.beginPath();
    ctx.ellipse(cx - 4 * s, cy + 19 * s, 3.5 * s, 2.5 * s, -0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx + 4 * s, cy + 19 * s, 3.5 * s, 2.5 * s, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // BODY SUIT
    ctx.shadowBlur = 0;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 5 * s, 7 * s, 9 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    // Body highlight strip
    ctx.fillStyle = "rgba(255,255,255,0.22)";
    ctx.beginPath();
    ctx.ellipse(cx - 1 * s, cy + 3 * s, 3 * s, 5 * s, -0.1, 0, Math.PI * 2);
    ctx.fill();
    // Body utility belt
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 9 * s, 6.5 * s, 2 * s, 0, 0, Math.PI * 2);
    ctx.fill();

    // ARMS
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(cx - 9 * s, cy + 3 * s, 2.8 * s, 6 * s, -0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx + 9 * s, cy + 3 * s, 2.8 * s, 6 * s, 0.45, 0, Math.PI * 2);
    ctx.fill();
    // Gloves
    ctx.fillStyle = "rgba(20,10,5,0.9)";
    ctx.beginPath();
    ctx.arc(cx - 12 * s, cy + 7.5 * s, 3 * s, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + 12 * s, cy + 7.5 * s, 3 * s, 0, Math.PI * 2);
    ctx.fill();

    // BACKPACK
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(cx + 4.5 * s, cy - 1.5 * s, 4 * s, 10 * s, 1.5 * s) : ctx.rect(cx + 4.5 * s, cy - 1.5 * s, 4 * s, 10 * s);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(cx + 5.5 * s, cy + 0.5 * s, 2 * s, 1 * s);
    ctx.fillRect(cx + 5.5 * s, cy + 3 * s, 2 * s, 1 * s);

    // HELMET
    if (isWin || isLit) {
      ctx.shadowBlur = isWin ? 25 : 10;
      ctx.shadowColor = color;
    }
    ctx.fillStyle = bright;
    ctx.beginPath();
    ctx.arc(cx, cy - 4 * s, 8.5 * s, 0, Math.PI * 2);
    ctx.fill();
    // Helmet outer ring
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = s * 1.2;
    ctx.stroke();
    ctx.shadowBlur = 0;
    // Neck collar
    ctx.fillStyle = dark;
    ctx.beginPath();
    ctx.ellipse(cx, cy + 4 * s, 5 * s, 2.5 * s, 0, 0, Math.PI * 2);
    ctx.fill();

    // VISOR (dark glass)
    ctx.fillStyle = "rgba(5,15,45,0.92)";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 4 * s, 5.5 * s, 4.5 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    // Visor inner glow (reflection)
    ctx.fillStyle = "rgba(80,200,255,0.5)";
    ctx.beginPath();
    ctx.ellipse(cx - 2 * s, cy - 6.5 * s, 2.5 * s, 1.5 * s, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.beginPath();
    ctx.ellipse(cx + 1.5 * s, cy - 2.5 * s, 1.2 * s, 0.8 * s, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // If winner: crown / star above helmet
    if (isWin) {
      ctx.fillStyle = '#ffd700';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#ffd700';
      ctx.font = "bold " + 16 * s + "px serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', cx, cy - 16 * s);
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }
  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext('2d');
    var isLight = function isLight() {
      return document.documentElement.getAttribute('data-theme') === 'light';
    };
    var drawBackdrop = function drawBackdrop() {
      // Soft vignette circle — creates depth without hard rectangle
      var grad = ctx.createRadialGradient(CX, CY, ORBIT_R * 0.3, CX, CY, ORBIT_R * 1.5);
      if (isLight()) {
        grad.addColorStop(0, 'rgba(30,10,5,0.12)');
        grad.addColorStop(0.6, 'rgba(20,8,4,0.06)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
      } else {
        grad.addColorStop(0, 'rgba(0,0,0,0.35)');
        grad.addColorStop(0.7, 'rgba(0,0,0,0.1)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    };
    var drawOrbit = function drawOrbit() {
      ctx.beginPath();
      ctx.arc(CX, CY, ORBIT_R, 0, Math.PI * 2);
      ctx.setLineDash([6, 8]);
      ctx.strokeStyle = isLight() ? 'rgba(120,50,10,0.6)' : 'rgba(240,112,48,0.55)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    };
    var drawMars = function drawMars() {
      var grd = ctx.createRadialGradient(CX - 16, CY - 12, 3, CX, CY, 50);
      grd.addColorStop(0, '#f09060');
      grd.addColorStop(0.35, '#d04020');
      grd.addColorStop(1, '#2a0606');
      ctx.shadowBlur = 50;
      ctx.shadowColor = 'rgba(210,60,20,0.85)';
      ctx.beginPath();
      ctx.arc(CX, CY, 50, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.shadowBlur = 0;
      // Surface craters
      ctx.fillStyle = 'rgba(255,220,180,.14)';
      ctx.beginPath();
      ctx.ellipse(CX - 12, CY - 14, 16, 9, -0.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(50,8,4,.3)';
      ctx.beginPath();
      ctx.ellipse(CX + 10, CY + 12, 12, 7, 0.5, 0, Math.PI * 2);
      ctx.fill();
      // Polar cap
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath();
      ctx.ellipse(CX, CY - 44, 14, 6, 0, 0, Math.PI * 2);
      ctx.fill();
    };
    var drawBeam = function drawBeam(angle) {
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(angle);
      var grad = ctx.createLinearGradient(0, 0, ORBIT_R + 20, 0);
      grad.addColorStop(0, 'rgba(240,112,48,0)');
      grad.addColorStop(0.5, 'rgba(240,112,48,0.7)');
      grad.addColorStop(1, 'rgba(240,112,48,0)');
      ctx.beginPath();
      ctx.moveTo(48, 0);
      var ha = 0.18;
      ctx.lineTo(Math.cos(-ha) * (ORBIT_R + 18), Math.sin(-ha) * (ORBIT_R + 18));
      ctx.lineTo(Math.cos(ha) * (ORBIT_R + 18), Math.sin(ha) * (ORBIT_R + 18));
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    };
    var drawPlayers = function drawPlayers(beamAngle, phase, winIdx) {
      players.forEach(function (p, i) {
        var ang = playerAngles[i];
        var px = CX + Math.cos(ang) * ORBIT_R;
        var py = CY + Math.sin(ang) * ORBIT_R;
        var norm = (beamAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        var na = (ang + Math.PI * 2) % (Math.PI * 2);
        var diff = Math.min(Math.abs(norm - na), Math.PI * 2 - Math.abs(norm - na));
        var isLit = phase === 'spinning' && diff < 0.3;
        var isWin = phase === 'result' && winIdx === i;
        // Astronaut centered at orbit point, offset up so feet touch orbit
        drawAstronaut(ctx, px, py - 12, p.color, isLit, isWin);
        // Name label with background pill
        var lblR = ORBIT_R + 34;
        var lx = CX + Math.cos(ang) * lblR;
        var ly = CY + Math.sin(ang) * lblR;
        var name = p.name.length > 8 ? p.name.slice(0, 7) + '…' : p.name;
        ctx.font = (isWin ? 'bold ' : '') + "12px 'Exo 2',sans-serif";
        var tw = ctx.measureText(name).width;
        // Pill background
        var _ref12 = [parseInt(p.color.slice(1, 3), 16), parseInt(p.color.slice(3, 5), 16), parseInt(p.color.slice(5, 7), 16)],
          r = _ref12[0],
          g = _ref12[1],
          b = _ref12[2];
        ctx.fillStyle = isLight() ? "rgba(" + r + "," + g + "," + b + ",0.18)" : "rgba(" + r + "," + g + "," + b + ",0.28)";
        var pad = 5;
        var ph = 16,
          pw = tw + pad * 2;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(lx - pw / 2, ly - ph / 2, pw, ph, ph / 2) : ctx.rect(lx - pw / 2, ly - ph / 2, pw, ph);
        ctx.fill();
        // Name text
        ctx.fillStyle = isWin ? '#fff' : isLight() ? "rgba(" + Math.max(0, r - 80) + "," + Math.max(0, g - 80) + "," + Math.max(0, b - 80) + ",1)" : "rgba(" + Math.min(255, r + 80) + "," + Math.min(255, g + 80) + "," + Math.min(255, b + 80) + ",1)";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (isWin) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
        }
        ctx.fillText(name, lx, ly);
        ctx.shadowBlur = 0;
      });
    };
    var draw = function draw() {
      var s = stateRef.current;
      ctx.clearRect(0, 0, W, H);
      drawBackdrop();
      drawOrbit();
      if (s.phase !== 'idle') drawBeam(s.angle);
      drawMars();
      drawPlayers(s.angle, s.phase, s.winner);
    };
    var _loop2 = function loop() {
      var s = stateRef.current;
      if (s.phase === 'spinning') {
        s.angle += s.speed;
        s.speed *= 0.984;
        if (s.speed < 0.006) {
          var norm = (s.angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
          var best = 0,
            bestD = Infinity;
          playerAngles.forEach(function (a, i) {
            var na = (a + Math.PI * 2) % (Math.PI * 2);
            var d = Math.min(Math.abs(norm - na), Math.PI * 2 - Math.abs(norm - na));
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          s.angle = playerAngles[best];
          s.phase = 'result';
          s.winner = best;
          setUiPhase('result');
          setWinner(players[best]);
          SFX.winnerReveal();
          setTimeout(function () {
            return onDone(players[best]);
          }, 700);
        }
      }
      draw();
      rafRef.current = requestAnimationFrame(_loop2);
    };
    draw();
    rafRef.current = requestAnimationFrame(_loop2);
    return function () {
      return cancelAnimationFrame(rafRef.current);
    };
  }, []);
  var spin = function spin() {
    SFX.spin();
    stateRef.current = {
      phase: 'spinning',
      angle: stateRef.current.angle,
      speed: 0.32 + Math.random() * 0.14,
      winner: -1
    };
    setUiPhase('spinning');
    setWinner(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: 'block',
      width: '100%',
      maxWidth: W
    }
  }), winner && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '.3rem',
      animation: 'fadeIn .4s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Orbitron,sans-serif',
      fontSize: '.5rem',
      letterSpacing: '.35em',
      color: 'var(--muted)',
      textTransform: 'uppercase',
      marginBottom: '.2rem'
    }
  }, "Pierwszy Gracz"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Orbitron,sans-serif',
      fontSize: '1.5rem',
      fontWeight: 900,
      color: winner.color,
      textShadow: "0 0 30px " + winner.color
    }
  }, winner.name)), uiPhase === 'idle' && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: spin,
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB2 Losuj pierwszego gracza")), uiPhase === 'spinning' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.75rem',
      color: 'var(--muted)',
      letterSpacing: '.12em',
      marginTop: '.4rem'
    }
  }, "\u25CC Losowanie..."));
}

// ═══════════════════════════════════════════════════════
//  CARD SELECTION PHASE
// ═══════════════════════════════════════════════════════
function CardSelectionPhase(_ref13) {
  var items = _ref13.items,
    count = _ref13.count,
    playerName = _ref13.playerName,
    playerColor = _ref13.playerColor,
    label = _ref13.label,
    onSelected = _ref13.onSelected;
  var photos = usePhotos();
  var _useState1 = useState([]),
    selected = _useState1[0],
    setSelected = _useState1[1];
  var done = selected.length >= count;
  useEffect(function () {
    if (done) {
      SFX.slotLock();
      onSelected(selected);
    }
  }, [selected.length]);
  var toggle = function toggle(item) {
    if (selected.includes(item)) {
      setSelected(function (s) {
        return s.filter(function (x) {
          return x !== item;
        });
      });
    } else if (selected.length < count) {
      setSelected(function (s) {
        return [].concat(s, [item]);
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", null, playerName && /*#__PURE__*/React.createElement("div", {
    className: "p-badge",
    style: {
      borderColor: (playerColor || "var(--orange)") + "44",
      marginBottom: ".65rem"
    }
  }, /*#__PURE__*/React.createElement(PlayerPhoto, {
    src: photoFor(photos, playerName),
    name: playerName,
    color: playerColor || "var(--orange)",
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    className: "p-badge-name",
    style: {
      color: playerColor
    }
  }, playerName), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".58rem",
      color: done ? "var(--green)" : "var(--orange)"
    }
  }, selected.length, "/", count)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".68rem",
      color: "var(--muted)",
      marginBottom: ".6rem",
      letterSpacing: ".08em",
      lineHeight: 1.5
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: ".38rem"
    }
  }, items.map(function (item) {
    var sel = selected.includes(item);
    var disabled = !sel && selected.length >= count;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: function onClick() {
        return !disabled && toggle(item);
      },
      style: {
        textAlign: "left",
        padding: ".62rem .85rem",
        background: sel ? (playerColor || "var(--orange)") + "28" : "rgba(128,128,128,0.1)",
        border: "1.5px solid " + (sel ? playerColor || "var(--orange)" : "var(--border)"),
        borderRadius: 8,
        cursor: disabled ? "default" : "pointer",
        color: sel ? playerColor || "var(--orange)" : disabled ? "var(--border)" : "var(--cream)",
        fontSize: ".85rem",
        fontFamily: "'Exo 2',sans-serif",
        transition: "all .15s",
        opacity: disabled ? .45 : 1,
        display: "flex",
        alignItems: "center",
        gap: ".6rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 3,
        flexShrink: 0,
        background: sel ? playerColor || "var(--orange)" : "var(--border)",
        boxShadow: sel ? "0 0 8px " + (playerColor || "var(--orange)") : "none",
        transition: "all .15s"
      }
    }), item);
  })), done && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: ".75rem",
      padding: ".5rem .7rem",
      background: (playerColor || "var(--orange)") + "18",
      border: "1px solid " + (playerColor || "var(--orange)") + "44",
      borderRadius: 7,
      fontSize: ".75rem",
      color: "var(--cream)",
      animation: "fadeIn .3s ease-out"
    }
  }, "\u2713 Wybrano: ", selected.join(", ")));
}

// ═══════════════════════════════════════════════════════
//  DRAFT MODAL
// ═══════════════════════════════════════════════════════
function DraftModal(_ref14) {
  var players = _ref14.players,
    gameData = _ref14.gameData,
    corpCount = _ref14.corpCount,
    preludeCount = _ref14.preludeCount,
    _ref14$preludesKept = _ref14.preludesKept,
    preludesKept = _ref14$preludesKept === void 0 ? 2 : _ref14$preludesKept,
    onClose = _ref14.onClose;
  // Each player gets an INDEPENDENT random draw (own shuffle, own deck)
  var _useState10 = useState(function () {
      var playerDraws = players.map(function () {
        return {
          corporations: pick(gameData.corporations, corpCount),
          preludes: pick(gameData.preludes, preludeCount),
          selectedPreludes: [],
          selectedCorp: null
        };
      });
      return {
        board: pick(gameData.boards, 1)[0],
        colonies: pick(gameData.colonies, 5),
        milestones: pick(gameData.milestones, 6),
        awards: pick(gameData.awards, 6),
        playerDraws: playerDraws,
        corpCount: corpCount,
        preludeCount: preludeCount,
        preludesKept: preludesKept,
        firstPlayer: null
      };
    }),
    draft = _useState10[0];
  var phases = useRef(function () {
    var list = [{
      id: "firstplayer",
      label: "Pierwszy Gracz",
      isSpecial: true
    }, {
      id: "board",
      label: "Plansza",
      items: [draft.board],
      pool: gameData.boards,
      isBoard: true
    }, {
      id: "colonies",
      label: "Kolonie",
      items: draft.colonies,
      pool: gameData.colonies
    }, {
      id: "milestones",
      label: "Tytuły",
      items: draft.milestones,
      pool: gameData.milestones
    }, {
      id: "awards",
      label: "Nagrody",
      items: draft.awards,
      pool: gameData.awards
    }];
    // Round 1: every player draws PRELUDES
    players.forEach(function (p, i) {
      list.push({
        id: "p" + i + "-pre",
        label: "Preludium",
        items: draft.playerDraws[i].preludes,
        pool: gameData.preludes,
        playerName: p.name,
        playerColor: p.color
      });
    });
    // Round 2: every player draws CORPORATIONS
    players.forEach(function (p, i) {
      list.push({
        id: "p" + i + "-cor",
        label: "Korporacje",
        items: draft.playerDraws[i].corporations,
        pool: gameData.corporations,
        playerName: p.name,
        playerColor: p.color
      });
    });
    // Round 3: ALL players SELECT their preludes
    players.forEach(function (p, i) {
      list.push({
        id: "p" + i + "-pre-sel",
        label: "Wybierz preludium \u2014 " + p.name,
        isSelect: true,
        type: "preludes",
        playerIdx: i,
        count: preludesKept,
        playerName: p.name,
        playerColor: p.color
      });
    });
    // Round 4: ALL players SELECT their corporation
    players.forEach(function (p, i) {
      list.push({
        id: "p" + i + "-cor-sel",
        label: "Wybierz korporacj\u0119 \u2014 " + p.name,
        isSelect: true,
        type: "corp",
        playerIdx: i,
        count: 1,
        playerName: p.name,
        playerColor: p.color
      });
    });
    list.push({
      id: "summary",
      label: "Podsumowanie"
    });
    return list;
  }()).current;
  var _useState11 = useState(0),
    idx = _useState11[0],
    setIdx = _useState11[1];
  var _useState12 = useState(false),
    ready = _useState12[0],
    setReady = _useState12[1];
  var _useState13 = useState(null),
    fpWinner = _useState13[0],
    setFpWinner = _useState13[1];
  var phase = phases[idx];
  var progress = Math.round(idx / (phases.length - 1) * 100);
  var advance = function advance() {
    SFX.advance();
    if (idx < phases.length - 1) {
      setIdx(function (i) {
        return i + 1;
      });
      setReady(false);
    } else {
      draft.firstPlayer = (fpWinner == null ? void 0 : fpWinner.name) || null;
      try {
        localStorage.setItem('tfm:lastDraft', JSON.stringify(draft));
      } catch (_unused3) {}
      onClose(draft, true);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "draft-ov"
  }, /*#__PURE__*/React.createElement(StarField, null), /*#__PURE__*/React.createElement("div", {
    className: "draft-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: ".58rem",
      letterSpacing: ".3em",
      color: "var(--muted)"
    }
  }, "LOSOWANIE ROZGRYWKI"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onClose(null);
    },
    style: {
      background: "none",
      border: "1px solid var(--border)",
      color: "var(--muted)",
      borderRadius: "4px",
      padding: ".18rem .55rem",
      cursor: "pointer",
      fontFamily: "Orbitron",
      fontSize: ".5rem",
      letterSpacing: ".1em",
      position: "relative",
      zIndex: 4
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "draft-prog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "draft-prog-fill",
    style: {
      width: progress + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "draft-planet"
  }, /*#__PURE__*/React.createElement(MarsGlobe, {
    size: phase.id === "summary" ? 78 : phase.id === "firstplayer" ? 68 : 130
  }), /*#__PURE__*/React.createElement("div", {
    className: "draft-phase-lbl",
    key: phase.id
  }, phase.label)), /*#__PURE__*/React.createElement("div", {
    className: "draft-body"
  }, phase.id === "firstplayer" && /*#__PURE__*/React.createElement(InlineLottery, {
    players: players,
    onDone: function onDone(w) {
      setFpWinner(w);
      setReady(true);
    }
  }), !phase.isSelect && phase.id !== "firstplayer" && phase.id !== "summary" && /*#__PURE__*/React.createElement(PhaseDisplay, {
    key: phase.id,
    items: phase.items,
    pool: phase.pool,
    isBoard: phase.isBoard,
    playerName: phase.playerName,
    playerColor: phase.playerColor,
    onAllDone: function onAllDone() {
      return setReady(true);
    }
  }), phase.isSelect && /*#__PURE__*/React.createElement(CardSelectionPhase, {
    key: phase.id,
    items: phase.type === "preludes" ? draft.playerDraws[phase.playerIdx].preludes : draft.playerDraws[phase.playerIdx].corporations,
    count: phase.count,
    playerName: phase.playerName,
    playerColor: phase.playerColor,
    label: phase.type === "preludes" ? "Wybierz " + phase.count + " z " + draft.playerDraws[phase.playerIdx].preludes.length + " preludi\xF3w do gry" : "Wybierz korporację do gry",
    onSelected: function onSelected(sel) {
      if (phase.type === "preludes") draft.playerDraws[phase.playerIdx].selectedPreludes = sel;else draft.playerDraws[phase.playerIdx].selectedCorp = sel[0];
      setReady(true);
    }
  }), phase.id === "summary" && /*#__PURE__*/React.createElement(SummaryPhase, {
    draft: draft,
    players: players,
    firstPlayer: fpWinner
  })), /*#__PURE__*/React.createElement("div", {
    className: "draft-footer"
  }, (ready || phase.id === "summary") && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: advance,
    style: {
      animation: "fadeIn .4s ease-out"
    }
  }, /*#__PURE__*/React.createElement("span", null, phase.id === "summary" ? "🎮  Zacznij Grę" : "Dalej  →"))));
}

// ═══════════════════════════════════════════════════════
//  DRAFT ENTRY VIEW
// ═══════════════════════════════════════════════════════
function DraftView(_ref15) {
  var players = _ref15.players,
    gameData = _ref15.gameData,
    onStartGame = _ref15.onStartGame;
  var _useState14 = useState("config"),
    stage = _useState14[0],
    setStage = _useState14[1];
  var _useState15 = useState(function () {
      try {
        var v = localStorage.getItem("tfm:corpCount");
        return v ? Number(v) : 3;
      } catch (_unused4) {
        return 3;
      }
    }),
    corpCount = _useState15[0],
    setCorpCount = _useState15[1];
  var _useState16 = useState(function () {
      try {
        var v = localStorage.getItem("tfm:preludeCount");
        return v ? Number(v) : 4;
      } catch (_unused5) {
        return 4;
      }
    }),
    preludeCount = _useState16[0],
    setPreludeCount = _useState16[1];
  var _useState17 = useState(function () {
      try {
        var v = localStorage.getItem("tfm:preludesKept");
        return v ? Number(v) : 2;
      } catch (_unused6) {
        return 2;
      }
    }),
    preludesKept = _useState17[0],
    setPreludesKept = _useState17[1];
  var _useState18 = useState(null),
    lastDraft = _useState18[0],
    setLastDraft = _useState18[1];
  // Player selection: set of selected player IDs (default: all)
  var _useState19 = useState(function () {
      return new Set(players.map(function (p) {
        return p.id;
      }));
    }),
    selectedIds = _useState19[0],
    setSelectedIds = _useState19[1];

  // Keep selectedIds in sync when players list changes
  useEffect(function () {
    setSelectedIds(function (prev) {
      var validIds = new Set(players.map(function (p) {
        return p.id;
      }));
      var next = new Set([].concat(prev).filter(function (id) {
        return validIds.has(id);
      }));
      // auto-add new players
      players.forEach(function (p) {
        return next.add(p.id);
      });
      return next;
    });
  }, [players.length]);
  var activePlayers = players.filter(function (p) {
    return selectedIds.has(p.id);
  });
  var nPlayers = activePlayers.length;
  var safeCorps = Math.min(corpCount, Math.min(6, gameData.corporations.length));
  var safePreludes = Math.min(preludeCount, Math.min(6, gameData.preludes.length));
  var handleClose = function handleClose(draft, navigateToScore) {
    setStage("config");
    if (draft) {
      setLastDraft(draft);
      if (navigateToScore) onStartGame == null || onStartGame(draft);
    }
  };
  var togglePlayer = function togglePlayer(id) {
    return setSelectedIds(function (prev) {
      var s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Losowanie Rozgrywki"), stage === "config" && /*#__PURE__*/React.createElement(React.Fragment, null, players.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".55rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl",
    style: {
      marginBottom: 0
    }
  }, "Gracze (", selectedIds.size, "/", players.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: function onClick() {
      return setSelectedIds(function (s) {
        return s.size === players.length ? new Set() : new Set(players.map(function (p) {
          return p.id;
        }));
      });
    },
    style: {
      width: "auto",
      padding: ".2rem .55rem",
      fontSize: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, selectedIds.size === players.length ? "Odznacz" : "Zaznacz wszystkich"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".38rem"
    }
  }, players.map(function (p) {
    var sel = selectedIds.has(p.id);
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        SFX.click();
        togglePlayer(p.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".38rem",
        padding: ".4rem .75rem",
        borderRadius: 8,
        cursor: "pointer",
        // Kolor gracza jest TŁEM zaznaczonego kafelka, a napis dobiera się
        // automatycznie. Wcześniej nazwisko było pisane kolorem gracza na tle
        // motywu — na jasnych skórkach schodziło do kontrastu ~3:1.
        border: "2px solid " + (sel ? p.color : "var(--border)"),
        background: sel ? p.color : "transparent",
        transition: "all .18s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        flexShrink: 0,
        background: sel ? autoTextColor(p.color) : p.color,
        opacity: sel ? 0.8 : 0.65,
        transition: "all .18s"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".85rem",
        fontWeight: sel ? 700 : 500,
        color: sel ? autoTextColor(p.color) : "var(--muted)"
      }
    }, p.name));
  }))), players.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#3a1f10",
      textAlign: "center",
      padding: "2rem 1rem",
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.8rem",
      marginBottom: ".6rem",
      opacity: .4
    }
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: ".65rem",
      letterSpacing: ".2em",
      color: "var(--orange)",
      marginBottom: ".45rem"
    }
  }, "Brak graczy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      lineHeight: 1.7
    }
  }, "Dodaj graczy w", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream)"
    }
  }, "Ustawienia \u2192 Gracze"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "entry-hero",
    onClick: function onClick() {
      return nPlayers >= 2 && setStage("modal");
    },
    style: {
      opacity: nPlayers >= 2 ? 1 : .5,
      cursor: nPlayers >= 2 ? "pointer" : "default",
      marginBottom: ".7rem"
    }
  }, /*#__PURE__*/React.createElement(MarsGlobe, {
    size: 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: ".7rem",
      letterSpacing: ".2em",
      color: "var(--orange)",
      textTransform: "uppercase"
    }
  }, "\u25C8 Rozpocznij Losowanie"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".72rem",
      color: "var(--muted)",
      marginTop: ".3rem"
    }
  }, nPlayers >= 2 ? nPlayers + " graczy \xB7 losowanie pierwszego gracza na starcie" : "Zaznacz minimum 2 graczy")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#2a1f40"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl",
    style: {
      color: "var(--orange)",
      marginBottom: "1rem"
    }
  }, "Liczba kart na gracza"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    label: "Korporacje",
    value: safeCorps,
    min: 2,
    max: Math.min(6, gameData.corporations.length),
    onChange: function onChange(v) {
      setCorpCount(v);
      try {
        localStorage.setItem("tfm:corpCount", v);
      } catch (_unused7) {}
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    label: "Preludium",
    value: safePreludes,
    min: 2,
    max: Math.min(6, gameData.preludes.length),
    onChange: function onChange(v) {
      setPreludeCount(v);
      try {
        localStorage.setItem("tfm:preludeCount", v);
      } catch (_unused8) {}
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    label: "W grze",
    value: Math.min(preludesKept, safePreludes),
    min: 1,
    max: Math.min(safePreludes, 4),
    onChange: function onChange(v) {
      setPreludesKept(v);
      try {
        localStorage.setItem("tfm:preludesKept", v);
      } catch (_unused9) {}
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem"
    }
  }, [{
    lbl: "Korporacje / gracz",
    val: safeCorps,
    total: gameData.corporations.length
  }, {
    lbl: "Preludium / gracz",
    val: safePreludes,
    total: gameData.preludes.length
  }].map(function (_ref16) {
    var lbl = _ref16.lbl,
      val = _ref16.val,
      total = _ref16.total;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      style: {
        flex: 1,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "7px",
        padding: ".5rem .65rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".52rem",
        color: "var(--muted)",
        letterSpacing: ".1em",
        textTransform: "uppercase",
        marginBottom: ".22rem"
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron",
        fontSize: ".95rem",
        color: "var(--orange)",
        fontWeight: 700
      }
    }, val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".6rem",
        color: "var(--muted)",
        marginTop: ".16rem"
      }
    }, "pula: ", total));
  }))), lastDraft && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".58rem",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: ".7rem"
    }
  }, "Ostatnie Losowanie"), /*#__PURE__*/React.createElement("div", {
    className: "sum-board"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Plansza"), /*#__PURE__*/React.createElement("div", {
    className: "sum-board-name"
  }, lastDraft.board)), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".4rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Kolonie"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, lastDraft.colonies.map(function (c) {
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip hot"
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".4rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Tytu\u0142y"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, lastDraft.milestones.map(function (m) {
    return /*#__PURE__*/React.createElement("span", {
      key: m,
      className: "chip"
    }, m);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Nagrody"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, lastDraft.awards.map(function (a) {
    return /*#__PURE__*/React.createElement("span", {
      key: a,
      className: "chip"
    }, a);
  })))), lastDraft.playerDraws.map(function (pd, i) {
    var _activePlayers$i, _activePlayers$i2, _activePlayers$i3;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        borderColor: (((_activePlayers$i = activePlayers[i]) == null ? void 0 : _activePlayers$i.color) || "var(--border)") + "44"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-lbl",
      style: {
        color: ((_activePlayers$i2 = activePlayers[i]) == null ? void 0 : _activePlayers$i2.color) || "var(--orange)"
      }
    }, ((_activePlayers$i3 = activePlayers[i]) == null ? void 0 : _activePlayers$i3.name) || "Gracz " + (i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: ".4rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".58rem",
        color: "var(--muted)",
        marginBottom: ".22rem"
      }
    }, "Korporacje (", lastDraft.corpCount, "):"), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, pd.corporations.map(function (c) {
      return /*#__PURE__*/React.createElement("span", {
        key: c,
        className: "chip hot"
      }, c);
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".58rem",
        color: "var(--muted)",
        marginBottom: ".22rem"
      }
    }, "Preludium (", lastDraft.preludeCount, "):"), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, pd.preludes.map(function (p) {
      return /*#__PURE__*/React.createElement("span", {
        key: p,
        className: "chip"
      }, p);
    }))));
  }))), stage === "modal" && /*#__PURE__*/React.createElement(DraftModal, {
    players: activePlayers,
    gameData: gameData,
    corpCount: safeCorps,
    preludeCount: safePreludes,
    preludesKept: Math.min(preludesKept, safePreludes),
    onClose: handleClose
  }));
}

// ═══════════════════════════════════════════════════════
//  SCORE VIEW
// ═══════════════════════════════════════════════════════
var EP = function EP() {
  return {
    name: "",
    color: "",
    tr: 20,
    greeneries: 0,
    cities: 0,
    cards: 0,
    milestones: 0,
    awards: 0,
    custom: {}
  };
};
function ScoreView(_ref17) {
  var onSave = _ref17.onSave,
    players = _ref17.players,
    customCats = _ref17.customCats,
    initialTimer = _ref17.initialTimer,
    initialDraft = _ref17.initialDraft;
  var photos = usePhotos();
  var _useState20 = useState(function () {
      try {
        var v = localStorage.getItem("tfm:scoreDraft");
        if (v) {
          var d = JSON.parse(v);
          if (Array.isArray(d) && d.length) return d;
        }
      } catch (_unused0) {}
      if (players.length > 0) return players.map(function (p) {
        return {
          name: p.name,
          color: p.color,
          tr: 20,
          greeneries: 0,
          cities: 0,
          cards: 0,
          milestones: 0,
          awards: 0,
          custom: {}
        };
      });
      return [EP(), EP()];
    }),
    ps = _useState20[0],
    setPs = _useState20[1];
  var _useState21 = useState(false),
    saved = _useState21[0],
    setSaved = _useState21[1];
  var _useState22 = useState(null),
    breakdown = _useState22[0],
    setBreakdown = _useState22[1];
  // Real-time clock timer: records startedAt, pauses, endedAt
  var _useState23 = useState({
      startedAt: null,
      pauses: [],
      endedAt: null
    }),
    timerLog = _useState23[0],
    setTimerLog = _useState23[1];
  var _useState24 = useState(0),
    timerTick = _useState24[0],
    setTimerTick = _useState24[1]; // forces re-render
  var timerInterval = useRef(null);
  var timerRunning = timerLog.startedAt && !timerLog.endedAt && (!timerLog.pauses.length || timerLog.pauses[timerLog.pauses.length - 1].resumedAt !== null);
  var getElapsed = function getElapsed(log) {
    if (!log.startedAt) return 0;
    var end = Date.now();
    var paused = log.pauses.reduce(function (sum, p) {
      return sum + ((p.resumedAt || end) - p.pausedAt);
    }, 0);
    return Math.floor((end - log.startedAt - paused) / 1000);
  };
  var timerSec = getElapsed(timerLog);
  var startTimer = function startTimer() {
    var now = Date.now();
    setTimerLog(function (l) {
      if (!l.startedAt) return {
        startedAt: now,
        pauses: [],
        endedAt: null
      };
      // Resume from pause
      var pauses = [].concat(l.pauses);
      if (pauses.length && !pauses[pauses.length - 1].resumedAt) {
        pauses[pauses.length - 1].resumedAt = now;
      }
      return _extends({}, l, {
        pauses: pauses
      });
    });
  };
  var pauseTimer = function pauseTimer() {
    setTimerLog(function (l) {
      var pauses = [].concat(l.pauses, [{
        pausedAt: Date.now(),
        resumedAt: null
      }]);
      return _extends({}, l, {
        pauses: pauses
      });
    });
  };
  var toggleTimer = function toggleTimer() {
    return timerRunning ? pauseTimer() : startTimer();
  };
  useEffect(function () {
    if (timerRunning) {
      timerInterval.current = setInterval(function () {
        return setTimerTick(function (t) {
          return t + 1;
        });
      }, 1000);
    } else clearInterval(timerInterval.current);
    return function () {
      return clearInterval(timerInterval.current);
    };
  }, [timerRunning]);

  // Save game log to localStorage for persistence
  useEffect(function () {
    if (timerLog.startedAt) {
      try {
        localStorage.setItem("tfm:timerLog", JSON.stringify(timerLog));
      } catch (_unused1) {}
    }
  }, [timerLog]);
  useEffect(function () {
    var onVis = function onVis() {
      if (document.hidden) setTimerRunning(false);
    };
    document.addEventListener('visibilitychange', onVis);
    return function () {
      return document.removeEventListener('visibilitychange', onVis);
    };
  }, []);
  var _useState25 = useState(null),
    confPhase = _useState25[0],
    setConfPhase = _useState25[1];
  var _useState26 = useState("standard"),
    confFormat = _useState26[0],
    setConfFormat = _useState26[1];
  var _useState27 = useState([]),
    confPlayers = _useState27[0],
    setConfPlayers = _useState27[1];
  var _useState28 = useState(""),
    autoLbl = _useState28[0],
    setAutoLbl = _useState28[1];
  useEffect(function () {
    var changed = ps.some(function (p) {
      return p.name || p.tr !== 20 || p.greeneries || p.cities || p.cards || p.milestones || p.awards || Object.values(p.custom || {}).some(Boolean);
    });
    if (!changed) return;
    try {
      localStorage.setItem("tfm:scoreDraft", JSON.stringify(ps));
    } catch (_unused10) {}
    setAutoLbl("✓");
    var t = setTimeout(function () {
      return setAutoLbl("");
    }, 1400);
    return function () {
      return clearTimeout(t);
    };
  }, [ps]);
  var calcCustom = function calcCustom(p) {
    return Object.values(p.custom || {}).reduce(function (a, b) {
      return a + (parseInt(b) || 0);
    }, 0);
  };
  var calc = function calc(p) {
    return p.tr + p.greeneries + p.cities + p.cards + p.milestones + p.awards + calcCustom(p);
  };
  var upd = function upd(i, f, v) {
    var _extends2;
    var a = [].concat(ps);
    a[i] = _extends({}, a[i], (_extends2 = {}, _extends2[f] = f === "name" ? v : parseInt(v) || 0, _extends2));
    setPs(a);
  };
  var updCustom = function updCustom(playerIdx, catId, v) {
    var _extends3;
    var a = [].concat(ps);
    a[playerIdx] = _extends({}, a[playerIdx], {
      custom: _extends({}, a[playerIdx].custom, (_extends3 = {}, _extends3[catId] = parseInt(v) || 0, _extends3))
    });
    setPs(a);
  };
  var doSave = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var gamePlayers, lastDraft, ld, now, finalLog, totalPaused, durationSec, game, ex, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            SFX.save();
            gamePlayers = ps.map(function (p) {
              return _extends({}, p, {
                total: calc(p)
              });
            });
            lastDraft = null;
            try {
              ld = localStorage.getItem('tfm:lastDraft');
              if (ld) lastDraft = JSON.parse(ld);
            } catch (_unused11) {}
            now = Date.now();
            finalLog = _extends({}, timerLog, {
              endedAt: now
            });
            totalPaused = finalLog.pauses.reduce(function (s, p) {
              return s + ((p.resumedAt || now) - p.pausedAt);
            }, 0);
            durationSec = finalLog.startedAt ? Math.floor((now - finalLog.startedAt - totalPaused) / 1000) : timerSec > 0 ? timerSec : null;
            game = {
              id: Date.now(),
              date: new Date().toISOString(),
              players: gamePlayers,
              draft: initialDraft || lastDraft,
              duration: durationSec,
              timerLog: finalLog,
              dayOfWeek: new Date().getDay(),
              playerCount: gamePlayers.length
            };
            setTimerLog({
              startedAt: null,
              pauses: [],
              endedAt: null
            });
            try {
              localStorage.removeItem("tfm:timerLog");
            } catch (_unused12) {}
            _context.n = 1;
            return loadData("tfm:games");
          case 1:
            _t = _context.v;
            if (_t) {
              _context.n = 2;
              break;
            }
            _t = [];
          case 2:
            ex = _t;
            _context.n = 3;
            return saveData("tfm:games", [game].concat(ex));
          case 3:
            try {
              localStorage.removeItem("tfm:scoreDraft");
            } catch (_unused13) {}
            onSave();
            setSaved(true);
            setTimeout(function () {
              return setSaved(false);
            }, 2500);
            setConfPlayers(gamePlayers);
            setTimeout(function () {
              return setConfPhase("intro");
            }, 700);
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function doSave() {
      return _ref18.apply(this, arguments);
    };
  }();
  var tots = ps.map(calc);
  var maxT = Math.max.apply(Math, tots);
  var STD_COLS = [{
    f: "tr",
    lbl: "TR",
    tip: "Terraform Rating"
  }, {
    f: "greeneries",
    lbl: "🌿",
    tip: "Zieleniny"
  }, {
    f: "cities",
    lbl: "🏙",
    tip: "Miasto × zieleniny"
  }, {
    f: "cards",
    lbl: "🃏",
    tip: "VP z kart"
  }, {
    f: "milestones",
    lbl: "⭐",
    tip: "Tytuły"
  }, {
    f: "awards",
    lbl: "🏆",
    tip: "Nagrody"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "stitle",
    style: {
      marginBottom: 0
    }
  }, "Liczenie Punkt\xF3w"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      alignItems: "center"
    }
  }, autoLbl && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".6rem",
      color: "var(--green)"
    }
  }, autoLbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".75rem",
      color: "var(--orange)",
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      padding: ".2rem .5rem",
      cursor: "pointer",
      minWidth: 60,
      textAlign: "center"
    },
    onClick: toggleTimer,
    title: "Kliknij aby start/stop"
  }, Math.floor(timerSec / 60).toString().padStart(2, "0"), ":", (timerSec % 60).toString().padStart(2, "0"), " ", timerRunning ? "▶" : "⏸"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflowX: "auto",
      padding: ".7rem .45rem",
      marginBottom: ".6rem"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "stbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      paddingLeft: ".45rem"
    }
  }, "Gracz"), STD_COLS.map(function (c) {
    return /*#__PURE__*/React.createElement("th", {
      key: c.f,
      title: c.tip
    }, c.lbl);
  }), /*#__PURE__*/React.createElement("th", null, "VP"))), /*#__PURE__*/React.createElement("tbody", null, ps.map(function (p, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setBreakdown(breakdown === i ? null : i);
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        minWidth: 88
      },
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".3rem"
      }
    }, p.color && /*#__PURE__*/React.createElement(PlayerPhoto, {
      src: photoFor(photos, p.name),
      name: p.name,
      color: p.color,
      size: 34
    }), /*#__PURE__*/React.createElement("input", {
      className: "inp",
      style: {
        fontSize: ".78rem",
        padding: ".28rem .38rem"
      },
      placeholder: "Gracz " + (i + 1),
      value: p.name,
      onChange: function onChange(e) {
        return upd(i, "name", e.target.value);
      }
    }))), STD_COLS.map(function (c) {
      return /*#__PURE__*/React.createElement("td", {
        key: c.f,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        className: "inp inp-num",
        value: p[c.f],
        onChange: function onChange(e) {
          return upd(i, c.f, e.target.value);
        }
      }));
    }), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "score-total"
    }, tots[i]), tots[i] === maxT && tots[i] > 0 && ps.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "win-badge"
    }, "WIN")));
  })))), breakdown !== null && ps[breakdown] && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: ps[breakdown].color ? ps[breakdown].color + "55" : "var(--orange2)",
      marginBottom: ".6rem",
      animation: "fadeIn .2s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".6rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl",
    style: {
      marginBottom: 0,
      color: ps[breakdown].color || "var(--orange)"
    }
  }, "Rozk\u0142ad: ", ps[breakdown].name || "Gracz " + (breakdown + 1)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: function onClick() {
      return setBreakdown(null);
    },
    style: {
      width: "auto",
      padding: ".15rem .4rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2715"))), [{
    lbl: "Terraform Rating",
    val: ps[breakdown].tr
  }, {
    lbl: "Zieleniny",
    val: ps[breakdown].greeneries
  }, {
    lbl: "Miasto × Zieleniny",
    val: ps[breakdown].cities
  }, {
    lbl: "VP z kart",
    val: ps[breakdown].cards
  }, {
    lbl: "Tytuły",
    val: ps[breakdown].milestones
  }, {
    lbl: "Nagrody",
    val: ps[breakdown].awards
  }].concat(customCats.map(function (c) {
    return {
      lbl: c.name,
      val: (ps[breakdown].custom || {})[c.id] || 0,
      isCustom: true
    };
  })).map(function (_ref19) {
    var lbl = _ref19.lbl,
      val = _ref19.val,
      isCustom = _ref19.isCustom;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".22rem 0",
        borderBottom: "1px solid #181428"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".82rem",
        color: isCustom ? "var(--orange)" : "var(--muted)"
      }
    }, lbl), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron",
        fontSize: ".8rem",
        color: val > 0 ? "var(--cream)" : "var(--muted)"
      }
    }, val));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: ".5rem",
      marginTop: ".1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".82rem",
      fontWeight: 600
    }
  }, "\u0141\u0104CZNIE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Orbitron",
      fontSize: "1rem",
      color: "var(--orange)",
      fontWeight: 700
    }
  }, tots[breakdown], " VP"))), customCats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#2a1f40",
      marginBottom: ".6rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl",
    style: {
      color: "var(--orange)",
      marginBottom: ".7rem"
    }
  }, "Dodatkowe Punkty"), customCats.map(function (cat) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id,
      style: {
        marginBottom: ".85rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".68rem",
        letterSpacing: ".12em",
        color: "var(--cream)",
        textTransform: "uppercase",
        marginBottom: ".4rem",
        display: "flex",
        alignItems: "center",
        gap: ".4rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--orange)",
        fontSize: ".75rem"
      }
    }, cat.emoji || "◆"), cat.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".35rem",
        flexWrap: "wrap"
      }
    }, ps.map(function (p, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: ".28rem",
          background: "var(--surface)",
          border: "1px solid " + (p.color ? p.color + "33" : "var(--border)"),
          borderRadius: "7px",
          padding: ".3rem .45rem"
        }
      }, p.color && /*#__PURE__*/React.createElement("div", {
        style: {
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: p.color,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".7rem",
          color: "var(--muted)",
          whiteSpace: "nowrap",
          maxWidth: 55,
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, p.name || "G" + (i + 1)), /*#__PURE__*/React.createElement("input", {
        type: "number",
        className: "inp",
        style: {
          width: 46,
          textAlign: "center",
          fontFamily: "Orbitron",
          fontSize: ".78rem",
          padding: ".28rem .15rem"
        },
        value: (p.custom || {})[cat.id] || 0,
        onChange: function onChange(e) {
          return updCustom(i, cat.id, e.target.value);
        }
      }));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      marginBottom: ".75rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: function onClick() {
      return ps.length < 6 && setPs([].concat(ps, [EP()]));
    },
    disabled: ps.length >= 6
  }, /*#__PURE__*/React.createElement("span", null, "+ Gracz")), ps.length > 2 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-del btn-sm",
    onClick: function onClick() {
      return setPs(ps.slice(0, -1));
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2212 Usu\u0144")), customCats.length === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".65rem",
      color: "var(--muted)",
      alignSelf: "center"
    }
  }, "Dodatkowe kryteria \u2192 Ustawienia")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".68rem",
      color: "var(--muted)",
      marginBottom: ".85rem",
      lineHeight: 1.7,
      padding: ".6rem .75rem",
      background: "var(--card)",
      borderRadius: "8px",
      border: "1px solid var(--border)"
    }
  }, "TR \xB7 \uD83C\uDF3F Zieleniny \xB7 \uD83C\uDFD9 Miasta \xB7 \uD83C\uDCCF Karty \xB7 \u2B50 Tytu\u0142y \xB7 \uD83C\uDFC6 Nagrody", customCats.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange)"
    }
  }, "+ ", customCats.length, " dodatkowe")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "Kliknij wiersz gracza, aby zobaczy\u0107 pe\u0142ny rozk\u0142ad punkt\xF3w.")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: doSave,
    disabled: saved
  }, /*#__PURE__*/React.createElement("span", null, saved ? "✓  Zapisano!" : "◈  Zapisz Wyniki")), confPhase === "intro" && /*#__PURE__*/React.createElement(PressConferenceIntro, {
    players: confPlayers,
    onStart: function onStart(fmt) {
      SFX.click();
      setConfFormat(fmt);
      setConfPhase("conference");
    },
    onSkip: function onSkip() {
      SFX.click();
      setConfPhase(null);
    }
  }), confPhase === "conference" && /*#__PURE__*/React.createElement(PressConferenceModal, {
    players: confPlayers,
    format: confFormat,
    onDone: (/*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(answers) {
        var games;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return loadData("tfm:games");
            case 1:
              games = _context2.v;
              if (!(games && games.length)) {
                _context2.n = 2;
                break;
              }
              games[0].pressConference = {
                format: confFormat,
                questions: answers
              };
              _context2.n = 2;
              return saveData("tfm:games", games);
            case 2:
              setConfPhase(null);
              SFX.save();
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref20.apply(this, arguments);
      };
    }())
  }));
}

// ═══════════════════════════════════════════════════════
//  HISTORY VIEW
// ═══════════════════════════════════════════════════════
function HistoryView(_ref21) {
  var games = _ref21.games,
    onDelete = _ref21.onDelete;
  var _useState29 = useState(null),
    expandedId = _useState29[0],
    setExpandedId = _useState29[1];
  if (!games.length) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Historia Wynik\xF3w"), /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "empty-ico"
  }, "\u25C9"), "Brak zapisanych rozgrywek"));
  var STD_COLS = [{
    f: "tr",
    lbl: "🌡 TR",
    tip: "Terraform Rating"
  }, {
    f: "greeneries",
    lbl: "🌿 Ziel.",
    tip: "Zieleniny"
  }, {
    f: "cities",
    lbl: "🏙 Miasta",
    tip: "Miasto × zieleniny"
  }, {
    f: "cards",
    lbl: "🃏 Karty",
    tip: "VP z kart"
  }, {
    f: "milestones",
    lbl: "⭐ Tytuły",
    tip: "Tytuły"
  }, {
    f: "awards",
    lbl: "🏆 Nagrody",
    tip: "Nagrody"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Historia Wynik\xF3w"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".68rem",
      color: "var(--muted)",
      marginBottom: ".7rem"
    }
  }, games.length, " rozgrywek \u0142\u0105cznie"), games.map(function (g) {
    var _g$players$;
    var sorted = [].concat(g.players).sort(function (a, b) {
      return b.total - a.total;
    });
    var d = new Date(g.date);
    var isExpanded = expandedId === g.id;
    var dur = g.duration ? Math.floor(g.duration / 60) + "m " + g.duration % 60 + "s" : null;
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      className: "rec",
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setExpandedId(isExpanded ? null : g.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".5rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".5rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".65rem",
        color: "var(--muted)",
        letterSpacing: ".07em"
      }
    }, d.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }), " \xB7 ", d.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit"
    })), dur && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".6rem",
        color: "var(--muted)",
        background: "var(--surface)",
        borderRadius: 4,
        padding: ".1rem .35rem"
      }
    }, "\u23F1 ", dur)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".4rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".62rem",
        color: "var(--muted)"
      }
    }, isExpanded ? "▲" : "▼"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del btn-sm",
      style: {
        padding: ".18rem .45rem"
      },
      onClick: function onClick(e) {
        e.stopPropagation();
        onDelete(g.id);
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2715")))), sorted.map(function (p, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".22rem 0",
          borderBottom: i < sorted.length - 1 ? "1px solid var(--border)" : "none"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: ".45rem",
          alignItems: "center"
        }
      }, i === 0 && /*#__PURE__*/React.createElement("span", {
        className: "win-badge"
      }, "WIN"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: ".86rem",
          color: i === 0 ? "var(--cream)" : "var(--muted)",
          fontWeight: i === 0 ? 600 : 400
        }
      }, p.name || "Gracz " + (i + 1))), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "Orbitron",
          fontSize: ".78rem",
          color: i === 0 ? "var(--orange)" : "var(--muted)"
        }
      }, p.total, " VP"));
    }), isExpanded && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: ".75rem",
        animation: "fadeIn .25s ease-out"
      },
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: ".65rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".55rem",
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--orange)",
        marginBottom: ".45rem"
      }
    }, "Podzia\u0142 punkt\xF3w"), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: ".75rem"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        padding: ".2rem .4rem .2rem 0",
        color: "var(--muted)",
        fontWeight: 400,
        borderBottom: "1px solid var(--border)",
        fontSize: ".6rem"
      }
    }, "Gracz"), STD_COLS.map(function (col) {
      return /*#__PURE__*/React.createElement("th", {
        key: col.f,
        title: col.tip,
        style: {
          textAlign: "center",
          padding: ".2rem .25rem",
          color: "var(--muted)",
          fontWeight: 400,
          borderBottom: "1px solid var(--border)",
          fontSize: ".6rem",
          whiteSpace: "nowrap"
        }
      }, col.lbl);
    }), ((_g$players$ = g.players[0]) == null ? void 0 : _g$players$.custom) && Object.keys(g.players[0].custom).map(function (k) {
      return /*#__PURE__*/React.createElement("th", {
        key: k,
        style: {
          textAlign: "center",
          padding: ".2rem .25rem",
          color: "var(--muted)",
          fontWeight: 400,
          borderBottom: "1px solid var(--border)",
          fontSize: ".6rem"
        }
      }, k);
    }), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        padding: ".2rem 0 .2rem .25rem",
        color: "var(--orange)",
        fontWeight: 600,
        borderBottom: "1px solid var(--border)",
        fontSize: ".6rem"
      }
    }, "VP"))), /*#__PURE__*/React.createElement("tbody", null, sorted.map(function (p, i) {
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        style: {
          background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,.03)"
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: ".3rem .4rem .3rem 0",
          fontWeight: i === 0 ? 700 : 400,
          color: i === 0 ? "var(--cream)" : "var(--muted)",
          whiteSpace: "nowrap"
        }
      }, i === 0 && "🥇 ", p.name), STD_COLS.map(function (col) {
        return /*#__PURE__*/React.createElement("td", {
          key: col.f,
          style: {
            textAlign: "center",
            padding: ".3rem .25rem",
            color: (p[col.f] || 0) > 0 ? "var(--cream)" : "var(--border)",
            fontFamily: "Orbitron",
            fontSize: ".72rem"
          }
        }, p[col.f] || 0);
      }), p.custom && Object.values(p.custom).map(function (v, ci) {
        return /*#__PURE__*/React.createElement("td", {
          key: ci,
          style: {
            textAlign: "center",
            padding: ".3rem .25rem",
            color: v > 0 ? "var(--cream)" : "var(--border)",
            fontFamily: "Orbitron",
            fontSize: ".72rem"
          }
        }, v || 0);
      }), /*#__PURE__*/React.createElement("td", {
        style: {
          textAlign: "right",
          padding: ".3rem 0 .3rem .25rem",
          fontFamily: "Orbitron",
          fontSize: ".8rem",
          fontWeight: 700,
          color: i === 0 ? "var(--orange)" : "var(--muted)"
        }
      }, p.total));
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: ".65rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".55rem",
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--orange)",
        marginBottom: ".4rem"
      }
    }, "Udzia\u0142 kategorii"), STD_COLS.map(function (col) {
      var vals = sorted.map(function (p) {
        return p[col.f] || 0;
      });
      var max = Math.max.apply(Math, vals.concat([1]));
      return /*#__PURE__*/React.createElement("div", {
        key: col.f,
        style: {
          marginBottom: ".3rem"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: ".62rem",
          color: "var(--muted)",
          marginBottom: ".1rem"
        }
      }, /*#__PURE__*/React.createElement("span", null, col.lbl), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          gap: ".5rem"
        }
      }, sorted.map(function (p, i) {
        return /*#__PURE__*/React.createElement("span", {
          key: i,
          style: {
            color: i === 0 ? "var(--orange)" : "var(--muted)"
          }
        }, p.name.split(" ")[0], ": ", /*#__PURE__*/React.createElement("strong", {
          style: {
            color: "var(--cream)"
          }
        }, p[col.f] || 0));
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 2,
          height: 6
        }
      }, sorted.map(function (p, i) {
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            height: "100%",
            borderRadius: 3,
            flex: (p[col.f] || 0) + 0.1,
            background: i === 0 ? "var(--orange)" : "var(--border)",
            opacity: .85
          }
        });
      })));
    })), g.draft && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: ".5rem .6rem",
        background: "var(--surface)",
        borderRadius: 7,
        fontSize: ".7rem",
        color: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: ".3rem .8rem",
        marginBottom: ".3rem"
      }
    }, g.draft.board && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDFA ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, g.draft.board)), g.draft.firstPlayer && /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB2 Pierwszy: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--orange)"
      }
    }, g.draft.firstPlayer))), g.draft.playerDraws && g.draft.playerDraws.map(function (pd, pi) {
      var _pd$corporations;
      var pl = sorted[pi] || g.players[pi];
      var selectedCorp = pd.selectedCorp || ((_pd$corporations = pd.corporations) == null ? void 0 : _pd$corporations[0]);
      var selPreludes = pd.selectedPreludes || pd.preludes || [];
      return /*#__PURE__*/React.createElement("div", {
        key: pi,
        style: {
          marginBottom: ".25rem"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--cream)",
          fontWeight: 600
        }
      }, (pl == null ? void 0 : pl.name) || "G" + (pi + 1), ": "), selectedCorp && /*#__PURE__*/React.createElement("span", {
        className: "chip hot",
        style: {
          fontSize: ".62rem",
          padding: ".12rem .35rem",
          display: "inline-block",
          marginRight: ".25rem"
        }
      }, selectedCorp), selPreludes.slice(0, 3).map(function (p) {
        return /*#__PURE__*/React.createElement("span", {
          key: p,
          className: "chip",
          style: {
            fontSize: ".62rem",
            padding: ".12rem .35rem",
            display: "inline-block",
            marginRight: ".2rem"
          }
        }, p);
      }));
    }))));
  }));
}

// ═══════════════════════════════════════════════════════
//  MONTHLY SUMMARY
// ═══════════════════════════════════════════════════════
function MonthView(_ref22) {
  var photos = usePhotos();
  var _pl$0$best, _pl$;
  var games = _ref22.games;
  var now = new Date();
  var _useState30 = useState(now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0")),
    sel = _useState30[0],
    setSel = _useState30[1];
  var _sel$split$map = sel.split("-").map(Number),
    sY = _sel$split$map[0],
    sM = _sel$split$map[1];
  var filtered = games.filter(function (g) {
    var d = new Date(g.date);
    return d.getFullYear() === sY && d.getMonth() + 1 === sM;
  });
  var pm = {};
  filtered.forEach(function (g) {
    var sorted = [].concat(g.players).sort(function (a, b) {
      return b.total - a.total;
    });
    g.players.forEach(function (p) {
      var n = p.name || "Gracz";
      if (!pm[n]) pm[n] = {
        wins: 0,
        games: 0,
        total: 0,
        best: 0
      };
      pm[n].games++;
      pm[n].total += p.total;
      if (p.total > pm[n].best) pm[n].best = p.total;
      if (sorted[0] === p) pm[n].wins++;
    });
  });
  var pl = Object.entries(pm).map(function (_ref23) {
    var name = _ref23[0],
      s = _ref23[1];
    return _extends({
      name: name
    }, s, {
      avg: Math.round(s.total / s.games),
      wr: Math.round(s.wins / s.games * 100)
    });
  }).sort(function (a, b) {
    return b.wins - a.wins || b.avg - a.avg;
  });
  var mSet = [].concat(new Set(games.map(function (g) {
    var d = new Date(g.date);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
  }))).sort().reverse();
  if (!mSet.includes(sel)) mSet.unshift(sel);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Podsumowanie Miesi\u0105ca"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".85rem"
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "inp",
    value: sel,
    onChange: function onChange(e) {
      return setSel(e.target.value);
    }
  }, mSet.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m,
      value: m
    }, new Date(m + "-01").toLocaleDateString("pl-PL", {
      month: "long",
      year: "numeric"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "stat-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, filtered.length), /*#__PURE__*/React.createElement("div", {
    className: "stat-lbl"
  }, "Rozgrywki")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, pl.length), /*#__PURE__*/React.createElement("div", {
    className: "stat-lbl"
  }, "Gracze")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, (_pl$0$best = (_pl$ = pl[0]) == null ? void 0 : _pl$.best) != null ? _pl$0$best : "—"), /*#__PURE__*/React.createElement("div", {
    className: "stat-lbl"
  }, "Rekord"))), pl.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "2rem 0"
    }
  }, "Brak rozgrywek w wybranym miesi\u0105cu") : pl.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "rank-card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".38rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".55rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron",
        fontSize: ".82rem",
        color: i === 0 ? "var(--orange)" : "var(--muted)",
        minWidth: "1.1rem"
      }
    }, i + 1, "."), /*#__PURE__*/React.createElement(PlayerPhoto, {
      src: photoFor(photos, p.name),
      name: p.name,
      color: p.color || "var(--orange)",
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".95rem",
        fontWeight: 600
      }
    }, p.name), i === 0 && /*#__PURE__*/React.createElement("span", {
      className: "win-badge",
      style: {
        background: "var(--orange)",
        color: "var(--bg)"
      }
    }, "LIDER")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron",
        fontSize: ".82rem",
        color: "var(--orange)"
      }
    }, p.wr, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "1.1rem",
        fontSize: ".7rem",
        color: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Gry: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.games)), /*#__PURE__*/React.createElement("span", null, "Wygrane: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.wins)), /*#__PURE__*/React.createElement("span", null, "\u015Ar: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avg)), /*#__PURE__*/React.createElement("span", null, "Max: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--orange)"
      }
    }, p.best))), /*#__PURE__*/React.createElement("div", {
      className: "prog-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "prog-fill",
      style: {
        width: p.wr + "%"
      }
    })));
  }));
}

// ═══ SVG CHARTS ═══
var PC = ["#f07030", "#3a9e6a", "#5a8fd4", "#d4a53a", "#b060d0", "#d45a5a", "#40c0d0", "#d45090"];
var DAYS = ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
function BarSVG(_ref24) {
  var data = _ref24.data,
    keys = _ref24.keys,
    colors = _ref24.colors,
    showPct = _ref24.showPct;
  if (!data.length || !keys.length) return null;
  var W = 340,
    H = 150,
    PAD = 38;
  var maxVal = Math.max.apply(Math, data.flatMap(function (d) {
    return keys.map(function (k) {
      return d[k] || 0;
    });
  }).concat([1]));
  var bw = (W - PAD) / data.length / keys.length - 3;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + W + " " + H,
    style: {
      width: "100%",
      height: H
    }
  }, [0, .5, 1].map(function (f) {
    return /*#__PURE__*/React.createElement("line", {
      key: f,
      x1: PAD,
      x2: W,
      y1: H - 22 - f * (H - 34),
      y2: H - 22 - f * (H - 34),
      stroke: "var(--border)",
      strokeWidth: 1,
      strokeDasharray: "3 4"
    });
  }), data.map(function (d, di) {
    var gx = PAD + di * ((W - PAD) / data.length);
    return /*#__PURE__*/React.createElement("g", {
      key: di
    }, keys.map(function (k, ki) {
      var val = d[k] || 0;
      var bh = val / maxVal * (H - 34);
      var bx = gx + ki * (bw + 2) + 2;
      return /*#__PURE__*/React.createElement("g", {
        key: k
      }, /*#__PURE__*/React.createElement("rect", {
        x: bx,
        y: H - 22 - bh,
        width: bw,
        height: bh,
        fill: colors[ki % colors.length],
        rx: 2,
        opacity: .85
      }), val > 0 && bh > 14 && /*#__PURE__*/React.createElement("text", {
        x: bx + bw / 2,
        y: H - 22 - bh + 10,
        fill: "#fff",
        fontSize: 7,
        textAnchor: "middle",
        opacity: .8
      }, showPct ? val + "%" : val));
    }), /*#__PURE__*/React.createElement("text", {
      x: gx + keys.length * (bw + 2) / 2,
      y: H - 6,
      fill: "var(--muted)",
      fontSize: 9,
      textAnchor: "middle"
    }, String(d.name).slice(0, 9)));
  }), " ", /*#__PURE__*/React.createElement("text", {
    x: PAD - 3,
    y: H - 20,
    fill: "var(--muted)",
    fontSize: 7,
    textAnchor: "end"
  }, "0"), /*#__PURE__*/React.createElement("text", {
    x: PAD - 3,
    y: 12,
    fill: "var(--muted)",
    fontSize: 7,
    textAnchor: "end"
  }, maxVal, showPct ? "%" : ""));
}
function LineSVG(_ref25) {
  var data = _ref25.data,
    playerNames = _ref25.playerNames,
    colors = _ref25.colors;
  if (!data.length) return null;
  var W = 340,
    H = 130,
    PL = 40,
    PB = 18;
  var allVals = data.flatMap(function (d) {
    return playerNames.map(function (n) {
      return d[n] || 0;
    });
  }).filter(Boolean);
  var maxV = Math.max.apply(Math, allVals.concat([1]));
  var minV = Math.min.apply(Math, allVals.concat([0]));
  var range = maxV - minV || 1;
  var xPos = function xPos(i) {
    return PL + i * ((W - PL) / Math.max(data.length - 1, 1));
  };
  var yPos = function yPos(v) {
    return H - PB - (v - minV) / range * (H - PB - 10);
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + W + " " + H,
    style: {
      width: "100%",
      height: H
    }
  }, [0, .5, 1].map(function (f) {
    return /*#__PURE__*/React.createElement("line", {
      key: f,
      x1: PL,
      x2: W,
      y1: yPos(minV + range * f),
      y2: yPos(minV + range * f),
      stroke: "var(--border)",
      strokeWidth: 1,
      strokeDasharray: "3 4"
    });
  }), playerNames.map(function (name, ni) {
    var pts = data.map(function (d, di) {
      return [xPos(di), yPos(d[name] || minV)];
    });
    var dP = pts.map(function (p, i) {
      return "" + (i === 0 ? "M" : "L") + p[0] + "," + p[1];
    }).join(" ");
    return /*#__PURE__*/React.createElement("g", {
      key: name
    }, /*#__PURE__*/React.createElement("path", {
      d: dP,
      fill: "none",
      stroke: colors[ni % colors.length],
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), pts.map(function (p, i) {
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: p[0],
        cy: p[1],
        r: 3,
        fill: colors[ni % colors.length]
      });
    }));
  }), " ", data.map(function (d, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: xPos(i),
      y: H - 2,
      fill: "var(--muted)",
      fontSize: 8,
      textAnchor: "middle"
    }, i + 1);
  }));
}
function PctBar(_ref26) {
  var label = _ref26.label,
    pct = _ref26.pct,
    color = _ref26.color,
    sub = _ref26.sub;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".45rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: ".2rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".82rem"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      alignItems: "center"
    }
  }, sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".65rem",
      color: "var(--muted)"
    }
  }, sub), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".75rem",
      // Liczba w kolorze tekstu, nie serii — kolor serii niesie pasek pod spodem.
      // Kolory pasków dobiera się do wypełnień, więc jako tekst bywają nieczytelne.
      color: "var(--cream)",
      fontWeight: 700
    }
  }, pct, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 3,
      background: "var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: 3,
      width: pct + "%",
      background: color || "var(--orange)",
      transition: "width .4s ease"
    }
  })));
}

// ════════ STATS VIEW ════════
function StatsView(_ref27) {
  var photos = usePhotos();
  var games = _ref27.games;
  var _useState31 = useState("players"),
    tab = _useState31[0],
    setTab = _useState31[1];

  // ── Player aggregates ──
  var pm = {};
  games.forEach(function (g) {
    var sorted = [].concat(g.players).sort(function (a, b) {
      return b.total - a.total;
    });
    var winner = sorted[0];
    var totalScore = g.players.reduce(function (s, p) {
      return s + p.total;
    }, 0);
    g.players.forEach(function (p, pi) {
      var _g$draft, _g$draft2, _pd$corporations2;
      var n = p.name || "Gracz";
      if (!pm[n]) pm[n] = {
        wins: 0,
        games: 0,
        scores: [],
        best: 0,
        worst: 999,
        tr: [],
        green: [],
        city: [],
        cards: [],
        miles: [],
        awards: [],
        firstGames: 0,
        firstWins: 0,
        corp: {}
      };
      pm[n].games++;
      pm[n].scores.push(p.total);
      if (p.total > pm[n].best) pm[n].best = p.total;
      if (p.total < pm[n].worst) pm[n].worst = p.total;
      if (sorted[0] === p) pm[n].wins++;
      pm[n].tr.push(p.tr || 0);
      pm[n].green.push(p.greeneries || 0);
      pm[n].city.push(p.cities || 0);
      pm[n].cards.push(p.cards || 0);
      pm[n].miles.push(p.milestones || 0);
      pm[n].awards.push(p.awards || 0);
      // Share of total points
      if (totalScore > 0) pm[n].shareSum = (pm[n].shareSum || 0) + p.total / totalScore * 100;
      // First player
      if (((_g$draft = g.draft) == null ? void 0 : _g$draft.firstPlayer) === n) {
        pm[n].firstGames++;
        if (sorted[0] === p) pm[n].firstWins++;
      }
      // Corp stats
      var pd = (_g$draft2 = g.draft) == null || (_g$draft2 = _g$draft2.playerDraws) == null ? void 0 : _g$draft2[pi];
      var corp = (pd == null ? void 0 : pd.selectedCorp) || (pd == null || (_pd$corporations2 = pd.corporations) == null ? void 0 : _pd$corporations2[0]);
      if (corp) {
        pm[n].corp[corp] = (pm[n].corp[corp] || 0) + 1;
      }
    });
  });
  var avg = function avg(arr) {
    return arr.length ? Math.round(arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length) : 0;
  };
  var pct = function pct(a, b) {
    return b > 0 ? Math.round(a / b * 100) : 0;
  };
  var pl = Object.entries(pm).map(function (_ref28) {
    var name = _ref28[0],
      s = _ref28[1];
    return {
      name: name,
      wins: s.wins,
      games: s.games,
      avg: avg(s.scores),
      best: s.best,
      worst: s.worst,
      wr: pct(s.wins, s.games),
      avgTR: avg(s.tr),
      avgGreen: avg(s.green),
      avgCity: avg(s.city),
      avgCards: avg(s.cards),
      avgMiles: avg(s.miles),
      avgAwards: avg(s.awards),
      shareAvg: s.games ? Math.round((s.shareSum || 0) / s.games) : 0,
      fpWR: s.firstGames > 0 ? pct(s.firstWins, s.firstGames) : null,
      fpGames: s.firstGames,
      topCorp: Object.entries(s.corp).sort(function (a, b) {
        return b[1] - a[1];
      })[0]
    };
  }).sort(function (a, b) {
    return b.wr - a.wr || b.avg - a.avg;
  });

  // ── Draft aggregates ──
  var gwd = games.filter(function (g) {
    return g.draft;
  });
  var boardW = {},
    corpW = {},
    preludeW = {},
    milesUsed = {},
    awardsUsed = {};
  var boardGames = {},
    corpGames = {};
  var fpWins = {
    total: 0,
    games: 0
  };
  var dayMap = {};
  gwd.forEach(function (g) {
    var sorted = [].concat(g.players).sort(function (a, b) {
      return b.total - a.total;
    });
    var winner = sorted[0];
    var d = g.draft;
    // Board stats
    if (d.board) {
      boardGames[d.board] = (boardGames[d.board] || 0) + 1;
      if (!boardW[d.board]) boardW[d.board] = {
        games: 0,
        highScore: 0,
        scores: []
      };
      boardW[d.board].games++;
      boardW[d.board].scores.push((winner == null ? void 0 : winner.total) || 0);
      if (((winner == null ? void 0 : winner.total) || 0) > boardW[d.board].highScore) boardW[d.board].highScore = (winner == null ? void 0 : winner.total) || 0;
    }
    // First player effect
    if (d.firstPlayer) {
      fpWins.games++;
      if ((winner == null ? void 0 : winner.name) === d.firstPlayer) fpWins.wins = (fpWins.wins || 0) + 1;
    }
    // Corp win rates
    (d.playerDraws || []).forEach(function (pd, pi) {
      var _pd$corporations3, _pd$selectedPreludes;
      var corp = pd.selectedCorp || ((_pd$corporations3 = pd.corporations) == null ? void 0 : _pd$corporations3[0]);
      var won = sorted[0] === g.players[pi];
      if (corp) {
        if (!corpW[corp]) corpW[corp] = {
          games: 0,
          wins: 0
        };
        corpW[corp].games++;
        if (won) corpW[corp].wins++;
      }
      // Preludes in winning games
      var preludes = (_pd$selectedPreludes = pd.selectedPreludes) != null && _pd$selectedPreludes.length ? pd.selectedPreludes : pd.preludes || [];
      if (won) preludes.forEach(function (p) {
        preludeW[p] = (preludeW[p] || 0) + 1;
      });
    });
    // Milestones/awards usage
    (d.milestones || []).forEach(function (m) {
      milesUsed[m] = (milesUsed[m] || 0) + 1;
    });
    (d.awards || []).forEach(function (a) {
      awardsUsed[a] = (awardsUsed[a] || 0) + 1;
    });
    // Day
    var day = DAYS[new Date(g.date).getDay()];
    if (!dayMap[day]) dayMap[day] = {
      games: 0,
      avgWinner: 0,
      total: 0
    };
    dayMap[day].games++;
    dayMap[day].total += (winner == null ? void 0 : winner.total) || 0;
  });
  var boardStats = Object.entries(boardGames).map(function (_ref29) {
    var _boardW$b;
    var b = _ref29[0],
      n = _ref29[1];
    return {
      name: b,
      games: n,
      pct: pct(n, gwd.length),
      avgWinner: boardW[b] ? Math.round(boardW[b].scores.reduce(function (a, b) {
        return a + b;
      }, 0) / boardW[b].scores.length) : 0,
      high: ((_boardW$b = boardW[b]) == null ? void 0 : _boardW$b.highScore) || 0
    };
  }).sort(function (a, b) {
    return b.games - a.games;
  });
  var corpStats = Object.entries(corpW).filter(function (_ref30) {
    var s = _ref30[1];
    return s.games > 0;
  }).map(function (_ref31) {
    var corp = _ref31[0],
      s = _ref31[1];
    return {
      corp: corp,
      wr: pct(s.wins, s.games),
      games: s.games,
      wins: s.wins
    };
  }).sort(function (a, b) {
    return b.wins - a.wins || b.wr - a.wr;
  }).slice(0, 12);
  var topPreludes = Object.entries(preludeW).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 8);
  var topMiles = Object.entries(milesUsed).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 6);
  var topAwards = Object.entries(awardsUsed).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 6);
  var fpWinPct = fpWins.games > 0 ? pct(fpWins.wins || 0, fpWins.games) : null;
  var dayStats = Object.entries(dayMap).map(function (_ref32) {
    var day = _ref32[0],
      d = _ref32[1];
    return {
      name: day,
      games: d.games,
      avgWin: Math.round(d.total / d.games)
    };
  });
  var glBest = games.length ? Math.max.apply(Math, games.flatMap(function (g) {
    return g.players.map(function (p) {
      return p.total;
    });
  })) : 0;
  var totalGames = games.length;
  if (!totalGames) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Statystyki"), /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "empty-ico"
  }, "\u25D1"), "Zagraj kilka partii!"));
  var lineData = [].concat(games).slice(0, 10).reverse().map(function (g, i) {
    var o = {
      g: i + 1
    };
    g.players.forEach(function (p) {
      o[p.name || "Gracz"] = p.total;
    });
    return o;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Statystyki"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".35rem",
      marginBottom: ".75rem",
      flexWrap: "wrap"
    }
  }, [{
    lbl: "Rozgrywek",
    val: totalGames
  }, {
    lbl: "Graczy",
    val: pl.length
  }, {
    lbl: "Rekord VP",
    val: glBest
  }, {
    lbl: "Śr. czas",
    val: games.filter(function (g) {
      return g.duration;
    }).length ? Math.round(games.filter(function (g) {
      return g.duration;
    }).reduce(function (s, g) {
      return s + g.duration;
    }, 0) / games.filter(function (g) {
      return g.duration;
    }).length / 60) + "m" : "—"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.lbl,
      style: {
        flex: 1,
        minWidth: 70,
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: ".5rem .6rem",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "var(--orange)"
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".55rem",
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "var(--muted)"
      }
    }, s.lbl));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".3rem",
      marginBottom: ".75rem"
    }
  }, [{
    id: "players",
    lbl: "👤 Gracze"
  }, {
    id: "draft",
    lbl: "🎲 Karty"
  }, {
    id: "trends",
    lbl: "📈 Trendy"
  }, {
    id: "periods",
    lbl: "🏆 Okresy"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "btn btn-sm " + (tab === t.id ? "" : "btn-ghost"),
      onClick: function onClick() {
        return setTab(t.id);
      },
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", null, t.lbl));
  })), tab === "players" && /*#__PURE__*/React.createElement(React.Fragment, null, lineData.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Trend VP (ostatnie ", lineData.length, " gier)"), /*#__PURE__*/React.createElement(LineSVG, {
    data: lineData,
    playerNames: pl.map(function (p) {
      return p.name;
    }),
    colors: PC
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".3rem .75rem",
      marginTop: ".35rem"
    }
  }, pl.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".3rem",
        fontSize: ".62rem",
        color: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 2,
        borderRadius: 1,
        background: PC[i % PC.length]
      }
    }), p.name);
  }))), pl.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "rank-card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".4rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".5rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".82rem",
        color: i === 0 ? "var(--orange)" : "var(--muted)",
        minWidth: "1.1rem"
      }
    }, i + 1, "."), /*#__PURE__*/React.createElement(PlayerPhoto, {
      src: photoFor(photos, p.name),
      name: p.name,
      color: p.color || "var(--orange)",
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".95rem",
        fontWeight: 700
      }
    }, p.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".5rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".82rem",
        color: "var(--orange)",
        fontWeight: 700
      }
    }, p.wr, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".65rem",
        color: "var(--muted)"
      }
    }, "WR"))), /*#__PURE__*/React.createElement(PctBar, {
      label: "Zwyci\u0119stwa: " + p.wins + "/" + p.games,
      pct: p.wr,
      color: "var(--orange)",
      sub: p.avg + " VP \u015Br"
    }), /*#__PURE__*/React.createElement(PctBar, {
      label: "Udzia\u0142 w puli VP",
      pct: p.shareAvg,
      color: "#5a8fd4",
      sub: "max " + p.best + " \xB7 min " + p.worst
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: ".3rem .8rem",
        fontSize: ".7rem",
        color: "var(--muted)",
        marginTop: ".3rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF21 TR \u015Br: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgTR)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF3F Ziel: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgGreen)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFD9 Miasta: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgCity)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDCCF Karty VP: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgCards)), /*#__PURE__*/React.createElement("span", null, "\u2B50 Tytu\u0142y: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgMiles)), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFC6 Nagrody: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.avgAwards)), p.fpWR !== null && /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB2 1.gracz WR: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: p.fpWR >= 50 ? "var(--green)" : "#d45a5a"
      }
    }, p.fpWR, "%"), " (", p.fpGames, "\xD7)"), p.topCorp && /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE2 Ulub. korp: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, p.topCorp[0].split(" ").slice(-1)[0]))), /*#__PURE__*/React.createElement("div", {
      className: "prog-bar",
      style: {
        marginTop: ".35rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "prog-fill",
      style: {
        width: p.wr + "%"
      }
    })));
  })), tab === "draft" && /*#__PURE__*/React.createElement(React.Fragment, null, gwd.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "2rem 0"
    }
  }, "Brak danych z losowa\u0144.", /*#__PURE__*/React.createElement("br", null), "Zagraj parti\u0119 przez zak\u0142adk\u0119 GRA!"), boardStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Plansze (", gwd.length, " rozgrywek)"), boardStats.map(function (b) {
    return /*#__PURE__*/React.createElement(PctBar, {
      key: b.name,
      label: b.name,
      pct: b.pct,
      sub: b.games + "\xD7 \xB7 \u015Br. zwyci\u0119zca " + b.avgWinner + " VP \xB7 max " + b.high
    });
  })), fpWinPct !== null && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Efekt pierwszego gracza"), /*#__PURE__*/React.createElement(PctBar, {
    label: "Wygrywa 1. gracz",
    pct: fpWinPct,
    color: fpWinPct >= 50 ? "var(--green)" : "#d45a5a",
    sub: fpWins.games + " rozgrywek z danymi"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".7rem",
      color: "var(--muted)",
      marginTop: ".3rem"
    }
  }, fpWinPct >= 50 ? "▲ Bycie pierwszym graczem daje przewagę statystyczną" : "▼ Bycie pierwszym graczem nie daje przewagi w tej grupie")), corpStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Korporacje wg zwyci\u0119stw"), corpStats.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.corp,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".32rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".8rem",
        flex: 1,
        marginRight: ".5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, s.corp), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".4rem",
        alignItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 5,
        borderRadius: 3,
        background: "var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        borderRadius: 3,
        width: s.wr + "%",
        background: s.wins > 0 ? "var(--orange)" : "var(--border)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".65rem",
        color: "var(--orange)",
        minWidth: 28
      }
    }, s.wins, "W"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".6rem",
        color: "var(--muted)",
        minWidth: 22
      }
    }, s.games, "g")));
  })), topPreludes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Preludia zwyci\u0119zc\xF3w"), /*#__PURE__*/React.createElement("div", {
    className: "chips",
    style: {
      gap: ".3rem"
    }
  }, topPreludes.map(function (_ref33) {
    var p = _ref33[0],
      n = _ref33[1];
    return /*#__PURE__*/React.createElement("span", {
      key: p,
      className: "chip hot",
      style: {
        fontSize: ".68rem"
      }
    }, p, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".52rem"
      }
    }, "\xD7", n));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".68rem",
      color: "var(--muted)",
      marginTop: ".4rem"
    }
  }, "Preludium wybrane przez gracza kt\xF3ry wygra\u0142")), topMiles.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Najcz\u0119stsze tytu\u0142y (losowane)"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, topMiles.map(function (_ref34) {
    var m = _ref34[0],
      n = _ref34[1];
    return /*#__PURE__*/React.createElement("span", {
      key: m,
      className: "chip",
      style: {
        fontSize: ".68rem"
      }
    }, m, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--orange)",
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".52rem"
      }
    }, "\xD7", n));
  }))), topAwards.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Najcz\u0119stsze nagrody (losowane)"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, topAwards.map(function (_ref35) {
    var a = _ref35[0],
      n = _ref35[1];
    return /*#__PURE__*/React.createElement("span", {
      key: a,
      className: "chip",
      style: {
        fontSize: ".68rem"
      }
    }, a, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--orange)",
        fontFamily: "Orbitron,sans-serif",
        fontSize: ".52rem"
      }
    }, "\xD7", n));
  })))), tab === "trends" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "\u015Aredni podzia\u0142 punkt\xF3w (wszystkie gry)"), [{
    lbl: "Terraform Rating (TR)",
    key: "tr",
    color: "#f07030"
  }, {
    lbl: "Zieleniny",
    key: "greeneries",
    color: "#3a9e6a"
  }, {
    lbl: "Miasta × sąsiednie zieleniny",
    key: "cities",
    color: "#5a8fd4"
  }, {
    lbl: "VP z kart",
    key: "cards",
    color: "#d4a53a"
  }, {
    lbl: "Tytuły",
    key: "milestones",
    color: "#b060d0"
  }, {
    lbl: "Nagrody",
    key: "awards",
    color: "#d45a5a"
  }].map(function (_ref36) {
    var lbl = _ref36.lbl,
      key = _ref36.key,
      color = _ref36.color;
    var allVals = games.flatMap(function (g) {
      return g.players.map(function (p) {
        return p[key] || 0;
      });
    });
    var avgVal = allVals.length ? Math.round(allVals.reduce(function (a, b) {
      return a + b;
    }, 0) / allVals.length) : 0;
    var avgTotal = games.flatMap(function (g) {
      return g.players.map(function (p) {
        return p.total || 1;
      });
    }).reduce(function (a, b) {
      return a + b;
    }, 0) / Math.max(games.flatMap(function (g) {
      return g.players;
    }).length, 1);
    var sharePct = Math.round(avgVal / Math.max(avgTotal, 1) * 100);
    return /*#__PURE__*/React.createElement(PctBar, {
      key: key,
      label: lbl,
      pct: sharePct,
      color: color,
      sub: "\u015Br. " + avgVal + " VP / parti\u0119"
    });
  })), dayStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Aktywno\u015B\u0107 wg dnia tygodnia"), /*#__PURE__*/React.createElement(BarSVG, {
    data: dayStats,
    keys: ["games"],
    colors: ["var(--orange)"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".3rem",
      marginTop: ".35rem"
    }
  }, dayStats.sort(function (a, b) {
    return b.games - a.games;
  }).map(function (d) {
    return /*#__PURE__*/React.createElement("span", {
      key: d.name,
      style: {
        fontSize: ".7rem",
        color: "var(--muted)"
      }
    }, d.name, ": ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, d.games), "\xD7 (\u015Br. ", d.avgWin, " VP zwyc.)");
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Strategia: Miasta vs Zieleniny"), pl.map(function (p) {
    var pGames = games.filter(function (g) {
      return g.players.some(function (pp) {
        return pp.name === p.name;
      });
    });
    var tC = pGames.reduce(function (s, g) {
      var _g$players$find;
      return s + (((_g$players$find = g.players.find(function (pp) {
        return pp.name === p.name;
      })) == null ? void 0 : _g$players$find.cities) || 0);
    }, 0);
    var tG = pGames.reduce(function (s, g) {
      var _g$players$find2;
      return s + (((_g$players$find2 = g.players.find(function (pp) {
        return pp.name === p.name;
      })) == null ? void 0 : _g$players$find2.greeneries) || 0);
    }, 0);
    var cityPct = tC + tG > 0 ? Math.round(tC / (tC + tG) * 100) : 50;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        marginBottom: ".55rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: ".78rem",
        marginBottom: ".2rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted)",
        fontSize: ".68rem"
      }
    }, "\uD83C\uDFD9 ", Math.round(tC / Math.max(pGames.length, 1) * 10) / 10, " vs \uD83C\uDF3F ", Math.round(tG / Math.max(pGames.length, 1) * 10) / 10, " \u015Br.")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 4,
        background: "var(--border)",
        display: "flex",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: cityPct + "%",
        background: "#5a8fd4",
        transition: "width .4s"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: "#3a9e6a"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: ".58rem",
        color: "var(--muted)",
        marginTop: ".15rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFD9 Miasta ", cityPct, "%"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF3F Zieleniny ", 100 - cityPct, "%")));
  })), games.length > 2 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Wyniki wg liczby graczy"), [].concat(new Set(games.map(function (g) {
    return g.players.length;
  }))).sort().map(function (n) {
    var gs = games.filter(function (g) {
      return g.players.length === n;
    });
    var avgWin = Math.round(gs.flatMap(function (g) {
      var _sort$;
      return ((_sort$ = [].concat(g.players).sort(function (a, b) {
        return b.total - a.total;
      })[0]) == null ? void 0 : _sort$.total) || 0;
    }).reduce(function (a, b) {
      return a + b;
    }, 0) / gs.length);
    var avgAll = Math.round(gs.flatMap(function (g) {
      return g.players.map(function (p) {
        return p.total;
      });
    }).reduce(function (a, b) {
      return a + b;
    }, 0) / (gs.length * n));
    var pct2 = Math.round(gs.length / games.length * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        marginBottom: ".45rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: ".78rem",
        marginBottom: ".18rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, n, " graczy"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".68rem",
        color: "var(--muted)"
      }
    }, gs.length, " gier (", pct2, "%) \xB7 \u015Br. wynik: ", avgAll, " VP \xB7 max win: ", avgWin, " VP")), /*#__PURE__*/React.createElement(PctBar, {
      label: "",
      pct: pct2,
      color: "var(--orange)"
    }));
  }))));
}
// ═══════════════════════════════════════════════════════
//  AI REPORT
// ═══════════════════════════════════════════════════════

// ════════ AI REPORT VIEW ════════
function AIView(_ref37) {
  var games = _ref37.games;
  var _useState32 = useState(false),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var _useState33 = useState(""),
    report = _useState33[0],
    setReport = _useState33[1];
  var _useState34 = useState(""),
    error = _useState34[0],
    setError = _useState34[1];
  var _useState35 = useState(function () {
      try {
        return localStorage.getItem("tfm:apiKey") || "";
      } catch (_unused14) {
        return "";
      }
    }),
    apiKey = _useState35[0],
    setApiKey = _useState35[1];
  var _useState36 = useState(false),
    showKey = _useState36[0],
    setShowKey = _useState36[1];
  var saveKey = function saveKey(k) {
    setApiKey(k);
    try {
      localStorage.setItem("tfm:apiKey", k);
    } catch (_unused15) {}
  };
  var generate = /*#__PURE__*/function () {
    var _ref38 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var summary, draftData, confData, res, t, data, text, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (games.length) {
              _context3.n = 1;
              break;
            }
            setError("Brak rozgrywek w historii.");
            return _context3.a(2);
          case 1:
            if (apiKey.trim()) {
              _context3.n = 2;
              break;
            }
            setError("Wprowadź klucz API Anthropic poniżej.");
            setShowKey(true);
            return _context3.a(2);
          case 2:
            setLoading(true);
            setError("");
            setReport("");
            summary = games.slice(0, 20).map(function (g) {
              var _g$draft3, _g$draft4;
              var s = [].concat(g.players).sort(function (a, b) {
                return b.total - a.total;
              });
              return new Date(g.date).toLocaleDateString("pl-PL") + " [" + g.players.length + "gr] | " + s.map(function (p) {
                return p.name + ":" + p.total + "VP";
              }).join(", ") + " | plansza:" + (((_g$draft3 = g.draft) == null ? void 0 : _g$draft3.board) || "?") + " 1.gracz:" + (((_g$draft4 = g.draft) == null ? void 0 : _g$draft4.firstPlayer) || "?");
            }).join("\n");
            draftData = games.slice(0, 15).filter(function (g) {
              return g.draft;
            }).map(function (g) {
              var w = [].concat(g.players).sort(function (a, b) {
                return b.total - a.total;
              })[0];
              return new Date(g.date).toLocaleDateString("pl-PL") + ": plansza=" + (g.draft.board || "?") + ", 1.gracz=" + (g.draft.firstPlayer || "?") + ", wygra\u0142=" + (w == null ? void 0 : w.name);
            }).join("\n");
            confData = games.slice(0, 10).flatMap(function (g) {
              if (!g.pressConference) return [];
              return g.pressConference.questions.map(function (q) {
                return q.playerName + "[" + (q.isWinner ? "W" : "L") + "]: \"" + q.answer + "\"";
              });
            }).join("\n");
            _context3.p = 3;
            _context3.n = 4;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey.trim(),
                "anthropic-version": "2023-06-01",
                "anthropic-dangerous-direct-browser-access": "true"
              },
              body: JSON.stringify({
                model: "claude-opus-4-5",
                max_tokens: 2000,
                messages: [{
                  role: "user",
                  content: "Jeste\u015B ekspertem od Terraformacji Marsa i analitykiem zachowa\u0144 graczy. Napisz po polsku wci\u0105gaj\u0105cy raport strategiczny: kto dominuje, wzorce, trendy, porady dla ka\u017Cdego gracza. Pisz jak komentator sportowy.\n\nRozgrywki (" + games.length + "):\n" + summary + "\n\nDraft data:\n" + draftData + "\n\nKonferencje:\n" + confData
                }]
              })
            });
          case 4:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 6;
              break;
            }
            _context3.n = 5;
            return res.text();
          case 5:
            t = _context3.v;
            throw new Error("API " + res.status + ": " + t.slice(0, 300));
          case 6:
            _context3.n = 7;
            return res.json();
          case 7:
            data = _context3.v;
            text = (data.content || []).map(function (b) {
              return b.text || "";
            }).join("").trim();
            if (text) {
              _context3.n = 8;
              break;
            }
            throw new Error("Pusta odpowiedź");
          case 8:
            setReport(text);
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t2 = _context3.v;
            setError(_t2.message);
          case 10:
            setLoading(false);
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 9]]);
    }));
    return function generate() {
      return _ref38.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Raport AI"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".7rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Klucz API Anthropic"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".4rem",
      marginBottom: ".45rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    type: showKey ? "text" : "password",
    value: apiKey,
    onChange: function onChange(e) {
      return saveKey(e.target.value);
    },
    placeholder: "sk-ant-api03-...",
    style: {
      flex: 1,
      fontSize: ".8rem"
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: function onClick() {
      return setShowKey(function (s) {
        return !s;
      });
    },
    style: {
      width: "auto",
      padding: ".35rem .65rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, showKey ? "🙈" : "👁"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".68rem",
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, "Utw\xF3rz klucz na ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--orange)"
    }
  }, "console.anthropic.com"), " \u2192 API Keys. Klucz jest zapisywany lokalnie.")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".7rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Analiza rozgrywek"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".85rem",
      lineHeight: 1.65
    }
  }, "AI przeanalizuje histori\u0119 rozgrywek i dostarczy strategiczny raport z wnioskami i poradami dla ka\u017Cdego gracza."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".75rem",
      color: "var(--orange)"
    }
  }, games.length, " rozgrywek w bazie")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: generate,
    disabled: loading,
    style: {
      marginBottom: ".65rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, loading ? "⏳ Generuję raport..." : "⬡ Generuj Raport AI")), error && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: ".65rem .85rem",
      background: "var(--surface)",
      border: "1px solid #d45a5a",
      borderRadius: 8,
      fontSize: ".8rem",
      color: "#d45a5a",
      marginBottom: ".65rem"
    }
  }, "\u26A0 ", error), report && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-text",
    style: {
      fontSize: ".88rem",
      lineHeight: 1.75,
      whiteSpace: "pre-wrap"
    }
  }, report)));
}

// ═══════════════════════════════════════════════════════
//  SETTINGS VIEW
// ═══════════════════════════════════════════════════════
var CAT_PRESETS = [{
  emoji: "🪐",
  name: "Venus"
}, {
  emoji: "🌪️",
  name: "Turmoil"
}, {
  emoji: "🏛️",
  name: "Specjalne kafle"
}, {
  emoji: "🤝",
  name: "Delegaci"
}, {
  emoji: "💰",
  name: "Megakredyty"
}, {
  emoji: "⚗️",
  name: "Nauka"
}];

// ── Auto contrast helper ──
function hexLuminance(hex) {
  if (!hex || !hex.startsWith('#') || hex.length < 7) return 0;
  var r = parseInt(hex.slice(1, 3), 16) / 255;
  var g = parseInt(hex.slice(3, 5), 16) / 255;
  var b = parseInt(hex.slice(5, 7), 16) / 255;
  var lin = function lin(x) {
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
/* Próg to punkt, w którym ciemny i jasny tekst dają ten sam kontrast.
   Dla pary #18100a / #e8d8c8 wypada on przy luminancji 0,16, nie 0,35.
   Przy 0,35 wszystkie kolory graczy (luminancja 0,18–0,30) dostawały jasny
   tekst z kontrastem ~2,4:1, choć ciemny dawał ~5,6:1. */
var AUTO_TEXT_THRESHOLD = 0.16;
function autoTextColor(bgHex) {
  return hexLuminance(bgHex) > AUTO_TEXT_THRESHOLD ? '#18100a' : '#e8d8c8';
}
function autoMutedColor(bgHex) {
  return hexLuminance(bgHex) > AUTO_TEXT_THRESHOLD ? '#887060' : '#a08880';
}
/* ═══ ZDJĘCIA GRACZY ═══
   Trzymane w IndexedDB, nie w localStorage: jedno zdjęcie to ~30 KB, a localStorage
   ma ~5 MB na całą apkę i siedzą tam realne rozgrywki. Klucz to id gracza, więc
   zmiana imienia nie gubi zdjęcia. Kształt `tfm:players` zostaje nietknięty. */
var PHOTO_DB = "tfm-photos";
var PHOTO_STORE = "photos";
var PHOTO_KEY = "map";

// Zdjęcia dołączone do aplikacji (wklejane przez build.mjs do template.html).
var SEED_AVATARS = typeof window !== "undefined" && window.TFM_AVATARS ? window.TFM_AVATARS : {};

function photoDB() {
  return new Promise(function (res, rej) {
    var r = indexedDB.open(PHOTO_DB, 1);
    r.onupgradeneeded = function () {
      r.result.createObjectStore(PHOTO_STORE);
    };
    r.onsuccess = function () {
      res(r.result);
    };
    r.onerror = function () {
      rej(r.error);
    };
  });
}

function photosLoad() {
  return photoDB().then(function (db) {
    return new Promise(function (res) {
      var rq = db.transaction(PHOTO_STORE, "readonly").objectStore(PHOTO_STORE).get(PHOTO_KEY);
      rq.onsuccess = function () {
        res(rq.result || {});
      };
      rq.onerror = function () {
        res({});
      };
    });
  }).catch(function () {
    return {};
  });
}

function photosSave(map) {
  return photoDB().then(function (db) {
    return new Promise(function (res) {
      var tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).put(map, PHOTO_KEY);
      tx.oncomplete = function () {
        res(true);
      };
      tx.onerror = function () {
        res(false);
      };
    });
  }).catch(function () {
    return false;
  });
}

/* Wspólny stan zdjęć dla całej apki. Widoki (losowanie, wyniki, statystyki,
   konferencja) tylko czytają; zapisuje panel w Ustawieniach, a subskrypcja
   odświeża pozostałe ekrany bez przeładowania. */
var _photoCache = null;
var _photoSubs = [];

function photosNotify(map) {
  _photoCache = map;
  _photoSubs.slice().forEach(function (fn) {
    fn(map);
  });
}

function usePhotos() {
  var _usePh = useState(_photoCache || {}),
    photos = _usePh[0],
    setLocal = _usePh[1];
  useEffect(function () {
    _photoSubs.push(setLocal);
    if (_photoCache === null) {
      _photoCache = {}; // żeby równoległe widoki nie czytały bazy kilka razy
      photosLoad().then(photosNotify);
    } else {
      setLocal(_photoCache);
    }
    return function () {
      _photoSubs = _photoSubs.filter(function (fn) {
        return fn !== setLocal;
      });
    };
  }, []);
  return photos;
}

/* Zdjęcia są kluczowane id gracza, ale większość widoków (wyniki, historia,
   konferencja) zna tylko imię — zapisane rozgrywki trzymają imiona, nie id.
   Stąd lekki indeks imię → id, odświeżany przez App przy zmianie listy graczy. */
var _playerIndex = {};

function photosIndexPlayers(players) {
  var idx = {};
  (players || []).forEach(function (p) {
    if (p && p.name) idx[p.name] = p.id;
  });
  _playerIndex = idx;
}

function photoFor(photos, nameOrId) {
  if (!photos || !nameOrId) return null;
  return photos[nameOrId] || photos[_playerIndex[nameOrId]] || null;
}

// Zapis zdjęcia (albo usunięcie, gdy dataUrl jest puste) + powiadomienie widoków.
function photoWrite(playerId, dataUrl) {
  var next = _extends({}, _photoCache || {});
  if (dataUrl) next[playerId] = dataUrl;else delete next[playerId];
  photosNotify(next);
  return photosSave(next);
}

// Skaluje wgrany plik do kwadratu i zwraca data URL. Bez tego jedno zdjęcie
// z telefonu potrafi mieć kilka MB.
function photoFromFile(file, size) {
  size = size || 320;
  return new Promise(function (res, rej) {
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      var c = document.createElement("canvas");
      c.width = c.height = size;
      var g = c.getContext("2d");
      g.imageSmoothingQuality = "high";
      var iw = img.naturalWidth;
      var ih = img.naturalHeight;
      var k = Math.max(size / iw, size / ih);
      g.drawImage(img, (size - iw * k) / 2, (size - ih * k) / 2, iw * k, ih * k);
      URL.revokeObjectURL(url);
      var out;
      try {
        out = c.toDataURL("image/webp", 0.85);
        if (out.indexOf("data:image/webp") !== 0) out = c.toDataURL("image/jpeg", 0.85);
      } catch (e) {
        out = c.toDataURL("image/jpeg", 0.85);
      }
      res(out);
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      rej(new Error("Nie udało się wczytać obrazu"));
    };
    img.src = url;
  });
}

// Avatar: zdjęcie albo inicjał na kolorze gracza. Komponent na poziomie modułu —
// zagnieżdżony powodowałby remount przy każdym renderze (patrz CLAUDE.md).
function PlayerPhoto(_refPhoto) {
  var src = _refPhoto.src;
  var name = _refPhoto.name || "";
  var color = _refPhoto.color || "#888888";
  var size = _refPhoto.size || 40;
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0,
        display: "block",
        border: "2px solid " + color
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      background: color,
      color: autoTextColor(color),
      border: "2px solid " + color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: Math.round(size * 0.42) + "px",
      lineHeight: 1
    }
  }, (name.trim().slice(0, 1) || "?").toUpperCase());
}

function SettingsView(_ref39) {
  var _GAME_CATS$find;
  var players = _ref39.players,
    setPlayers = _ref39.setPlayers,
    gameData = _ref39.gameData,
    setGameData = _ref39.setGameData,
    onSavePlayers = _ref39.onSavePlayers,
    onSaveGameData = _ref39.onSaveGameData,
    customCats = _ref39.customCats,
    setCustomCats = _ref39.setCustomCats,
    onSaveCustomCats = _ref39.onSaveCustomCats,
    theme = _ref39.theme,
    setTheme = _ref39.setTheme,
    skin = _ref39.skin,
    setSkin = _ref39.setSkin,
    customTheme = _ref39.customTheme,
    onSaveCustomTheme = _ref39.onSaveCustomTheme;
  // ── zdjęcia graczy ──
  var photos = usePhotos();
  var _useStatePhOpen = useState(null),
    photoMenu = _useStatePhOpen[0],
    setPhotoMenu = _useStatePhOpen[1];
  var _useStatePhErr = useState(""),
    photoErr = _useStatePhErr[0],
    setPhotoErr = _useStatePhErr[1];
  var fileInputRef = useRef(null);
  var photoTargetRef = useRef(null);
  var writePhoto = function writePhoto(playerId, dataUrl) {
    photoWrite(playerId, dataUrl);
    setPhotoMenu(null);
    setPhotoErr("");
  };
  var pickPhotoFile = function pickPhotoFile(playerId) {
    photoTargetRef.current = playerId;
    if (fileInputRef.current) fileInputRef.current.click();
  };
  var onPhotoFile = function onPhotoFile(e) {
    var file = e.target.files && e.target.files[0];
    e.target.value = ""; // żeby dało się wybrać ten sam plik ponownie
    var playerId = photoTargetRef.current;
    if (!file || !playerId) return;
    photoFromFile(file, 320).then(function (dataUrl) {
      writePhoto(playerId, dataUrl);
      SFX.click();
    }).catch(function (err) {
      setPhotoErr(err.message || "Nie udało się wczytać zdjęcia");
    });
  };
  var _useState37 = useState("players"),
    tab = _useState37[0],
    setTab = _useState37[1];
  var _useState38 = useState(null),
    deleteWarning = _useState38[0],
    setDeleteWarning = _useState38[1]; // player obj to confirm delete
  var _useState39 = useState(function () {
      try {
        return localStorage.getItem("tfm:sound") !== "0";
      } catch (_unused16) {
        return true;
      }
    }),
    soundOn = _useState39[0],
    setSoundOn = _useState39[1];
  var _useState40 = useState(""),
    importMsg = _useState40[0],
    setImportMsg = _useState40[1];
  var _useState41 = useState(function () {
      return (customTheme == null ? void 0 : customTheme.vars) || {};
    }),
    customVars = _useState41[0],
    setCustomVars = _useState41[1];
  var _useState42 = useState(function () {
      return (customTheme == null ? void 0 : customTheme.fontSize) || 15;
    }),
    fontSize = _useState42[0],
    setFontSize = _useState42[1];
  var _useState43 = useState(""),
    newName = _useState43[0],
    setNewName = _useState43[1];
  var _useState44 = useState(null),
    editing = _useState44[0],
    setEditing = _useState44[1];
  var _useState45 = useState("boards"),
    editCat = _useState45[0],
    setEditCat = _useState45[1];
  var _useState46 = useState(""),
    newItem = _useState46[0],
    setNewItem = _useState46[1];
  // Custom scoring state
  var _useState47 = useState(""),
    newCatEmoji = _useState47[0],
    setNewCatEmoji = _useState47[1];
  var _useState48 = useState(""),
    newCatName = _useState48[0],
    setNewCatName = _useState48[1];
  var _useState49 = useState(null),
    editingCat = _useState49[0],
    setEditingCat = _useState49[1]; // id of cat being edited
  var _useState50 = useState({
      emoji: "",
      name: ""
    }),
    editCatVal = _useState50[0],
    setEditCatVal = _useState50[1];

  // ── Players ──
  var addPlayer = function addPlayer() {
    if (!newName.trim() || players.length >= 8) return;
    var used = players.map(function (p) {
      return p.color;
    });
    var color = PLAYER_COLORS.find(function (c) {
      return !used.includes(c);
    }) || PLAYER_COLORS[players.length % PLAYER_COLORS.length];
    var np = [].concat(players, [{
      id: Date.now(),
      name: newName.trim(),
      color: color
    }]);
    setPlayers(np);
    onSavePlayers(np);
    setNewName("");
  };
  var removePlayer = function removePlayer(id) {
    var np = players.filter(function (p) {
      return p.id !== id;
    });
    setPlayers(np);
    onSavePlayers(np);
  };
  var updColor = function updColor(id, c) {
    var np = players.map(function (p) {
      return p.id === id ? _extends({}, p, {
        color: c
      }) : p;
    });
    setPlayers(np);
    onSavePlayers(np);
  };
  var updName = function updName(id, n) {
    var np = players.map(function (p) {
      return p.id === id ? _extends({}, p, {
        name: n
      }) : p;
    });
    setPlayers(np);
    onSavePlayers(np);
  };

  // ── Game data ──
  var addItem = function addItem() {
    var _extends4;
    if (!newItem.trim()) return;
    var u = _extends({}, gameData, (_extends4 = {}, _extends4[editCat] = [].concat(gameData[editCat], [newItem.trim()]), _extends4));
    setGameData(u);
    onSaveGameData(u);
    setNewItem("");
  };
  var removeItem = function removeItem(i) {
    var _extends5;
    var u = _extends({}, gameData, (_extends5 = {}, _extends5[editCat] = gameData[editCat].filter(function (_, j) {
      return j !== i;
    }), _extends5));
    setGameData(u);
    onSaveGameData(u);
  };
  var resetCat = function resetCat() {
    var _extends6;
    var u = _extends({}, gameData, (_extends6 = {}, _extends6[editCat] = [].concat(DEFAULT_DATA[editCat]), _extends6));
    setGameData(u);
    onSaveGameData(u);
  };

  // ── Custom scoring cats ──
  var addCustomCat = function addCustomCat(emoji, name) {
    var e = emoji.trim();
    var n = name.trim();
    if (!n) return;
    var nc = [].concat(customCats, [{
      id: Date.now(),
      emoji: e,
      name: n
    }]);
    setCustomCats(nc);
    onSaveCustomCats(nc);
    setNewCatEmoji("");
    setNewCatName("");
  };
  var removeCustomCat = function removeCustomCat(id) {
    var nc = customCats.filter(function (c) {
      return c.id !== id;
    });
    setCustomCats(nc);
    onSaveCustomCats(nc);
  };
  var startEditCat = function startEditCat(cat) {
    setEditingCat(cat.id);
    setEditCatVal({
      emoji: cat.emoji || "",
      name: cat.name
    });
  };
  var saveEditCat = function saveEditCat() {
    var nc = customCats.map(function (c) {
      return c.id === editingCat ? _extends({}, c, {
        emoji: editCatVal.emoji,
        name: editCatVal.name
      }) : c;
    });
    setCustomCats(nc);
    onSaveCustomCats(nc);
    setEditingCat(null);
  };
  var GAME_CATS = [{
    key: "boards",
    lbl: "Plansze"
  }, {
    key: "colonies",
    lbl: "Kolonie"
  }, {
    key: "milestones",
    lbl: "Tytuły"
  }, {
    key: "awards",
    lbl: "Nagrody"
  }, {
    key: "preludes",
    lbl: "Preludium"
  }, {
    key: "corporations",
    lbl: "Korporacje"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Ustawienia"), deleteWarning && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 7000,
      background: "rgba(4,3,10,.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--red)",
      borderRadius: 12,
      padding: "1.5rem",
      maxWidth: 380,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".65rem",
      letterSpacing: ".2em",
      color: "#e04040",
      marginBottom: ".5rem"
    }
  }, "\u26A0 Uwaga \u2014 utrata danych"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".9rem",
      fontWeight: 600,
      marginBottom: ".5rem"
    }
  }, "Usu\u0144 \u201E", deleteWarning.name, "\"?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      lineHeight: 1.65,
      marginBottom: "1rem"
    }
  }, "Usuni\u0119cie gracza ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream)"
    }
  }, deleteWarning.name), " z bazy spowoduje utrat\u0119 powi\u0105zanych statystyk w raportach AI. Historyczne rozgrywki pozostan\u0105 w bazie, ale gracz nie b\u0119dzie rozpoznawany jako aktywny uczestnik."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-del btn-sm",
    onClick: function onClick() {
      removePlayer(deleteWarning.id);
      setDeleteWarning(null);
      SFX.click();
    },
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "Usu\u0144 gracza")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: function onClick() {
      setDeleteWarning(null);
      SFX.click();
    },
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "Anuluj"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".4rem",
      marginBottom: "1.1rem"
    }
  }, [{
    id: "players",
    lbl: "👤 Gracze"
  }, {
    id: "scoring",
    lbl: "📊 Punktacja"
  }, {
    id: "data",
    lbl: "🗂 Dane Gry"
  }, {
    id: "backup",
    lbl: "💾 Backup"
  }, {
    id: "wyglad",
    lbl: "🎨 Wygląd"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "btn btn-sm " + (tab === t.id ? "" : "btn-ghost"),
      onClick: function onClick() {
        return setTab(t.id);
      },
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", null, t.lbl));
  })), tab === "players" && /*#__PURE__*/React.createElement("div", null, players.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "1.5rem 0"
    }
  }, "Brak graczy. Dodaj pierwszego!"), players.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "card",
      style: {
        borderColor: p.color + "33",
        marginBottom: ".6rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".55rem"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Zdjęcie gracza " + p.name,
      title: "Zdjęcie gracza",
      onClick: function onClick() {
        SFX.click();
        setPhotoMenu(photoMenu === p.id ? null : p.id);
      },
      style: {
        border: "none",
        background: "none",
        padding: 0,
        margin: 0,
        lineHeight: 0,
        cursor: "pointer",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(PlayerPhoto, {
      src: photos[p.id],
      name: p.name,
      color: p.color,
      size: 56
    })), editing === p.id ? /*#__PURE__*/React.createElement("input", {
      className: "inp",
      style: {
        flex: 1
      },
      value: p.name,
      autoFocus: true,
      onChange: function onChange(e) {
        return updName(p.id, e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && setEditing(null);
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: ".95rem",
        fontWeight: 600
      }
    }, p.name), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        width: "auto",
        padding: ".3rem .55rem"
      },
      onClick: function onClick() {
        return setEditing(editing === p.id ? null : p.id);
      }
    }, /*#__PURE__*/React.createElement("span", null, editing === p.id ? "✓" : "✎")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del   btn-sm",
      style: {
        width: "auto",
        padding: ".3rem .55rem"
      },
      onClick: function onClick() {
        SFX.click();
        setDeleteWarning(p);
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2715"))), editing === p.id && /*#__PURE__*/React.createElement("div", {
      className: "color-pick"
    }, PLAYER_COLORS.map(function (c) {
      return /*#__PURE__*/React.createElement("button", {
        key: c,
        className: "color-btn " + (p.color === c ? "sel" : ""),
        style: {
          background: c
        },
        onClick: function onClick() {
          return updColor(p.id, c);
        }
      });
    })), photoMenu === p.id && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: ".6rem",
        paddingTop: ".6rem",
        borderTop: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-lbl",
      style: {
        marginBottom: ".45rem"
      }
    }, "Zdjęcie gracza"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: ".45rem"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm",
      style: {
        width: "auto"
      },
      onClick: function onClick() {
        return pickPhotoFile(p.id);
      }
    }, /*#__PURE__*/React.createElement("span", null, "Z telefonu")), Object.keys(SEED_AVATARS).map(function (key) {
      return /*#__PURE__*/React.createElement("button", {
        key: key,
        type: "button",
        title: SEED_AVATARS[key].label || key,
        "aria-label": "Ustaw zdjęcie: " + (SEED_AVATARS[key].label || key),
        onClick: function onClick() {
          SFX.click();
          writePhoto(p.id, SEED_AVATARS[key].src);
        },
        style: {
          border: "none",
          background: "none",
          padding: 0,
          lineHeight: 0,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: SEED_AVATARS[key].src,
        alt: "",
        style: {
          width: 38,
          height: 38,
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          border: "2px solid " + (photos[p.id] === SEED_AVATARS[key].src ? p.color : "var(--border)")
        }
      }));
    }), photos[p.id] && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del btn-sm",
      style: {
        width: "auto"
      },
      onClick: function onClick() {
        SFX.click();
        writePhoto(p.id, null);
      }
    }, /*#__PURE__*/React.createElement("span", null, "Usuń"))), photoErr && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".62rem",
        color: "#e04040",
        marginTop: ".45rem"
      }
    }, photoErr)));
  }), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    onChange: onPhotoFile,
    style: {
      display: "none"
    }
  }), players.length < 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      marginTop: ".4rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Imi\u0119 gracza...",
    value: newName,
    onChange: function onChange(e) {
      return setNewName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addPlayer();
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: addPlayer,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "+ Dodaj")))), tab === "scoring" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#2a1f40",
      marginBottom: ".85rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Dodatkowe Kryteria Punktacji"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      lineHeight: 1.65
    }
  }, "Dodaj w\u0142asne kategorie punkt\xF3w (np. z rozszerze\u0144 Venus, Turmoil). Pojawi\u0105 si\u0119 w arkuszu wynik\xF3w pod tabel\u0105 standardow\u0105.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".85rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".58rem",
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginBottom: ".5rem"
    }
  }, "Szybkie dodanie"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".35rem"
    }
  }, CAT_PRESETS.map(function (p) {
    var exists = customCats.some(function (c) {
      return c.name === p.name;
    });
    return /*#__PURE__*/React.createElement("button", {
      key: p.name,
      className: "btn btn-ghost btn-sm " + (exists ? "" : ""),
      onClick: function onClick() {
        return !exists && addCustomCat(p.emoji, p.name);
      },
      style: {
        opacity: exists ? .4 : 1,
        cursor: exists ? "default" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", null, p.emoji, " ", p.name));
  }))), customCats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: ".85rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".58rem",
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: ".5rem"
    }
  }, "Aktywne Kryteria (", customCats.length, ")"), customCats.map(function (cat, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id,
      className: "card",
      style: {
        padding: ".65rem .85rem",
        marginBottom: ".45rem",
        borderColor: editingCat === cat.id ? "var(--orange2)" : "var(--border)"
      }
    }, editingCat === cat.id ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".4rem",
        marginBottom: ".5rem"
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "inp",
      style: {
        width: 55,
        textAlign: "center"
      },
      placeholder: "\uD83E\uDE90",
      value: editCatVal.emoji,
      onChange: function onChange(e) {
        return setEditCatVal(function (v) {
          return _extends({}, v, {
            emoji: e.target.value
          });
        });
      }
    }), /*#__PURE__*/React.createElement("input", {
      className: "inp",
      style: {
        flex: 1
      },
      value: editCatVal.name,
      onChange: function onChange(e) {
        return setEditCatVal(function (v) {
          return _extends({}, v, {
            name: e.target.value
          });
        });
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && saveEditCat();
      },
      autoFocus: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".4rem"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-green btn-sm",
      onClick: saveEditCat,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2713 Zapisz")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: function onClick() {
        return setEditingCat(null);
      },
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", null, "Anuluj")))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".55rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "1.1rem",
        lineHeight: 1,
        flexShrink: 0
      }
    }, cat.emoji || "◆"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: ".88rem",
        fontWeight: 600
      }
    }, cat.name), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        width: "auto",
        padding: ".28rem .5rem"
      },
      onClick: function onClick() {
        return startEditCat(cat);
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u270E")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del   btn-sm",
      style: {
        width: "auto",
        padding: ".28rem .5rem"
      },
      onClick: function onClick() {
        return removeCustomCat(cat.id);
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2715"))));
  })), customCats.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "1.5rem 0"
    }
  }, "Brak dodatkowych kryteri\xF3w.", /*#__PURE__*/React.createElement("br", null), "U\u017Cyj szybkiego dodania lub formularza poni\u017Cej."), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#1a1f40"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Nowe kryterium"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".4rem",
      marginBottom: ".5rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      width: 55,
      textAlign: "center",
      fontSize: "1rem"
    },
    placeholder: "\uD83C\uDFC6",
    value: newCatEmoji,
    onChange: function onChange(e) {
      return setNewCatEmoji(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    style: {
      flex: 1
    },
    placeholder: "Nazwa kategorii...",
    value: newCatName,
    onChange: function onChange(e) {
      return setNewCatName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addCustomCat(newCatEmoji, newCatName);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green",
    onClick: function onClick() {
      return addCustomCat(newCatEmoji, newCatName);
    }
  }, /*#__PURE__*/React.createElement("span", null, "+ Dodaj Kryterium")))), tab === "wyglad" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Wygląd aplikacji"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".38rem"
    }
  }, [{
    id: "classic",
    lbl: "Klasyczny",
    bg: "#06050a",
    fg: "#f07030"
  }, {
    id: "terminal",
    lbl: "Terminal",
    bg: "#04070a",
    fg: "#5be39a"
  }, {
    id: "brutal",
    lbl: "Brutalizm",
    bg: "#ffffff",
    fg: "#ff3b00"
  }, {
    id: "karta",
    lbl: "Karta",
    bg: "#2a2724",
    fg: "#ede4d2"
  }, {
    id: "rysunek",
    lbl: "Rysunek",
    bg: "#0c2a4a",
    fg: "#8fc4e8"
  }, {
    id: "dziennik",
    lbl: "Dziennik",
    bg: "#f6f1e6",
    fg: "#a4321e"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: function onClick() {
        setSkin(s.id);
        SFX.click();
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".25rem",
        background: "var(--surface)",
        border: "1px solid " + (skin === s.id ? "var(--orange)" : "var(--border)"),
        borderRadius: 8,
        padding: ".35rem .4rem",
        cursor: "pointer",
        transition: "all .2s",
        minWidth: 58
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 22,
        borderRadius: 4,
        background: s.bg,
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 3,
        background: s.fg,
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".46rem",
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: skin === s.id ? "var(--orange)" : "var(--muted)",
        whiteSpace: "nowrap"
      }
    }, s.lbl));
  })), skin !== "classic" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".58rem",
      lineHeight: 1.5,
      color: "var(--muted)",
      marginTop: ".5rem"
    }
  }, "Skórka ma własne kolory — ustawienia kolorów na tej zakładce i motyw w zakładce Backup działają tylko przy wyglądzie klasycznym.")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Rozmiar czcionki"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 13,
    max: 20,
    step: 0.5,
    value: fontSize,
    onChange: function onChange(e) {
      var sz = Number(e.target.value);
      document.body.style.fontSize = sz + 'px';
      setFontSize(sz);
    },
    style: {
      flex: 1,
      accentColor: "var(--orange)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".75rem",
      color: "var(--orange)",
      minWidth: 35
    }
  }, fontSize, "px"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Kolory interfejsu"), [{
    lbl: "Tło główne",
    key: "--bg",
    hint: "Tło aplikacji · czcionka dostosuje się auto"
  }, {
    lbl: "Tło kafelka",
    key: "--card",
    hint: "Tło kart i paneli · czcionka dostosuje się auto"
  }, {
    lbl: "Akcent / przyciski",
    key: "--orange",
    hint: "Kolor przycisków i nagłówków"
  }, {
    lbl: "Tekst główny",
    key: "--cream",
    hint: "Główny kolor czcionki"
  }, {
    lbl: "Tekst pomocniczy",
    key: "--muted",
    hint: "Etykiety i opisy"
  }, {
    lbl: "Obramowania",
    key: "--border",
    hint: "Kolor ramek i separatorów"
  }, {
    lbl: "Sukces / Zielony",
    key: "--green",
    hint: "Kolor zapisano, WR >50%"
  }].map(function (_ref40) {
    var lbl = _ref40.lbl,
      key = _ref40.key,
      hint = _ref40.hint;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: ".55rem"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".82rem",
        fontWeight: 600
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".62rem",
        color: "var(--muted)"
      }
    }, hint)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: ".4rem",
        alignItems: "center"
      }
    }, customVars[key] && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        document.documentElement.style.removeProperty(key);
        setCustomVars(function (v) {
          var n = _extends({}, v);
          delete n[key];
          return n;
        });
      },
      style: {
        fontSize: ".6rem",
        color: "var(--muted)",
        background: "none",
        border: "none",
        cursor: "pointer"
      }
    }, "\u2715"), /*#__PURE__*/React.createElement("input", {
      type: "color",
      value: customVars[key] || getComputedStyle(document.documentElement).getPropertyValue(key).trim() || "#888888",
      onChange: function onChange(e) {
        var val = e.target.value;
        document.documentElement.style.setProperty(key, val);
        if (key === '--orange') {
          document.documentElement.style.setProperty('--orange2', val + 'bb');
        }
        // Auto-adjust text contrast when background changes
        if (key === '--bg') {
          var auto = autoTextColor(val);
          var muted = autoMutedColor(val);
          if (!customVars['--cream']) document.documentElement.style.setProperty('--cream', auto);
          if (!customVars['--muted']) document.documentElement.style.setProperty('--muted', muted);
        }
        if (key === '--card') {
          // Card-level text auto-contrast
          var cardText = autoTextColor(val);
          document.documentElement.style.setProperty('--card-text', cardText);
        }
        setCustomVars(function (v) {
          var _extends7;
          return _extends({}, v, (_extends7 = {}, _extends7[key] = val, _extends7));
        });
      },
      style: {
        width: 44,
        height: 36,
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        background: "none"
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      flex: 1
    },
    onClick: function onClick() {
      SFX.save();
      onSaveCustomTheme({
        vars: customVars,
        fontSize: fontSize
      });
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCBE Zastosuj wygl\u0105d")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      flex: "none",
      width: "auto",
      padding: ".4rem .75rem"
    },
    onClick: function onClick() {
      ["--bg", "--surface", "--card", "--border", "--orange", "--orange2", "--cream", "--muted", "--green", "--glow", "--card-text"].forEach(function (k) {
        return document.documentElement.style.removeProperty(k);
      });
      document.body.style.fontSize = "";
      setCustomVars({});
      setFontSize(15);
      onSaveCustomTheme(null);
      SFX.click();
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u21BA Reset"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Gotowe presetki"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".35rem"
    }
  }, [{
    lbl: "🍊 Marsjański",
    vars: {
      "--orange": "#f07030",
      "--orange2": "#c85520"
    }
  }, {
    lbl: "🍇 Nebula",
    vars: {
      "--orange": "#a060e0",
      "--orange2": "#8040b8",
      "--bg": "#07050f",
      "--card": "#140f22",
      "--border": "#281840",
      "--cream": "#e8d8f8"
    }
  }, {
    lbl: "🌊 Ocean",
    vars: {
      "--orange": "#3090d0",
      "--orange2": "#2070a8",
      "--bg": "#050810",
      "--card": "#0d1220",
      "--border": "#182840",
      "--cream": "#d0e8f8"
    }
  }, {
    lbl: "🌿 Las",
    vars: {
      "--orange": "#38a060",
      "--orange2": "#287840",
      "--bg": "#050a07",
      "--card": "#0d1410",
      "--border": "#182818",
      "--cream": "#d0f0d8"
    }
  }, {
    lbl: "❤️ Karmazyn",
    vars: {
      "--orange": "#d04050",
      "--orange2": "#a02838",
      "--bg": "#0a0405",
      "--card": "#1c080a",
      "--border": "#380c10",
      "--cream": "#f8d8d8"
    }
  }, {
    lbl: "✨ Złoty",
    vars: {
      "--orange": "#d4a030",
      "--orange2": "#a87818",
      "--bg": "#080700",
      "--card": "#161200",
      "--border": "#302800",
      "--cream": "#f8f0d0"
    }
  }].map(function (preset) {
    return /*#__PURE__*/React.createElement("button", {
      key: preset.lbl,
      className: "btn btn-ghost btn-sm",
      onClick: function onClick() {
        var vars = _extends({}, preset.vars);
        // Auto text contrast if not defined in preset
        if (!vars['--cream'] && vars['--bg']) {
          vars['--cream'] = autoTextColor(vars['--bg']);
          vars['--muted'] = autoMutedColor(vars['--bg']);
        }
        Object.entries(vars).forEach(function (_ref41) {
          var k = _ref41[0],
            v = _ref41[1];
          return document.documentElement.style.setProperty(k, v);
        });
        // Auto card text contrast
        if (vars['--card']) document.documentElement.style.setProperty('--card-text', autoTextColor(vars['--card']));
        if (vars['--bg'] && !vars['--cream']) document.documentElement.style.setProperty('--cream', autoTextColor(vars['--bg']));
        setCustomVars(vars);
        SFX.click();
      },
      style: {
        fontSize: ".6rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, preset.lbl));
  })))), tab === "backup" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Motyw kolorystyczny"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".38rem"
    }
  }, [{
    id: "dark",
    emoji: "🔴",
    lbl: "Marsjański",
    color: "#f07030"
  }, {
    id: "light",
    emoji: "☀️",
    lbl: "Jasny",
    color: "#c04818"
  }, {
    id: "nebula",
    emoji: "🟣",
    lbl: "Nebula",
    color: "#a060e0"
  }, {
    id: "ocean",
    emoji: "🔵",
    lbl: "Ocean",
    color: "#3090d0"
  }, {
    id: "forest",
    emoji: "🟢",
    lbl: "Las",
    color: "#38a060"
  }, {
    id: "crimson",
    emoji: "❤️",
    lbl: "Karmazyn",
    color: "#d04050"
  }, {
    id: "gold",
    emoji: "🟡",
    lbl: "Złoty",
    color: "#d4a030"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        setTheme(t.id);
        SFX.click();
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".22rem",
        background: theme === t.id ? t.color + "22" : "var(--surface)",
        border: "1px solid " + (theme === t.id ? t.color : "var(--border)"),
        borderRadius: 8,
        padding: ".4rem .55rem",
        cursor: "pointer",
        transition: "all .2s",
        minWidth: 50
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".92rem",
        lineHeight: 1
      }
    }, t.emoji), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".48rem",
        letterSpacing: ".06em",
        color: theme === t.id ? t.color : "var(--muted)",
        whiteSpace: "nowrap"
      }
    }, t.lbl), theme === t.id && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 2,
        borderRadius: 1,
        background: t.color
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "D\u017Awi\u0119ki"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".85rem"
    }
  }, "Efekty d\u017Awi\u0119kowe"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm " + (soundOn ? "btn-green" : "btn-ghost"),
    onClick: function onClick() {
      var n = !soundOn;
      setSoundOn(n);
      _soundEnabled = n;
      try {
        localStorage.setItem("tfm:sound", n ? "1" : "0");
      } catch (_unused17) {}
      if (n) SFX.click();
    },
    style: {
      width: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", null, soundOn ? "🔊 Włączone" : "🔇 Wyłączone")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Eksport danych"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      marginBottom: ".7rem",
      lineHeight: 1.65
    }
  }, "Eksportuj wszystkie dane \u2014 wyniki, gracze, zdjęcia, ustawienia, konferencje \u2014 do pliku JSON."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _yield$Promise$all, games, plrs, customData, customCatsD, photosD, blob, a;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            SFX.click();
            _context4.n = 1;
            return Promise.all([loadData("tfm:games"), loadData("tfm:players"), loadData("tfm:customData"), loadData("tfm:customCats"), photosLoad()]);
          case 1:
            _yield$Promise$all = _context4.v;
            games = _yield$Promise$all[0];
            plrs = _yield$Promise$all[1];
            customData = _yield$Promise$all[2];
            customCatsD = _yield$Promise$all[3];
            photosD = _yield$Promise$all[4];
            blob = new Blob([JSON.stringify({
              version: 2,
              exported: new Date().toISOString(),
              games: games,
              players: plrs,
              customData: customData,
              customCats: customCatsD,
              photos: photosD
            }, null, 2)], {
              type: "application/json"
            });
            a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "tfm-backup-" + new Date().toISOString().slice(0, 10) + ".json";
            a.click();
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }))
  }, /*#__PURE__*/React.createElement("span", null, "\u2B07 Eksportuj JSON"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Import danych"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      marginBottom: ".7rem",
      lineHeight: 1.65
    }
  }, "Wczytaj plik JSON z innego urz\u0105dzenia.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#e04040"
    }
  }, "Nadpisze obecne dane!")), importMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".78rem",
      color: importMsg.startsWith("✓") ? "var(--green)" : "#e04040",
      marginBottom: ".6rem"
    }
  }, importMsg), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".json",
    style: {
      display: "none"
    },
    onChange: async function onImport(e) {
      var file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        var data = JSON.parse(await file.text());
        if (!data.version) {
          setImportMsg("⚠ Nieznany format.");
          e.target.value = "";
          return;
        }
        if (data.games) await saveData("tfm:games", data.games);
        if (data.players) await saveData("tfm:players", data.players);
        if (data.customData) await saveData("tfm:customData", data.customData);
        if (data.customCats) await saveData("tfm:customCats", data.customCats);
        // Zdjęcia — pole opcjonalne, starsze kopie go nie mają. Klucze to id graczy,
        // a gracze przychodzą z tej samej kopii, więc id się zgadzają.
        if (data.photos && typeof data.photos === "object") {
          photosNotify(data.photos);
          await photosSave(data.photos);
        }
        setImportMsg("✓ Import zakończony! Odśwież stronę.");
        SFX.victory();
      } catch (err) {
        setImportMsg("⚠ Błąd wczytywania.");
      }
      e.target.value = "";
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "btn btn-sm",
    style: {
      display: "inline-block",
      fontFamily: "Orbitron,sans-serif",
      fontSize: ".52rem",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      padding: ".38rem .75rem",
      border: "1px solid var(--orange)",
      color: "var(--orange)",
      borderRadius: "5px",
      cursor: "pointer"
    }
  }, "\u2B06 Wybierz plik JSON")))), tab === "data" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".3rem",
      marginBottom: ".85rem"
    }
  }, GAME_CATS.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      className: "btn btn-sm " + (editCat === c.key ? "" : "btn-ghost"),
      onClick: function onClick() {
        setEditCat(c.key);
        setNewItem("");
      },
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("span", null, c.lbl));
  })), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: ".55rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl",
    style: {
      marginBottom: 0
    }
  }, (_GAME_CATS$find = GAME_CATS.find(function (c) {
    return c.key === editCat;
  })) == null ? void 0 : _GAME_CATS$find.lbl, " (", gameData[editCat].length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: resetCat,
    style: {
      fontSize: ".48rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u21BA Reset"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "260px",
      overflowY: "auto",
      marginBottom: ".65rem"
    }
  }, gameData[editCat].map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "set-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "set-item-name"
    }, item), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del btn-sm",
      onClick: function onClick() {
        return removeItem(idx);
      },
      style: {
        width: "auto",
        padding: ".13rem .38rem",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2715")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".45rem"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Dodaj pozycj\u0119...",
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addItem();
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: addItem,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "+"))))));
}

// ═══════════════════════════════════════════════════════
//  TIMER VIEW
// ═══════════════════════════════════════════════════════
var CIRC = 2 * Math.PI * 88; // circumference for r=88

function TimerView(_ref44) {
  var onFinish = _ref44.onFinish;
  var _useState51 = useState(0),
    elapsed = _useState51[0],
    setElapsed = _useState51[1];
  var _useState52 = useState("idle"),
    phase = _useState52[0],
    setPhase = _useState52[1]; // idle | running | paused
  var _useState53 = useState([]),
    history = _useState53[0],
    setHistory = _useState53[1];
  var intervalRef = useRef(null);
  var startRef = useRef(0);
  useEffect(function () {
    loadData("tfm:timerHist").then(function (h) {
      if (h) setHistory(h);
    });
  }, []);
  useEffect(function () {
    if (phase === "running") {
      startRef.current = Date.now() - elapsed * 1000;
      intervalRef.current = setInterval(function () {
        setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
      }, 200);
    } else {
      clearInterval(intervalRef.current);
    }
    return function () {
      return clearInterval(intervalRef.current);
    };
  }, [phase]);
  var fmtTime = function fmtTime(s) {
    var h = Math.floor(s / 3600);
    var m = Math.floor(s % 3600 / 60);
    var sec = s % 60;
    return h > 0 ? h + ":" + String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0") : String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  };
  var fmtMin = function fmtMin(s) {
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return m + "m " + sec + "s";
  };
  var handleStart = function handleStart() {
    return setPhase("running");
  };
  var handlePause = function handlePause() {
    return setPhase("paused");
  };
  var handleResume = function handleResume() {
    return setPhase("running");
  };
  var handleStop = /*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var entry, h;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            setPhase("idle");
            if (!(elapsed < 5)) {
              _context6.n = 1;
              break;
            }
            setElapsed(0);
            return _context6.a(2);
          case 1:
            entry = {
              date: new Date().toISOString(),
              duration: elapsed
            };
            h = [entry].concat(history).slice(0, 15);
            setHistory(h);
            _context6.n = 2;
            return saveData("tfm:timerHist", h);
          case 2:
            onFinish == null || onFinish(elapsed);
            setElapsed(0);
          case 3:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function handleStop() {
      return _ref45.apply(this, arguments);
    };
  }();
  var handleReset = function handleReset() {
    setPhase("idle");
    setElapsed(0);
  };
  var deleteHistEntry = /*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(idx) {
      var h;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            h = history.filter(function (_, i) {
              return i !== idx;
            });
            setHistory(h);
            _context7.n = 1;
            return saveData("tfm:timerHist", h);
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function deleteHistEntry(_x3) {
      return _ref46.apply(this, arguments);
    };
  }();

  // Ring: animate per-minute cycle (resets every 60s for visual interest)
  var ringPct = elapsed % 3600 / 3600;
  var ringOffset = CIRC * (1 - ringPct);
  var ringColor = phase === "running" ? "var(--orange)" : phase === "paused" ? "#5a8fd4" : "var(--border)";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Mierzenie Partii"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      padding: "1.5rem 1rem 1rem",
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "timer-ring-wrap"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "timer-ring-svg",
    width: "200",
    height: "200",
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    className: "timer-ring-bg",
    cx: "100",
    cy: "100",
    r: "88"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "timer-ring-fg",
    cx: "100",
    cy: "100",
    r: "88",
    strokeDasharray: CIRC,
    strokeDashoffset: phase === "idle" ? CIRC : ringOffset,
    style: {
      stroke: ringColor
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "timer-clock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timer-time"
  }, fmtTime(elapsed)), /*#__PURE__*/React.createElement("div", {
    className: "timer-status"
  }, phase === "idle" ? "gotowy" : phase === "running" ? "▶ gra trwa" : "⏸ pauza"))), /*#__PURE__*/React.createElement("div", {
    className: "timer-btns"
  }, phase === "idle" && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-green btn-sm",
    onClick: handleStart,
    style: {
      flex: 1,
      maxWidth: 160
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25B6 Start")), phase === "running" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: handlePause,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u23F8 Pauza")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-del   btn-sm",
    onClick: handleStop,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u23F9 Zapisz"))), phase === "paused" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: handleResume,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25B6 Wzn\xF3w")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-del   btn-sm",
    onClick: handleStop,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u23F9 Zapisz")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: handleReset,
    style: {
      flex: "none",
      width: "auto",
      padding: ".38rem .65rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u21BA"))))), history.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".58rem",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: ".65rem"
    }
  }, "Historia Czas\xF3w"), history.map(function (h, i) {
    var d = new Date(h.date);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "rec",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Orbitron",
        fontSize: ".88rem",
        color: "var(--cream)",
        fontWeight: 600
      }
    }, fmtMin(h.duration)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".62rem",
        color: "var(--muted)",
        marginTop: ".1rem"
      }
    }, d.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "short"
    }), " \xB7 ", d.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit"
    }))), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-del btn-sm",
      onClick: function onClick() {
        return deleteHistEntry(i);
      },
      style: {
        width: "auto",
        padding: ".2rem .45rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u2715")));
  }), history.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: ".4rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "\u015Aredni czas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: "1rem",
      color: "var(--orange)"
    }
  }, fmtMin(Math.round(history.reduce(function (a, h) {
    return a + h.duration;
  }, 0) / history.length))))));
}

// ═══════════════════════════════════════════════════════
//  FIRST PLAYER LOTTERY
// ═══════════════════════════════════════════════════════
function FirstPlayerLottery(_ref47) {
  var players = _ref47.players,
    onClose = _ref47.onClose;
  var canvasRef = useRef(null);
  var rafRef = useRef(null);
  var stateRef = useRef({
    phase: "idle",
    angle: 0,
    speed: 0,
    winner: -1
  });
  var _useState54 = useState("idle"),
    uiPhase = _useState54[0],
    setUiPhase = _useState54[1]; // idle | spinning | result
  var _useState55 = useState(null),
    winner = _useState55[0],
    setWinner = _useState55[1];
  var _useState56 = useState([]),
    particles = _useState56[0],
    setParticles = _useState56[1];
  var W = 320,
    H = 320,
    CX = 160,
    CY = 160,
    ORBIT_R = 108;
  var n = players.length;

  // Stable player angles on orbit
  var playerAngles = players.map(function (_, i) {
    return i / n * Math.PI * 2 - Math.PI / 2;
  });
  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");
    var drawMars = function drawMars() {
      // Outer glow rings
      [1.6, 1.35, 1.15].forEach(function (scale, ri) {
        ctx.beginPath();
        ctx.arc(CX, CY, 42 * scale, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(232,104,42," + (0.06 - ri * 0.015) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      // Mars body
      var grd = ctx.createRadialGradient(CX - 12, CY - 10, 2, CX, CY, 42);
      grd.addColorStop(0, "#e07848");
      grd.addColorStop(0.45, "#c03018");
      grd.addColorStop(1, "#3a0808");
      ctx.beginPath();
      ctx.arc(CX, CY, 42, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      // Highlight
      ctx.beginPath();
      ctx.ellipse(CX - 9, CY - 11, 14, 8, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,240,220,.28)";
      ctx.fill();
    };
    var drawOrbit = function drawOrbit() {
      ctx.beginPath();
      ctx.arc(CX, CY, ORBIT_R, 0, Math.PI * 2);
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = "rgba(240,112,48,.14)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
    };
    var drawBeam = function drawBeam(angle) {
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(angle);
      var grad = ctx.createLinearGradient(0, 0, ORBIT_R + 24, 0);
      grad.addColorStop(0, "rgba(240,112,48,.0)");
      grad.addColorStop(0.5, "rgba(240,112,48,.22)");
      grad.addColorStop(1, "rgba(240,112,48,.0)");
      ctx.beginPath();
      ctx.moveTo(44, 0);
      var halfAngle = 0.22;
      ctx.lineTo(Math.cos(-halfAngle) * (ORBIT_R + 22), Math.sin(-halfAngle) * (ORBIT_R + 22));
      ctx.lineTo(Math.cos(halfAngle) * (ORBIT_R + 22), Math.sin(halfAngle) * (ORBIT_R + 22));
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      // Beam tip dot
      ctx.beginPath();
      ctx.arc(ORBIT_R, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(240,112,48,.8)";
      ctx.fill();
      ctx.restore();
    };
    var drawPlayers = function drawPlayers(beamAngle, phase, winnerIdx) {
      players.forEach(function (p, i) {
        var ang = playerAngles[i];
        var px = CX + Math.cos(ang) * ORBIT_R;
        var py = CY + Math.sin(ang) * ORBIT_R;

        // How close is beam to this player?
        var normBeam = (beamAngle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        var normAng = (ang + Math.PI * 2) % (Math.PI * 2);
        var diff = Math.min(Math.abs(normBeam - normAng), Math.PI * 2 - Math.abs(normBeam - normAng));
        var isLit = phase === "spinning" && diff < 0.3;
        var isWin = phase === "result" && winnerIdx === i;
        var r = isWin ? 19 : 13;
        if (isLit || isWin) {
          ctx.shadowBlur = isWin ? 32 : 16;
          ctx.shadowColor = p.color;
        }
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (isWin) {
          ctx.beginPath();
          ctx.arc(px, py, r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = p.color + "66";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.shadowBlur = 0;

        // Name label
        var lblR = ORBIT_R + 26;
        var lx = CX + Math.cos(ang) * lblR;
        var ly = CY + Math.sin(ang) * lblR;
        ctx.font = (isWin ? "bold " : "") + "10px 'Exo 2',sans-serif";
        ctx.fillStyle = isWin ? "#fff" : isLit ? "rgba(255,255,255,.9)" : "rgba(180,160,170,.55)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Clip long names
        var name = p.name.length > 9 ? p.name.slice(0, 8) + "…" : p.name;
        ctx.fillText(name, lx, ly);
      });
    };
    var draw = function draw() {
      var s = stateRef.current;
      ctx.clearRect(0, 0, W, H);
      drawOrbit();
      if (s.phase !== "idle") drawBeam(s.angle);
      drawMars();
      drawPlayers(s.angle, s.phase, s.winner);
    };
    var _loop3 = function loop() {
      var s = stateRef.current;
      if (s.phase === "spinning") {
        s.angle += s.speed;
        s.speed *= 0.984;
        if (s.speed < 0.006) {
          // Find closest player
          var norm = (s.angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
          var best = 0,
            bestD = Infinity;
          playerAngles.forEach(function (a, i) {
            var na = (a + Math.PI * 2) % (Math.PI * 2);
            var d = Math.min(Math.abs(norm - na), Math.PI * 2 - Math.abs(norm - na));
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          // Snap angle to winner
          s.angle = playerAngles[best];
          s.phase = "result";
          s.winner = best;
          setUiPhase("result");
          setWinner(players[best]);
          // Spawn particles
          var px = CX + Math.cos(playerAngles[best]) * ORBIT_R;
          var py = CY + Math.sin(playerAngles[best]) * ORBIT_R;
          var newP = Array.from({
            length: 18
          }, function (_, j) {
            return {
              id: Date.now() + j,
              x: px,
              y: py,
              tx: (Math.random() - .5) * 120 + "px",
              ty: (Math.random() - .5) * 120 + "px",
              color: players[best].color
            };
          });
          setParticles(newP);
          setTimeout(function () {
            return setParticles([]);
          }, 1000);
        }
      }
      draw();
      rafRef.current = requestAnimationFrame(_loop3);
    };
    draw();
    rafRef.current = requestAnimationFrame(_loop3);
    return function () {
      return cancelAnimationFrame(rafRef.current);
    };
  }, [players]);
  var spin = function spin() {
    stateRef.current = {
      phase: "spinning",
      angle: stateRef.current.angle,
      speed: 0.28 + Math.random() * 0.14,
      winner: -1
    };
    setUiPhase("spinning");
    setWinner(null);
    setParticles([]);
  };
  var reset = function reset() {
    stateRef.current = {
      phase: "idle",
      angle: 0,
      speed: 0,
      winner: -1
    };
    setUiPhase("idle");
    setWinner(null);
    setParticles([]);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-ov"
  }, /*#__PURE__*/React.createElement(StarField, null), /*#__PURE__*/React.createElement("div", {
    className: "fp-topbar",
    style: {
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: ".58rem",
      letterSpacing: ".3em",
      color: "var(--muted)"
    }
  }, "PIERWSZY GRACZ"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "1px solid var(--border)",
      color: "var(--muted)",
      borderRadius: "4px",
      padding: ".18rem .55rem",
      cursor: "pointer",
      fontFamily: "Orbitron",
      fontSize: ".5rem",
      letterSpacing: ".1em",
      position: "relative",
      zIndex: 4
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "fp-canvas-wrap",
    style: {
      zIndex: 3,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "60vw"
    }
  }), particles.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "particle",
      style: {
        left: p.x,
        top: p.y,
        background: p.color,
        boxShadow: "0 0 6px " + p.color,
        "--tx": p.tx,
        "--ty": p.ty,
        animationDelay: Math.random() * 0.15 + "s"
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      textAlign: "center",
      minHeight: 80,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, winner ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fp-winner-sub"
  }, "Pierwszy Gracz"), /*#__PURE__*/React.createElement("div", {
    className: "fp-winner-name",
    style: {
      color: winner.color,
      textShadow: "0 0 40px " + winner.color + ", 0 0 80px " + winner.color + "55"
    }
  }, winner.name)) : uiPhase === "idle" ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".72rem",
      color: "var(--muted)",
      letterSpacing: ".1em"
    }
  }, "Naci\u015Bnij, aby wylosowa\u0107 pierwszego gracza") : /*#__PURE__*/React.createElement("div", {
    className: "ai-dots",
    style: {
      padding: ".5rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ai-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ai-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ai-dot"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      width: "100%",
      padding: "0 1.25rem",
      display: "flex",
      gap: ".6rem"
    }
  }, uiPhase !== "spinning" && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: spin,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, winner ? "◈ Losuj Ponownie" : "◈ Losuj")), winner && uiPhase !== "spinning" && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: reset,
    style: {
      flex: "none",
      width: "auto",
      padding: ".72rem 1rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u21BA"))));
}

// ═══════════════════════════════════════════════════════
//  GAME VIEW (Timer + First Player)
// ═══════════════════════════════════════════════════════
function GameView(_ref48) {
  var players = _ref48.players;
  var _useState57 = useState("timer"),
    tab = _useState57[0],
    setTab = _useState57[1];
  var _useState58 = useState(false),
    showFP = _useState58[0],
    setShowFP = _useState58[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "stitle"
  }, "Gra"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".5rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm " + (tab === "timer" ? "" : "btn-ghost"),
    onClick: function onClick() {
      return setTab("timer");
    },
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u23F1 Stoper")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm " + (tab === "player" ? "" : "btn-ghost"),
    onClick: function onClick() {
      return setTab("player");
    },
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE80 Pierwszy Gracz"))), tab === "timer" && /*#__PURE__*/React.createElement(TimerView, null), tab === "player" && (players.length < 2 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#3a1f10",
      textAlign: "center",
      padding: "2rem 1rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.8rem",
      marginBottom: ".6rem",
      opacity: .4
    }
  }, "\uD83D\uDE80"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Orbitron",
      fontSize: ".65rem",
      letterSpacing: ".2em",
      color: "var(--orange)",
      marginBottom: ".45rem"
    }
  }, "Minimum 2 graczy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--muted)",
      lineHeight: 1.7
    }
  }, "Dodaj graczy w", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--cream)"
    }
  }, "Ustawienia \u2192 Gracze"))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "#1f2a40",
      marginBottom: ".75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-lbl"
  }, "Gracze (", players.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".35rem",
      marginBottom: ".85rem"
    }
  }, players.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: ".3rem",
        background: "#1a1530",
        border: "1px solid var(--border)",
        borderRadius: "5px",
        padding: ".2rem .5rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: p.color,
        boxShadow: "0 0 5px " + p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: ".8rem"
      }
    }, p.name));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: function onClick() {
      return setShowFP(true);
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDE80 Wylosuj Pierwszego Gracza"))))), showFP && players.length >= 2 && /*#__PURE__*/React.createElement(FirstPlayerLottery, {
    players: players,
    onClose: function onClose() {
      return setShowFP(false);
    }
  }));
}

// ═══════════════════════════════════════════════════════
//  ROOT APP
// ═══════════════════════════════════════════════════════
var NAV = [{
  id: "draft",
  ico: "◈",
  lbl: "Gra"
}, {
  id: "score",
  ico: "✦",
  lbl: "Wyniki"
}, {
  id: "history",
  ico: "◉",
  lbl: "Historia"
}, {
  id: "stats",
  ico: "◑",
  lbl: "Stat."
}, {
  id: "ai",
  ico: "⬡",
  lbl: "AI"
}, {
  id: "settings",
  ico: "⚙",
  lbl: "Ustaw."
}];
function App() {
  var _useState59 = useState("draft"),
    view = _useState59[0],
    setView = _useState59[1];
  var _useState60 = useState(function () {
      try {
        var v = localStorage.getItem("tfm:customTheme");
        return v ? JSON.parse(v) : null;
      } catch (_unused19) {
        return null;
      }
    }),
    customTheme = _useState60[0],
    setCustomTheme = _useState60[1];

  // Apply custom theme CSS variables
  useEffect(function () {
    var el = document.documentElement;
    if (customTheme) {
      var vars = customTheme.vars || {};
      Object.entries(vars).forEach(function (_ref49) {
        var k = _ref49[0],
          v = _ref49[1];
        return el.style.setProperty(k, v);
      });
      // Auto text contrast if bg changed but cream not set explicitly
      if (vars['--bg'] && !vars['--cream']) {
        el.style.setProperty('--cream', autoTextColor(vars['--bg']));
        el.style.setProperty('--muted', autoMutedColor(vars['--bg']));
      }
      // Card-level text auto-contrast
      if (vars['--card']) {
        el.style.setProperty('--card-text', autoTextColor(vars['--card']));
      }
      if (customTheme.fontSize) document.body.style.fontSize = customTheme.fontSize + "px";
    } else {
      ["--bg", "--surface", "--card", "--border", "--orange", "--orange2", "--cream", "--muted", "--green", "--glow"].forEach(function (k) {
        return el.style.removeProperty(k);
      });
      document.body.style.fontSize = "";
    }
  }, [customTheme]);
  var saveCustomTheme = function saveCustomTheme(ct) {
    setCustomTheme(ct);
    try {
      localStorage.setItem("tfm:customTheme", ct ? JSON.stringify(ct) : "null");
    } catch (_unused20) {}
  };
  var _useState61 = useState(null),
    pendingDraft = _useState61[0],
    setPendingDraft = _useState61[1];
  var _useState62 = useState(null),
    gameStartTime = _useState62[0],
    setGameStartTime = _useState62[1];
  var _useState63 = useState(function () {
      try {
        return localStorage.getItem("tfm:theme") || "dark";
      } catch (_unused21) {
        return "dark";
      }
    }),
    theme = _useState63[0],
    setTheme = _useState63[1];
  var _useStateSkin = useState(function () {
      try {
        return localStorage.getItem("tfm:skin") || "karta";
      } catch (_unusedSkin) {
        return "karta";
      }
    }),
    skin = _useStateSkin[0],
    setSkin = _useStateSkin[1];
  useEffect(function () {
    // Skorka ma wlasna palete, wiec na czas jej dzialania baza motywu
    // zostaje ciemna — inaczej nadpisy [data-theme="light"] walczylyby z tokenami.
    var base = skin === "classic" ? theme : "dark";
    document.documentElement.setAttribute("data-theme", base);
    if (skin === "classic") {
      document.documentElement.removeAttribute("data-skin");
    } else {
      document.documentElement.setAttribute("data-skin", skin);
    }
    var tc = {
      "dark": "#06050a",
      "light": "#f5f0e8",
      "nebula": "#07050f",
      "ocean": "#050810",
      "forest": "#050a07",
      "crimson": "#0a0405",
      "gold": "#080700"
    };
    var sc = {
      "terminal": "#04070a",
      "brutal": "#ffffff",
      "karta": "#2a2724",
      "rysunek": "#0c2a4a",
      "dziennik": "#f6f1e6"
    };
    try {
      document.getElementById("tcmeta").content = sc[skin] || tc[theme] || "#06050a";
      localStorage.setItem("tfm:theme", theme);
      localStorage.setItem("tfm:skin", skin);
    } catch (_unused22) {}
  }, [theme, skin]);
  useEffect(function () {
    try {
      _soundEnabled = localStorage.getItem("tfm:sound") !== "0";
    } catch (_unused23) {}
  }, []);
  var _useState64 = useState([]),
    games = _useState64[0],
    setGames = _useState64[1];
  var _useState65 = useState([]),
    players = _useState65[0],
    setPlayers = _useState65[1];
  // Indeks imię → id, żeby widoki operujące na imionach trafiały w zdjęcia.
  useEffect(function () {
    photosIndexPlayers(players);
  }, [players]);
  var _useState66 = useState(function () {
      return _extends({}, DEFAULT_DATA);
    }),
    gameData = _useState66[0],
    setGameData = _useState66[1];
  var _useState67 = useState([]),
    customCats = _useState67[0],
    setCustomCats = _useState67[1];
  useEffect(function () {
    Promise.all([loadData("tfm:games"), loadData("tfm:players"), loadData("tfm:customData"), loadData("tfm:customCats")]).then(function (_ref50) {
      var g = _ref50[0],
        p = _ref50[1],
        d = _ref50[2],
        cats = _ref50[3];
      if (g) setGames(g);
      if (p) setPlayers(p);
      if (d) setGameData(d);
      if (cats) setCustomCats(cats);
    });
  }, []);
  var reload = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var d;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return loadData("tfm:games");
          case 1:
            d = _context8.v;
            if (d) setGames(d);
          case 2:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function reload() {
      return _ref51.apply(this, arguments);
    };
  }();
  var delGame = /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(id) {
      var u;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            u = games.filter(function (g) {
              return g.id !== id;
            });
            setGames(u);
            _context9.n = 1;
            return saveData("tfm:games", u);
          case 1:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function delGame(_x4) {
      return _ref52.apply(this, arguments);
    };
  }();
  var savePlayers = function savePlayers(p) {
    setPlayers(p);
    saveData("tfm:players", p);
  };
  var saveGD = function saveGD(d) {
    setGameData(d);
    saveData("tfm:customData", d);
  };
  var saveCustomCats = function saveCustomCats(cats) {
    setCustomCats(cats);
    saveData("tfm:customCats", cats);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, "Stan Terraformacji Marsa"), /*#__PURE__*/React.createElement("div", {
    className: "logo-sub"
  }, "Companion App")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: ".45rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setTheme(function (t) {
        return t === "light" ? "dark" : "light";
      });
      SFX.click();
    },
    style: {
      background: "none",
      border: "1px solid var(--border)",
      borderRadius: "6px",
      padding: ".28rem .48rem",
      cursor: "pointer",
      fontSize: ".9rem",
      color: "var(--muted)"
    },
    title: "Jasny/Ciemny"
  }, theme === "light" ? "🌙" : "☀️"), /*#__PURE__*/React.createElement("div", {
    className: "hdr-badge"
  }, "TFM v2.5"))), /*#__PURE__*/React.createElement("main", {
    className: "content"
  }, view === "draft" && /*#__PURE__*/React.createElement(DraftView, {
    players: players,
    gameData: gameData,
    onStartGame: function onStartGame(draft) {
      setPendingDraft(draft);
      setGameStartTime(Date.now());
      setView("score");
    }
  }), view === "score" && /*#__PURE__*/React.createElement(ScoreView, {
    onSave: function onSave() {
      reload();
      setPendingDraft(null);
      setGameStartTime(null);
    },
    players: players,
    customCats: customCats,
    initialDraft: pendingDraft,
    initialTimer: gameStartTime ? Math.floor((Date.now() - gameStartTime) / 1000) : 0
  }), view === "history" && /*#__PURE__*/React.createElement(HistoryView, {
    games: games,
    onDelete: delGame
  }), view === "month" && /*#__PURE__*/React.createElement(MonthView, {
    games: games
  }), view === "stats" && /*#__PURE__*/React.createElement(StatsView, {
    games: games
  }), view === "ai" && /*#__PURE__*/React.createElement(AIView, {
    games: games
  }), view === "settings" && /*#__PURE__*/React.createElement(SettingsView, {
    players: players,
    setPlayers: setPlayers,
    gameData: gameData,
    setGameData: setGameData,
    onSavePlayers: savePlayers,
    onSaveGameData: saveGD,
    customCats: customCats,
    setCustomCats: setCustomCats,
    onSaveCustomCats: saveCustomCats,
    theme: theme,
    setTheme: setTheme,
    skin: skin,
    setSkin: setSkin,
    customTheme: customTheme,
    onSaveCustomTheme: saveCustomTheme
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, NAV.map(function (n) {
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      className: "nav-btn " + (view === n.id ? "active" : ""),
      onClick: function onClick() {
        return setView(n.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nav-ico"
    }, n.ico), /*#__PURE__*/React.createElement("span", {
      className: "nav-lbl"
    }, n.lbl));
  })));
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
