"use client";

import { useEffect, useRef } from "react";
import Signature from "./Signature";
import useSignatureAnimation from "@/hooks/useSignatureAnimation";

export default function SignatureCanvas() {
  const svgRef = useRef<SVGSVGElement>(null);

  const animation = useSignatureAnimation(4000);

  useEffect(() => {
    if (!svgRef.current) return;

    const m1 = svgRef.current.querySelector<SVGPathElement>("#m1");

    if (!m1) return;

    const length = m1.getTotalLength();

    const point = m1.getPointAtLength(
      animation.progress * length
    );

    console.clear();

    console.log("Progress:", animation.progress.toFixed(3));

    console.log("Point:", {
      x: point.x.toFixed(2),
      y: point.y.toFixed(2),
    });
  }, [animation.progress]);

  return (
    <Signature
      ref={svgRef}
      width={900}
      style={{
        color: "#4E647C",
      }}
    />
  );
}