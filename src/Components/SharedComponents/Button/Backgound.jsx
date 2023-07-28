
const Background = ({ src }) => {
  const backgroundStyle = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div
      className="w-full absolute bg-center bg-cover h-screen m-auto py-16 transition-[0.5s] ease-in-out px-4 top-0 group"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-[#080F28] opacity-90"></div>
    </div>
  );
};

export default Background




