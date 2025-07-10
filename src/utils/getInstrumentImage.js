// 악기명에 따라 Unsplash 이미지를 반환하는 함수
export default function getInstrumentImage(title) {
  if (title.includes("기타"))
    return "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80";
  if (title.includes("신디사이저"))
    return "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80";
  if (title.includes("피아노"))
    return "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80";
  if (title.includes("드럼"))
    return "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80";
  if (title.includes("색소폰"))
    return "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=400&q=80";
  if (title.includes("플룻"))
    return "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80";
  if (title.includes("오디오 인터페이스"))
    return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80";
  if (title.includes("바이올린"))
    return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
  // 기본 이미지
  return "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80";
}
