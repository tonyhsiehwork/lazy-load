const Video = () => {
  return (
    <div>
      <video
        controls
        preload="none"
        playsinline
        poster="/images/video/video-place-holder.png"
      >
        <source src="/images/gif/water.webm" type="video/webm" />
        <source src="/images/gif/water.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
