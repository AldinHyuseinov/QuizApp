"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../../public/sun.svg";
import moonIcon from "../../public/moon.svg";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center w-6 h-6 text-dark bg-white rounded-full transform ${
    isActive ? "translate-x-0" : "translate-x-6"
  } transition-transform duration-500 ease-in-out`;

  return (
    <div
      className="relative w-14 h-8 rounded-full p-1 cursor-pointer bg-[#ccc]"
      onClick={toggleTheme}
    >
      <button className={switchClasses}>
        {isActive ? (
          <Image src={sunIcon} alt="Icon for toggling theme" width={512} height={512} />
        ) : (
          <Image src={moonIcon} alt="Icon for toggling theme" width={512} height={512} />
        )}
      </button>
    </div>
  );
}
