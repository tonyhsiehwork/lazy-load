const Video = () => {
  return (
    <div>
      <video loop muted playsinline autoplay="autoplay">
        <source src="/images/gif/water.webm" type="video/webm" />
        <source src="/images/gif/water.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
