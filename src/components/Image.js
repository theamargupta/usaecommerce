const ImageComponent = ({ src, ...props }) => {
  return <img src={src} {...props} alt='' />;
};

export default ImageComponent;
