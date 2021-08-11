const HeroButton = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      {title}
    </button>
  );
};

export default HeroButton;
