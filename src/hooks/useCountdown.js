import React, { useEffect } from "react";

export function useCountdown(callback, countdown, setCountdown) {
  return useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      callback();
    }
  }, [countdown]);
}
