import ImageComponent from "../components/ImageComponent/ImageComponent";

function ImageBeforeAfter() {
  return (
    <div>
      <ImageComponent src="/images/01.jpg" />
      <ImageComponent src="/image-compress/01-compress.jpg" />
    </div>
  );
}

export default ImageBeforeAfter;
