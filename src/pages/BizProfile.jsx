import React, { useState, useEffect } from "react";

export default function BizProfile() {
  const [profile, setProfile] = useState({ name: "", phone: "", desc: "" });
  useEffect(() => {
    const saved = localStorage.getItem("bizProfile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };
  const handleSave = () => {
    localStorage.setItem("bizProfile", JSON.stringify(profile));
    alert("저장되었습니다!");
  };
  return (
    <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>
        비즈프로필 관리
      </h2>
      <div style={{ marginBottom: 14 }}>
        <label>
          상호명
          <br />
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label>
          연락처
          <br />
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label>
          소개
          <br />
          <textarea
            name="desc"
            value={profile.desc}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
      </div>
      <button
        onClick={handleSave}
        style={{
          padding: "10px 24px",
          background: "#2ed8b6",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontWeight: 700,
        }}
      >
        저장
      </button>
    </div>
  );
}
