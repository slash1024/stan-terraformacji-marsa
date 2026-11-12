// Smoke test: ładuje docs/*.html w Chromium, sprawdza brak błędów JS i że app się wyrenderowała.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
  await p.goto('file://' + path.resolve(__dirname, '../docs/stan-terraformacji-marsa.html'));
  await p.waitForTimeout(1200);
  const n = await p.evaluate(() => document.getElementById('root').children.length);
  const navs = await p.$$eval('.nav-btn', e => e.map(x => x.textContent.trim()));
  console.log('root children:', n, '| nav:', navs.join(' / '));
  if (process.argv[2]) await p.screenshot({ path: process.argv[2] });
  await b.close();
  if (errs.length || !n || !navs.length) { console.error('FAIL', errs); process.exit(1); }
  console.log('SMOKE OK');
})();
