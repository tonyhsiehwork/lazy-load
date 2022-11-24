const Source = () => {
  return (
    <picture>
      <source srcset="/images/01.jpg" media="(min-width: 800px)" />
      <source srcset="/images/02.jpg" media="(min-width: 500px)" />
      <img
        src="/images/03.jpg"
        style={{ aspectRatio: "16 / 9", width: "100%", objectFit: "cover" }}
        alt="height = width / aspect-ratio"
      />
    </picture>
  );
};

export default Source;
