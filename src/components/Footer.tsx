const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <div className="text-sm text-gray-400 w-full h-12 flex justify-center items-center gap-6 bg-dark-background mt-10">
      <span>&copy; {getCurrentYear()} Algimantas Skara</span>
      <span>Full stack developer</span>
    </div>
  );
};

export default Footer;
