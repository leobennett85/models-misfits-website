"use client";

import { useEffect, useRef } from "react";
import Signature from "./Signature";

export default function SignatureCanvas() {
  console.log("SignatureCanvas");
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
  if (!svgRef.current) return;

  const paths = {
    m1: svgRef.current.querySelector<SVGPathElement>("#m1"),
    odels: svgRef.current.querySelector<SVGPathElement>("#odels"),
    m2: svgRef.current.querySelector<SVGPathElement>("#m2"),
    isfits: svgRef.current.querySelector<SVGPathElement>("#isfits"),
  };

  console.log(paths);
}, []);

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