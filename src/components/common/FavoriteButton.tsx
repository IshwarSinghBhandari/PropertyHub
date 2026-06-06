"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsFavorite((prev) => !prev);
      }}
      className=" p-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:scale-110 transition-all duration-300"
    >
      <Heart
        className={`h-4 w-4 transition-all duration-300 ${
          isFavorite ? "fill-red-500 text-red-500 scale-110" : ""
        }`}
      />
    </button>
  );
}