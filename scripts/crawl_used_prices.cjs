const fs = require('fs');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const TARGETS = [
  // 기타
  { instrument: 'guitar', brand: 'Fender', model: 'Stratocaster' },
  { instrument: 'guitar', brand: 'Gibson', model: 'Les Paul' },
  { instrument: 'guitar', brand: 'Yamaha', model: 'C40' },
  { instrument: 'guitar', brand: 'Cort', model: 'X-2' },
  { instrument: 'guitar', brand: 'Squier', model: 'Affinity' },
  // 피아노
  { instrument: 'piano', brand: 'Yamaha', model: 'U1' },
  { instrument: 'piano', brand: 'Kawai', model: 'K-300' },
  { instrument: 'piano', brand: 'Samick', model: 'SU-118' },
  { instrument: 'piano', brand: 'Roland', model: 'FP-30' },
  // 드럼
  { instrument: 'drum', brand: 'Roland', model: 'TD-1DMK' },
  { instrument: 'drum', brand: 'Yamaha', model: 'DTX402' },
  { instrument: 'drum', brand: 'Pearl', model: 'Export' },
  // 신디사이저
  { instrument: 'synth', brand: 'Korg', model: 'Minilogue' },
  { instrument: 'synth', brand: 'Roland', model: 'FA-06' },
  { instrument: 'synth', brand: 'Yamaha', model: 'MODX' },
  // 관악기/현악기
  { instrument: 'wind', brand: 'Yamaha', model: 'YAS-280' },
  { instrument: 'string', brand: 'Stentor', model: 'Student' },
];

function removeOutliers(prices) {
  if (prices.length < 5) return prices;
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const std = Math.sqrt(prices.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / prices.length);
  let filtered = prices.filter(x => x !== Math.max(...prices) && x !== Math.min(...prices));
  filtered = filtered.filter(x => Math.abs(x - mean) <= 1.5 * std);
  return filtered.length ? filtered : prices;
}

async function crawlBunjang({ brand, model }) {
  const q = encodeURIComponent([brand, model].filter(Boolean).join(' '));
  const url = `https://m.bunjang.co.kr/search/products?order=score&page=1&query=${q}`;
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const $ = cheerio.load(html);
  const prices = [];
  $('.sc-dcJsrY .sc-hUpaCq').each((i, el) => {
    const priceText = $(el).find('.sc-jXbUNg').text().replace(/[^0-9]/g, '');
    if (priceText) prices.push(Number(priceText));
  });
  return prices.slice(0, 20);
}

async function main() {
  const results = [];
  for (const target of TARGETS) {
    console.log(`크롤링: ${target.instrument} / ${target.brand} / ${target.model}`);
    try {
      const prices = await crawlBunjang(target);
      const filtered = removeOutliers(prices);
      const avg = filtered.length ? Math.round(filtered.reduce((a, b) => a + b, 0) / filtered.length) : 0;
      results.push({ ...target, average: avg, count: filtered.length });
      console.log(`  → ${filtered.length}건, 평균: ${avg.toLocaleString()}원`);
    } catch (e) {
      results.push({ ...target, average: 0, count: 0 });
      console.log('  → 크롤링 실패');
    }
    await new Promise(r => setTimeout(r, 1200)); // 사이트 차단 방지
  }
  fs.writeFileSync('used_prices.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('완료! used_prices.json 파일로 저장됨');
}

main(); 