"use client";

import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

export default function SignatureCanvas() {
  const svgRef = useRef<SVGSVGElement>(null);

  const [penPos, setPenPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const m1 = svgRef.current.querySelector<SVGPathElement>("#m1");

    if (!m1) return;

    const length = m1.getTotalLength();

    let distance = 0;
    let animationFrame: number;

    const animate = () => {
      distance += 1;

      if (distance > length) {
        distance = 0;
      }

      const point = m1.getPointAtLength(distance);

      setPenPos({
        x: point.x,
        y: point.y,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    console.log("Pen Position:", penPos);
  }, [penPos]);

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