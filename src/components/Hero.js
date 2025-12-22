import React from "react";
import "./../App.css";

function Hero() {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = 200;
      const newOpacity = Math.max(0, 1 - scrollY / fadePoint);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="HeroSec" style={{ opacity }}>
      <h1>Hello,</h1>
    </section>
  );
}

export default Hero;
