import ReactLazyLoad from "react-lazyload";

function LazyLoadElement() {
  return (
    <ReactLazyLoad height={200} offset={100}>
      <div />
    </ReactLazyLoad>
  );
}

export default LazyLoadElement;
