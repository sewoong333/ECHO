import React, { useState, useEffect } from "react";

export default function ReservationManage() {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("myReservations");
    if (saved) setReservations(JSON.parse(saved));
  }, []);
  const handleStatus = (id, status) => {
    const newList = reservations.map((r) =>
      r.id === id ? { ...r, status } : r,
    );
    setReservations(newList);
    localStorage.setItem("myReservations", JSON.stringify(newList));
  };
  return (
    <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>
        예약관리
      </h2>
      {reservations.length === 0 && (
        <div style={{ color: "#bbb" }}>예약 내역이 없습니다.</div>
      )}
      {reservations.map((r) => (
        <div
          key={r.id}
          style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 4px #b2f0e6",
            padding: 16,
            marginBottom: 14,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
            {r.title}
          </div>
          <div style={{ color: "#888", marginBottom: 8 }}>상태: {r.status}</div>
          <button
            onClick={() =>
              handleStatus(r.id, r.status === "대기" ? "완료" : "대기")
            }
            style={{
              padding: "6px 16px",
              background: "#2ed8b6",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            {r.status === "대기" ? "완료로 변경" : "대기로 변경"}
          </button>
        </div>
      ))}
    </div>
  );
}
