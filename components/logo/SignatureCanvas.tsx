"use client";

import { useEffect, useRef, useState } from "react";
import M1 from "./signature/M1";
import Models from "./signature/Models";
import M2 from "./signature/M2";
import Misfits from "./signature/Misfits";

interface Props {
  showM1: boolean;
  showModels: boolean;
  showM2: boolean;
  showMisfits: boolean;
}

export default function SignatureCanvas({
  showM1,
  showModels,
  showM2,
  showMisfits,
}: Props) {
  const m1Ref = useRef<SVGPathElement>(null);
  const modelsRef = useRef<SVGPathElement>(null);

  const m2Ref = useRef<SVGPathElement>(null);
  const misfitsRef = useRef<SVGPathElement>(null);



  const [inkPos, setInkPos] = useState({
    x: 0,
    y: 0,
  });

  const [reveal, setReveal] = useState({
  models: 0,
  misfits: 0,
});

  

  useEffect(() => {
  if (!showM1) return;
  if (!m1Ref.current || !m2Ref.current) return;

  const m1 = m1Ref.current;
  const m2 = m2Ref.current;

  const m1Length = m1.getTotalLength();
  const m2Length = m2.getTotalLength();

  const m1Duration = 2400;
  const liftDuration = 500;
  const m2Duration = 1800;

  const start = performance.now();

  let frame = 0;

  const m1End = m1.getPointAtLength(m1Length);

  const m2Start = m2.getPointAtLength(0);

  const animate = (time: number) => {
    const elapsed = time - start;

    //
    // PHASE 1
    // WRITE M1
    //
    if (elapsed <= m1Duration) {
      const progress = elapsed / m1Duration;

      const point = m1.getPointAtLength(
        m1Length * progress
      );

      setInkPos({
        x: point.x,
        y: point.y,
      });

      setReveal({
  models: Math.min(progress * 26, 26),
  misfits: 0,
});
    }
    //
    // PHASE 2
    // LIFT + GLIDE
    //
    else if (
      elapsed <=
      m1Duration + liftDuration
    ) {
      const progress =
        (elapsed - m1Duration) /
        liftDuration;

      const arcHeight = -12;

      const x =
        m1End.x +
        (m2Start.x - m1End.x) *
          progress;

      const y =
        m1End.y +
        (m2Start.y - m1End.y) *
          progress +
        Math.sin(progress * Math.PI) *
          arcHeight;

      setInkPos({
        x,
        y,
      });
    }

    //
    // PHASE 3
    // WRITE M2
    //
    else if (
      elapsed <=
      m1Duration +
        liftDuration +
        m2Duration
    ) {
      const progress =
        (elapsed -
          m1Duration -
          liftDuration) /
        m2Duration;

      const point = m2.getPointAtLength(
        m2Length * progress
      );

      setInkPos({
        x: point.x,
        y: point.y,
      });
    }

    if (
      elapsed <
      m1Duration +
        liftDuration +
        m2Duration
    ) {
      frame =
        requestAnimationFrame(
          animate
        );
    }
  };

  frame =
    requestAnimationFrame(
      animate
    );

  return () =>
    cancelAnimationFrame(frame);
}, [showM1]);

  return (
    <svg
      viewBox="-300 -50 1400 500"
      width="1800"
      height="700"
      style={{
        overflow: "visible",
      }}
    >
      <defs>
        <filter id="inkGlow">
          <feGaussianBlur
            stdDeviation="1.2"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="modelsRevealMask">
          <rect
            x="94"
            y="108"
            width={reveal.models}
            height="12"
          />
        </clipPath>
      </defs>

      <style>{`
        .draw-m1 {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawM1 2.4s forwards;
        }

        .draw-m2 {
          stroke-dasharray: 2500;
          stroke-dashoffset: 2500;
          animation: drawM2 1.6s forwards;
        }

        @keyframes drawM1 {
          0% {
            stroke-dashoffset: 2000;
          }

          15% {
            stroke-dashoffset: 1850;
          }

          35% {
            stroke-dashoffset: 1400;
          }

          55% {
            stroke-dashoffset: 1150;
          }

          75% {
            stroke-dashoffset: 800;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawM2 {
          0% {
            stroke-dashoffset: 2500;
          }

          20% {
            stroke-dashoffset: 2100;
          }

          45% {
            stroke-dashoffset: 1100;
          }

          75% {
            stroke-dashoffset: 500;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }

        .ink-tip {
          animation: inkPulse 1.4s ease-in-out infinite;
        }

        @keyframes inkPulse {
          0% {
            opacity: .75;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: .75;
          }
        }
      `}</style>

      <g transform="translate(40,40) scale(2)">
        {showModels && (
  <Models ref={modelsRef} />
)}

        {showM1 && (
          <M1 ref={m1Ref} />
        )}

        {showMisfits && <Misfits ref={misfitsRef} />}
        {showM2 && <M2 ref={m2Ref} />}

        {(showM1 || showM2) && (
          <circle
            className="ink-tip"
            cx={inkPos.x}
            cy={inkPos.y}
            r="3"
            fill="#4E647C"
            filter="url(#inkGlow)"
          />
        )}
      </g>
    </svg>
  );
}