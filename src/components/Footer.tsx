const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <div className="text-sm text-gray-400 h-12 min-w-full flex justify-center items-center gap-6 bg-dark-background mt-10">
      <span>&copy; {getCurrentYear()} Algimantas Skara</span>
      <span>Full stack developer</span>
    </div>
  );
};

export default Footer;
