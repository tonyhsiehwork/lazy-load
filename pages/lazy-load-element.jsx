import LazyLoad from "react-lazyload";

function LazyLoad() {
  return (
    <LazyLoad height={200} offset={100}>
      <MyComponent />
    </LazyLoad>
  );
}

export default LazyLoad;
