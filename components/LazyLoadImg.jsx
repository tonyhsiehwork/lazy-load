import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledLazyLoad } from "./LazyLoadImg.styles";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImg = ({ src = "", alt = "", height = 0, width = 0 }) => {
  return (
    <StyledLazyLoad width={width} height={height}>
      <LazyLoadImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        effect="blur"
      />
    </StyledLazyLoad>
  );
};

export default LazyLoadImg;
