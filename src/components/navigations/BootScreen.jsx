import { useEffect, useState } from "react";

const BOOT_WORDS = [
  { text: "Halo", color: "text-amber-500" },
  { text: "Hello", color: "text-indigo-500" },
  { text: "Bonjour", color: "text-emerald-500" },
  { text: "Ciao", color: "text-rose-500" },
  { text: "안녕하세요", color: "text-sky-500" },
  { text: "你好", color: "text-fuchsia-500" },
  { text: "こんにちは", color: "text-violet-500" },
  { text: "Привет", color: "text-teal-500" }
];

const BootScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === BOOT_WORDS.length - 1) {
          clearInterval(wordInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 2600);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-slate-50 z-50 flex items-center justify-center transition-transform duration-700 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-300 transform scale-100 opacity-100 ${BOOT_WORDS[currentIndex].color}`}
        >
          {BOOT_WORDS[currentIndex].text}
        </h1>
      </div>
    </div>
  );
};

export default BootScreen;