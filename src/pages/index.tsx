import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  const onClick = () => {
    alert("click");
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center mt-20">
        <div className="flex">
          <div>
            <h2 className="text-3xl font-semibold">Hello, I am</h2>
            <h1 className="text-4xl font-semibold">Algimantas</h1>
            <p>Freelance full stack developer</p>
            <div className="flex">
              <Button text="About me" onClick={onClick} />
              <Button text="Projects" onClick={onClick} transparent />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
