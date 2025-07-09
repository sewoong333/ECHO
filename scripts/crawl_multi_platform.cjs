const puppeteer = require('puppeteer');
const fs = require('fs');

function removeOutliers(prices) {
  if (prices.length < 5) return prices;
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const std = Math.sqrt(prices.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / prices.length);
  let filtered = prices.filter(x => x !== Math.max(...prices) && x !== Math.min(...prices));
  filtered = filtered.filter(x => Math.abs(x - mean) <= 1.5 * std);
  return filtered.length ? filtered : prices;
}

async function crawlBunjang(keyword) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36');
  await page.goto(`https://m.bunjang.co.kr/search/products?order=score&page=1&query=${encodeURIComponent(keyword)}`);
  await page.waitForTimeout(2000);
  const prices = await page.$$eval('.sc-jXbUNg', els => els.map(el => el.textContent.replace(/[^0-9]/g, '')).filter(Boolean).map(Number));
  await browser.close();
  return prices;
}

async function crawlDaangn(keyword) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36');
  await page.goto(`https://www.daangn.com/search/${encodeURIComponent(keyword)}`);
  await page.waitForTimeout(2000);
  const prices = await page.$$eval('.card-desc .card-price', els => els.map(el => el.textContent.replace(/[^0-9]/g, '')).filter(Boolean).map(Number));
  await browser.close();
  return prices;
}

(async () => {
  const targets = [
    { instrument: 'guitar', brand: 'Fender', model: 'Stratocaster' },
    { instrument: 'guitar', brand: 'Gibson', model: 'Les Paul' },
    { instrument: 'piano', brand: 'Yamaha', model: 'U1' },
    { instrument: 'drum', brand: 'Roland', model: 'TD-1DMK' },
    { instrument: 'synth', brand: 'Korg', model: 'Minilogue' },
    { instrument: 'wind', brand: 'Yamaha', model: 'YAS-280' },
    { instrument: 'string', brand: 'Stentor', model: 'Student' },
    // ... 더 추가 가능
  ];
  const results = [];
  for (const t of targets) {
    const keyword = [t.brand, t.model].join(' ');
    let bunjang = { avg: 0, count: 0 }, daangn = { avg: 0, count: 0 };
    try {
      const prices = await crawlBunjang(keyword);
      const filtered = removeOutliers(prices);
      bunjang = {
        avg: filtered.length ? Math.round(filtered.reduce((a, b) => a + b, 0) / filtered.length) : 0,
        count: filtered.length
      };
      console.log(`[Bunjang] ${keyword}: ${bunjang.avg}원 (${bunjang.count}건)`);
    } catch (e) {
      console.log(`[Bunjang] ${keyword}: 크롤링 실패`);
    }
    try {
      const prices = await crawlDaangn(keyword);
      const filtered = removeOutliers(prices);
      daangn = {
        avg: filtered.length ? Math.round(filtered.reduce((a, b) => a + b, 0) / filtered.length) : 0,
        count: filtered.length
      };
      console.log(`[Daangn] ${keyword}: ${daangn.avg}원 (${daangn.count}건)`);
    } catch (e) {
      console.log(`[Daangn] ${keyword}: 크롤링 실패`);
    }
    results.push({ ...t, bunjang: bunjang.avg, bunjangCount: bunjang.count, daangn: daangn.avg, daangnCount: daangn.count });
    await new Promise(r => setTimeout(r, 1200));
  }
  fs.writeFileSync('used_prices.json', JSON.stringify(results, null, 2));
  console.log('완료! used_prices.json 파일로 저장됨');
})(); 