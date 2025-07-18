import React, { useState, useContext } from "react";
import { uploadProductImage, productService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

export default function ProductRegister() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]); // File[]
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // 이미지 선택
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  // 이미지 삭제
  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
    setPreviewUrls(previewUrls.filter((_, i) => i !== idx));
  };

  // 상품 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!user?.uid) throw new Error("로그인이 필요합니다.");
      // 1. 이미지 업로드
      const imageUrls = [];
      for (const file of images) {
        const url = await uploadProductImage(file, user.uid);
        imageUrls.push(url);
      }
      // 2. 상품 데이터 저장
      await productService.createProduct({
        title,
        price: Number(price),
        description,
        category,
        images: imageUrls,
        createdAt: new Date(),
        sellerId: user.uid,
        status: "active"
      }, user.uid);
      alert("상품이 등록되었습니다!");
      navigate("/");
    } catch (err) {
      alert("상품 등록 실패: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="상품명" required />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="가격" type="number" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="설명" required />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="카테고리" required />
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <div>
        {previewUrls.map((url, idx) => (
          <div key={idx}>
            <img src={url} alt="미리보기" width={100} />
            <button type="button" onClick={() => handleRemoveImage(idx)}>삭제</button>
          </div>
        ))}
      </div>
      <button type="submit" disabled={loading}>{loading ? "등록 중..." : "상품 등록"}</button>
    </form>
  );
}
