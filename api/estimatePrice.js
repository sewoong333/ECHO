const cheerio = require('cheerio');
const fetch = require('node-fetch');
const SUGGESTED_PATH = require('path').join(__dirname, 'user_suggested_models.json');
const USED_PRICES = require('./used_prices.js');

// Helper to remove outliers
function removeOutliers(prices) {
  if (prices.length < 5) return prices;
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const std = Math.sqrt(prices.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / prices.length);
  // Remove min, max
  let filtered = prices.filter(x => x !== Math.max(...prices) && x !== Math.min(...prices));
  // Remove values outside 1.5 stddev
  filtered = filtered.filter(x => Math.abs(x - mean) <= 1.5 * std);
  return filtered.length ? filtered : prices;
}

async function crawlBungaejangter({ instrument, brand, model }) {
  try {
    const q = encodeURIComponent([brand, model, instrument].filter(Boolean).join(' '));
    const url = `https://m.bunjang.co.kr/search/products?order=score&page=1&query=${q}`;
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const $ = cheerio.load(html);
    const prices = [];
    $('.sc-dcJsrY .sc-hUpaCq').each((i, el) => {
      const priceText = $(el).find('.sc-jXbUNg').text().replace(/[^0-9]/g, '');
      if (priceText) prices.push(Number(priceText));
    });
    return prices.slice(0, 15);
  } catch (e) {
    return [];
  }
}

async function crawlJoonggonara({ instrument, brand, model }) {
  try {
    const q = encodeURIComponent([brand, model, instrument].filter(Boolean).join(' '));
    const url = `https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=10050146&search.query=${q}`;
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const $ = cheerio.load(html);
    const prices = [];
    $('td.td_article').each((i, el) => {
      const title = $(el).text();
      const priceMatch = title.match(/([0-9]{2,}[,0-9]*)[ ]*원/);
      if (priceMatch) {
        const price = Number(priceMatch[1].replace(/,/g, ''));
        if (price > 10000) prices.push(price);
      }
    });
    return prices.slice(0, 15);
  } catch (e) {
    return [];
  }
}

async function crawlDanggeun({ instrument, brand, model }) {
  try {
    const q = encodeURIComponent([brand, model, instrument].filter(Boolean).join(' '));
    const url = `https://www.daangn.com/search/${q}`;
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const $ = cheerio.load(html);
    const prices = [];
    $('.card-desc .card-price').each((i, el) => {
      const priceText = $(el).text().replace(/[^0-9]/g, '');
      if (priceText) prices.push(Number(priceText));
    });
    return prices.slice(0, 15);
  } catch (e) {
    return [];
  }
}

async function crawlAll({ instrument, brand, model, condition }) {
  let prices = [];
  const [b, d, j] = await Promise.all([
    crawlBungaejangter({ instrument, brand, model }),
    crawlDanggeun({ instrument, brand, model }),
    crawlJoonggonara({ instrument, brand, model })
  ]);
  prices = [...b, ...d, ...j];
  // 상태별 가중치(예시)
  if (condition === '최상') prices = prices.map(p => Math.round(p * 1.05));
  if (condition === '하') prices = prices.map(p => Math.round(p * 0.85));
  return prices;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { instrument, brand, model, condition } = req.body;
  // condition은 무시하고 instrument/brand/model만 매칭
  let found = USED_PRICES.find(d => d.instrument === instrument && d.brand === brand && d.model === model);
  if (!found) found = USED_PRICES.find(d => d.instrument === instrument && d.brand === brand);
  if (!found) found = USED_PRICES.find(d => d.instrument === instrument);
  if (!found) found = USED_PRICES[0];
  if (!found) found = { bunjang: 500000, daangn: 500000, bunjangCount: 0, daangnCount: 0 };
  // bunjang 우선, 없으면 daangn
  const average = found.bunjang || found.daangn || 500000;
  const count = found.bunjangCount || found.daangnCount || 0;
  res.status(200).json({ average, count });
} 