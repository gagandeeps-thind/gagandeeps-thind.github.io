import { useEffect, useState } from "react";

export default function LuxuryBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = (factor) => `${scrollY * factor}px`;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base layer */}
      <div
        className="absolute inset-0 transition-transform duration-300"
        style={{
          background: `radial-gradient(circle at ${50 + scrollY * 0.05}% ${30 + scrollY * 0.05}%, #1a1a1a, #000000 80%)`,
          transform: `translateY(${parallax(0.1)})`,
        }}
      />

      {/* Purple glow orb */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500 opacity-20 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallax(0.25)})` }}
      />

      {/* Amber glow orb */}
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-400 opacity-20 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallax(0.4)})` }}
      />

      {/* Soft noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
