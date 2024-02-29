"use client";

import { ErrorProps } from "@/src/types";
import { useEffect } from "react";

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center">
      <h2>Something went wrong!</h2>
      <button
        className="border-black rounded p-2 m-1 bg-red-500 hover:bg-red-600 hover:text-white hover:dark:text-black"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
