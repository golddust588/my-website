const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  return (
    <div className="text-sm text-gray-400 h-12 min-w-[400px] w-full flex justify-center items-center gap-6 bg-dark-background mt-10">
      <div className="flex gap-4">
        <span>&copy; {getCurrentYear()} Algimantas Skara</span>
        <span>Full stack developer</span>
      </div>
    </div>
  );
};

export default Footer;
