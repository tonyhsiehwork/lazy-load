const ImageComponent = ({ src = "", alt = "", height = 0, width = 0 }) => {
  return (
    <img
      src={src}
      style={{ aspectRatio: `${width} / ${height}`, width: "100%", }}
      alt="height = width / aspect-ratio"
    />
  );
};

export default ImageComponent;
