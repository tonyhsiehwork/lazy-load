import styled from 'styled-components'

export const StyledLazyLoad = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: ${({ width, height }) => `${width} / ${height}`};

  .lazy-load-image-background {
    display: block;
    width: 100% !important;
    height: auto !important;
    aspect-ratio: ${({ width, height }) => `${width} / ${height}`};

    img {
      width: 100%;
      height: auto;
      aspect-ratio: ${({ width, height }) => `${width} / ${height}`};
    }
  }
`