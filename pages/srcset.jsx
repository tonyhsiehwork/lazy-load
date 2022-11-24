const Srcset = () => {
  return (
    <div>
      <img
        src="/images/05.jpg"
        srcset="/images/01.jpg 1000w, /images/02.jpg 800w, /images/03.jpg 600w, /images/04.jpg 400w, /images/05.jpg 300w"
        sizes="100vw"
        style={{ aspectRatio: "16 / 9", width: "100%", objectFit: "cover" }}
        alt="圖片 srcset"
      />
    </div>
  );
};

export default Srcset;
