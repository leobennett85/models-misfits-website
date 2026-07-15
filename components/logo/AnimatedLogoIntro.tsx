"use client";

import { useEffect, useState } from "react";
import SignatureCanvas from "./SignatureCanvas";

interface AnimatedLogoIntroProps {
  onComplete: () => void;
}

export default function AnimatedLogoIntro({
  onComplete,
}: AnimatedLogoIntroProps) {
  const [shrink, setShrink] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const shrinkTimer = setTimeout(() => {
      setShrink(true);
    }, 10000);

    const completeTimer = setTimeout(() => {
      setHidden(true);
      onComplete();
    }, 30000);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#f8f4ef]
        overflow-hidden
      "
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transformOrigin: "center center",
          transform: shrink
            ? "translate(-50%,-50%) translateY(-15vh) scale(.25)"
            : "translate(-50%,-50%) scale(1)",
          transition:
            "transform 2400ms cubic-bezier(.22,1,.36,1)",
        }}
      >

        <SignatureCanvas />
      </div>
    </div>
  );
}