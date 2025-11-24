"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface FavoriteButtonProps {
  propertyId: string;
  initialIsFavorite: boolean;
  isLoggedIn: boolean;
}

export function FavoriteButton({ 
  propertyId, 
  initialIsFavorite,
  isLoggedIn 
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleToggleFavorite = async () => {
    if (!isLoggedIn) {
      router.push("/user-login");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/favorites", {
          method: isFavorite ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ propertyId }),
        });

        if (response.ok) {
          setIsFavorite(!isFavorite);
          router.refresh();
        }
      } catch (error) {
      }
    });
  };

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isPending}
      className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow-lg transition-all ${
        isPending ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
      } ${
        isFavorite 
          ? "bg-white" 
          : "bg-white/80 hover:bg-white"
      }`}
      title={isFavorite ? "Poista suosikeista" : "Lisää suosikkeihin"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 transition-colors ${
          isFavorite 
            ? "fill-red-500 stroke-red-500" 
            : "fill-none stroke-gray-600"
        }`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
