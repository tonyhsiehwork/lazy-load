import LazyLoadImg from "../components/LazyLoadImg";
import { images } from "../constants/images";
import { StyledContainer } from "./LazyLoadPage.styles";

const LazyLoadPage = () => {
  return (
    <StyledContainer>
      {/* 10 張圖片 */}
      {/* <LazyLoadImg {...images[0]} /> */}
      {images?.length > 0 &&
        images.map((image, index) => <LazyLoadImg key={index} {...image} />)}
    </StyledContainer>
  );
};

export default LazyLoadPage;
