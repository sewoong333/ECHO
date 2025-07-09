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
  await page.goto(`https://m.bunjang.co.kr/search/products?order=score&page=1&query=${encodeURIComponent(keyword)}`);
  await page.waitForTimeout(2000);
  const prices = await page.$$eval('.sc-jXbUNg', els => els.map(el => el.textContent.replace(/[^0-9]/g, '')).filter(Boolean).map(Number));
  await browser.close();
  return prices;
}

(async () => {
  const targets = [
    // 기타
    { instrument: 'guitar', brand: 'Fender', model: 'Stratocaster' },
    { instrument: 'guitar', brand: 'Fender', model: 'Telecaster' },
    { instrument: 'guitar', brand: 'Gibson', model: 'Les Paul' },
    { instrument: 'guitar', brand: 'Gibson', model: 'SG' },
    { instrument: 'guitar', brand: 'Yamaha', model: 'C40' },
    { instrument: 'guitar', brand: 'Yamaha', model: 'Pacifica' },
    { instrument: 'guitar', brand: 'Cort', model: 'X-2' },
    { instrument: 'guitar', brand: 'Cort', model: 'G100' },
    { instrument: 'guitar', brand: 'Squier', model: 'Affinity' },
    { instrument: 'guitar', brand: 'Squier', model: 'Classic Vibe' },
    // 피아노
    { instrument: 'piano', brand: 'Yamaha', model: 'U1' },
    { instrument: 'piano', brand: 'Yamaha', model: 'P-125' },
    { instrument: 'piano', brand: 'Kawai', model: 'K-300' },
    { instrument: 'piano', brand: 'Samick', model: 'SU-118' },
    { instrument: 'piano', brand: 'Roland', model: 'FP-30' },
    // 드럼
    { instrument: 'drum', brand: 'Roland', model: 'TD-1DMK' },
    { instrument: 'drum', brand: 'Roland', model: 'TD-17KVX' },
    { instrument: 'drum', brand: 'Yamaha', model: 'DTX402' },
    { instrument: 'drum', brand: 'Pearl', model: 'Export' },
    { instrument: 'drum', brand: 'Tama', model: 'Imperialstar' },
    // 신디사이저
    { instrument: 'synth', brand: 'Korg', model: 'Minilogue' },
    { instrument: 'synth', brand: 'Korg', model: 'Kross 2' },
    { instrument: 'synth', brand: 'Roland', model: 'FA-06' },
    { instrument: 'synth', brand: 'Yamaha', model: 'MODX' },
    { instrument: 'synth', brand: 'Nord', model: 'Stage 3' },
    // 관악기
    { instrument: 'wind', brand: 'Yamaha', model: 'YAS-280' },
    { instrument: 'wind', brand: 'Selmer', model: 'Super Action 80' },
    { instrument: 'wind', brand: 'Jupiter', model: 'JAS-500' },
    // 현악기
    { instrument: 'string', brand: 'Yamaha', model: 'V5' },
    { instrument: 'string', brand: 'Stentor', model: 'Student' },
    { instrument: 'string', brand: 'Eastman', model: 'VL80' },
  ];
  const results = [];
  for (const t of targets) {
    const keyword = [t.brand, t.model].join(' ');
    try {
      const prices = await crawlBunjang(keyword);
      const filtered = removeOutliers(prices);
      const avg = filtered.length ? Math.round(filtered.reduce((a, b) => a + b, 0) / filtered.length) : 0;
      results.push({ ...t, average: avg, count: filtered.length });
      console.log(`${keyword}: ${avg}원 (${filtered.length}건)`);
    } catch (e) {
      results.push({ ...t, average: 0, count: 0 });
      console.log(`${keyword}: 크롤링 실패`);
    }
    await new Promise(r => setTimeout(r, 1200));
  }
  fs.writeFileSync('used_prices.json', JSON.stringify(results, null, 2));
  console.log('완료! used_prices.json 파일로 저장됨');
})(); 