const TextButton = ({ onClick, title }) => {
  return (
    <span
      onClick={onClick}
      className="inline-block align-baseline font-bold text-sm cursor-pointer"
    >
      {title}
    </span>
  );
};

export default TextButton;
