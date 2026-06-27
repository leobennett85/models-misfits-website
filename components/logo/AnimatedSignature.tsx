"use client";

import { useEffect, useState } from "react";
import SignatureCanvas from "./SignatureCanvas";

const TIMING = {
  m1Start: 200,
  modelsStart: 2200,
  m2Start: 2800,
  misfitsStart: 4600,
} as const;

export default function AnimatedSignature() {
  const [showM1, setShowM1] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [showM2, setShowM2] = useState(false);
  const [showMisfits, setShowMisfits] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowM1(true), TIMING.m1Start),
      setTimeout(() => setShowModels(true), TIMING.modelsStart),
      setTimeout(() => setShowM2(true), TIMING.m2Start),
      setTimeout(() => setShowMisfits(true), TIMING.misfitsStart),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <SignatureCanvas
      showM1={showM1}
      showModels={showModels}
      showM2={showM2}
      showMisfits={showMisfits}
    />
  );
}