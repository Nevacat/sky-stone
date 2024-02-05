"use client";
import React, { useEffect } from "react";

const Upbutton = () => {
  const [scrollY, setScrollY] = React.useState(0);

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      {scrollY > 100 && (
        <button
          onClick={upScroll}
          className="w-12 h-12 text-xl fixed right-10 bottom-10 bg-gray-200 rounded-full"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Upbutton;
