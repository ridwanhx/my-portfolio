import { useEffect, useRef, useState } from "react";
import { BOOT_SEEN_KEY } from "./bootState";

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

const WORD_INTERVAL = 160;
const EXIT_DELAY = 1400;
const EXIT_DURATION = 500;

const BootScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // simpan callback di ref agar effect tidak ter-reset saat parent re-render
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === BOOT_WORDS.length - 1) {
          clearInterval(wordInterval);
          return prev;
        }
        return prev + 1;
      });
    }, WORD_INTERVAL);

    const exitTimeout = setTimeout(() => setIsExiting(true), EXIT_DELAY);

    const completeTimeout = setTimeout(() => {
      try {
        sessionStorage.setItem(BOOT_SEEN_KEY, "1");
      } catch {
        // abaikan
      }
      onCompleteRef.current();
    }, EXIT_DELAY + EXIT_DURATION);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-slate-50 z-60 flex items-center justify-center transition-transform duration-500 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div className="text-center">
        <p
          className={`text-4xl md:text-6xl font-bold tracking-tight ${BOOT_WORDS[currentIndex].color}`}
        >
          {BOOT_WORDS[currentIndex].text}
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
