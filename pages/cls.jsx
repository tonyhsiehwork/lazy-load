import { useState, useEffect } from "react";

function CLS() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => setIsShow(true), []);
  return (
    <div>
      {!!isShow && (
        <img
          src="https://img.freepik.com/free-photo/water-texture-background-pastel-blue-design_53876-146663.jpg?w=1380&t=st=1669176507~exp=1669177107~hmac=5e3f35aa990d6c65de2dc77cf417c927aaa63fea8d1bd801e491960db5937f0f"
          alt=""
          style={{ width: "100%", maxHeight: "400px" }}
        />
      )}
      <div>
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
        內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉內文拉
      </div>
    </div>
  );
}

export default CLS;
