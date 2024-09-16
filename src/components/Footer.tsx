const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <div className="w-full h-12 flex justify-center items-center bg-dark-background">
      <span className="text-sm text-white">
        &copy; {getCurrentYear()} Algimantas Skara
      </span>
    </div>
  );
};

export default Footer;
