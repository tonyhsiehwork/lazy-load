import ImageComponent from "../../components/ImageComponent/ImageComponent";
import { images } from "../../constants/images";
import { StyledContainer } from "./NormalPage.styles";

const NormalPage = () => {
  return (
    <StyledContainer>
      {/* 10 張圖片 */}
      {images?.length > 0 &&
        images
          .slice(0, 1)
          .map((image, index) => <ImageComponent key={index} {...image} />)}

      <div>
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
        內容內容內容內容內容內容內容內容內容內容內容內容內容
      </div>
    </StyledContainer>
  );
};

export default NormalPage;
