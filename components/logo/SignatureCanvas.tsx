"use client";

import { useEffect, useRef, useState } from "react";
import Pen from "./Pen";

const PATH_SEGMENTS = [
  // 0: Initial "m" segment
  "m -66.10119,135.20037 c 0,0 17.096034,-9.74059 31.659308,-10.58773 14.5633,-0.84708 -31.975902,34.0 -31.975902,34.0 0,0 43.207323,-33.5 66.2356529,-36.5 21.5283611,-3.81155 -34.5086339,27.10471 -34.5086339,27.10471 0,0 56.35358,-26.96357 82.314197,-31.62215 25.960654,-4.6585 -114.599257,66.08175 -67.139837,60.89105",
  
  // 1: Body text segment ("odels") - Positioned on baseline
  "m 15.3428277,150.47913 c 0,0 5.0993347,-1.85658 5.8642497,-1.617 0.764893,0.23949 0.701169,-1.3775 0,-1.01804 -0.701162,0.35936 -3.5695288,2.27583 -3.2508241,3.23392 0.3187051,0.95832 3.0595951,0.7787 4.2707051,0.47924 1.211109,-0.29945 3.123335,-1.85667 3.250841,-2.27578 0.127508,-0.41934 -1.97601,-1.1979 -3.314596,-1.0183 -1.338583,0.17986 2.29473,3.65328 5.481811,2.15616 3.187066,-1.49729 5.92796,-2.57524 6.629124,-2.75488 0.701162,-0.17982 -6.884106,2.57511 -6.182943,3.59335 0.701162,1.01804 3.569523,-0.0596 5.609256,-1.2578 2.039739,-1.19777 6.310484,-5.86916 6.374211,-6.46807 0.06391,-0.59885 -4.270719,3.17422 -5.035609,4.13252 -0.764915,0.9581 0.76489,2.87458 1.848511,3.23395 1.083587,0.3594 1.593521,0.3594 1.975979,0.29948 0.382457,-0.0596 4.780655,-1.6769 6.055509,-2.27584 1.274819,-0.59896 1.657277,-1.49732 1.019868,-1.73683 -0.637441,-0.23956 -3.059607,0.65888 -3.888275,1.85669 -0.828638,1.19766 0.764915,2.33557 1.466077,2.27567 0.701166,-0.0596 4.90811,-0.11974 7.967711,-2.15602 3.059604,-2.03621 5.92799,-4.61137 5.673034,-5.62962 -0.255024,-1.01804 -3.569542,0.95835 -4.334464,1.91651 -0.764884,0.95823 -2.549666,4.61151 -2.167209,5.03069 0.382458,0.41927 2.740901,1.19776 3.760768,1.01824 1.019866,-0.1798 8.987603,-3.4138 9.625044,-3.4138 0.637408,0 1.274817,1.01805 0.382426,2.03635 -0.892392,1.01798 -2.039734,2.39542 -2.358438,2.2159 -0.318707,-0.17981 -1.147348,-0.95835 -0.382463,-0.95835 0.764921,0 1.2111,0.77854 2.230967,0.47924 1.019867,-0.29946 2.167209,-0.53914 2.740895,-0.7787",
  
  // 2: Plus sign (+)
  "m 80.851282,147.47913 5.864255,-3.05433 c 0,0 -5.481797,5.50993 -6.374188,5.68957 -0.892359,0.1796 -6.310433,-3.23409 -6.310433,-4.37189 0,-1.1379 0.701161,-2.6352 3.505816,-2.15613 2.804617,0.47924 6.119199,3.23412 4.525645,6.04894 -1.593521,2.81481 -3.378303,2.2159 -3.378303,2.2159 0,0 3.123353,-1.85671 4.14322,-1.43735 1.019873,0.41911 3.314556,0.35936 3.697014,0.17955",
  
  // 3: Second heavy M flourish loop sequence
  "m 100.634167,130.73751 c 0,0 15.222837,-10.58112 46.116222,-13.37615 30.89332,-2.79504 -54.548113,36.53495 -54.548113,36.53495 0,0 67.084543,-40.12851 74.695943,-38.13201 7.6114,1.99644 -32.23652,25.55435 -38.05699,28.94837 -5.82048,3.39402 56.86162,-27.15171 89.99365,-32.54197 33.13225,-5.39048 -68.95038,19.1658 -65.36854,54.90215 3.58182,35.73621 155.81022,-43.92184 155.81022,-43.92184",
  
  // 4: Text segment "isfits" - Flattened and aligned to baseline
  "m 184.43685, 147.47913 c 0,0 2.6995,-1.52756 3.40506,-1.49889 0.70553,0.0299 0.39876,2.30574 2.20867,2.44992 1.80988,0.1441 9.7243,-3.66048 10.49121,-3.54503 0.76694,0.1152 -0.92029,3.91982 -1.90194,4.23687 -0.98161,0.31693 -1.34973,-0.69184 -1.28838,-0.89362 0.0614,-0.20177 0.70557,-0.6053 1.19635,-0.28809 0.49082,0.31702 1.22706,0.51879 1.9633,0.51879 0.73625,0 6.84081,-2.82472 8.68136,-4.32339 1.84058,-1.49865 1.77923,-3.60282 1.28841,-3.80458 -0.49082,-0.20177 -5.27628,2.99751 -5.76711,7.83963 -0.49082,4.8421 0.4327,8.34229 0.80082,8.42877 2.06778,1.63235 1.80968,-6.55335 0.95586,-9.71321 1.22703,-1.26803 5.90263,1.15542 6.51616,0.78058 0.714,-0.30754 2.02826,-2.41271 2.10188,-3.17045 0.95095,-0.17308 -1.20304,3.30135 -0.58951,3.44534 0.61353,0.14413 2.54656,1.03604 5.12335,0.14204 2.57679,-0.89354 9.90839,-5.73566 9.41756,-6.45615 -0.49082,-0.72057 -5.52169,6.25438 -4.75477,6.85952 0.76687,0.60527 4.80959,0.46704 7.17165,-0.34003 3.58061,-0.57255 3.66377,-3.34984 3.89709,-3.48723 2.14731,0.23046 1.2729,3.71019 0.99681,3.76783 -0.27621,0.0572 -3.07749,-0.68557 -2.83208,-1.08911 0.24535,-0.40348 2.49377,0.33463 2.73918,0.47879 0.24534,0.14417 3.78657,-1.06589 4.06267,-0.92175",
  
  // 5: Final flourish stroke tail
  "m 232.82862, 140.2946 c 0,0 -5.79781,0.66292 -7.51566,0.34591",
  
  // 6: DOUBLE SIZE HEART
  "m 217.21287,139.71936 c 0,0 3.61982,-0.40356 3.74252,-1.49844 0.1228,-1.09532 -0.30676,-1.49888 -0.30676,-1.49888 0,0 -0.9203,-0.63406 -1.28842,-0.28836 -0.36786,0.346 -0.36786,0.1144 -0.36786,0.346 0,0.23062 -0.1228,-1.15308 -0.67488,-1.15308 -0.5518,0 -1.71782,0.23046 -1.77916,0.74966 -0.0624,0.51882 -0.73624,0.40342 0,1.61374"
];
function staggerPacing(x: number): number {
  if (x < 0.25) {
    return Math.pow(x * 4, 3) * 0.22;
  } else if (x < 0.30) {
    return 0.22 + (x - 0.25) * 0.4;
  } else if (x < 0.65) {
    return 0.24 + Math.sin(((x - 0.3) / 0.35) * (Math.PI / 2)) * 0.48;
  } else {
    return 0.72 + (1 - Math.pow(1 - (x - 0.65) / 0.35, 3)) * 0.28;
  }
}

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  tx: number;
  ty: number;
}

export default function SignatureCanvas() {
  const containerRef = useRef<SVGGElement>(null);
  const [penPos, setPenPos] = useState({ x: -66.1, y: 135.2 });
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const sparkleIdCounter = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const paths = Array.from(containerRef.current.querySelectorAll(".draw-path")) as SVGPathElement[];
    const lengths = paths.map((p) => p.getTotalLength());
    const totalLength = lengths.reduce((sum, len) => sum + len, 0);

    paths.forEach((path, i) => {
      path.style.strokeDasharray = `${lengths[i]} ${lengths[i]}`;
      path.style.strokeDashoffset = `${lengths[i]}`;
    });

    const duration = 5000; 
    let frameId = 0;
    let startTime: number | null = null;
    let lastPenPos = { x: -66.1, y: 135.2 };

    const colors = ["#ff00ff", "#00ffff", "#ffcc00", "#ff3366", "#33ccff", "#af40ff", "#ffffff"];

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const staggeredProgress = staggerPacing(linearProgress);

      const targetGlobalLength = staggeredProgress * totalLength;
      let accumulatedLength = 0;
      let currentPos = { ...lastPenPos };

      paths.forEach((path, i) => {
        const pathLength = lengths[i];
        const startThreshold = accumulatedLength;
        const endThreshold = accumulatedLength + pathLength;

        if (targetGlobalLength <= startThreshold) {
          path.style.strokeDashoffset = `${pathLength}`;
        } else if (targetGlobalLength >= endThreshold) {
          path.style.strokeDashoffset = "0";
        } else {
          const localProgress = targetGlobalLength - startThreshold;
          path.style.strokeDashoffset = `${pathLength - localProgress}`;

          try {
            const point = path.getPointAtLength(localProgress);
            currentPos = { x: point.x, y: point.y };
            setPenPos(currentPos);
          } catch (e) {}
        }
        accumulatedLength += pathLength;
      });

      if (linearProgress < 1 && (currentPos.x !== lastPenPos.x || currentPos.y !== lastPenPos.y)) {
        const newSparkles: SparkleParticle[] = Array.from({ length: 3 }).map(() => {
          const angle = Math.random() * Math.PI * 2;
          const distance = 4 + Math.random() * 12; 
          return {
            id: sparkleIdCounter.current++,
            x: currentPos.x,
            y: currentPos.y,
            size: 0.5 + Math.random() * 0.1, 
            color: colors[Math.floor(Math.random() * colors.length)],
            tx: Math.cos(angle) * distance,
            ty: Math.sin(angle) * distance,
          };
        });
        setSparkles((prev) => [...prev.slice(-20), ...newSparkles]);
      }

      lastPenPos = currentPos;

      if (linearProgress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div 
      style={{ 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#000000"
      }}
    >
      <style>{`
        @keyframes prismShift {
          0% { stop-color: #f8f4ef; }
          20% { stop-color: #ff33aa; }
          40% { stop-color: #00bfff; }
          60% { stop-color: #ffaa00; }
          80% { stop-color: #9d00ff; }
          100% { stop-color: #f8f4ef; }
        }
        @keyframes sparkleBurst {
          0% { transform: translate(0, 0) scale(0) rotate(-360deg); opacity: 1; }
          20% { transform: translate(0, 0) scale(2) rotate(-145deg); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0) rotate(360deg); opacity: 0; }
        }
        .prism-stop-1 { animation: prismShift 4s infinite linear; }
        .prism-stop-2 { animation: prismShift 4s infinite linear 0.5s; }
        .prism-stop-3 { animation: prismShift 4s infinite linear 1s; }
        .prism-stop-4 { animation: prismShift 4s infinite linear 1.5s; }
        .prism-stop-5 { animation: prismShift 4s infinite linear 2s; }
      `}</style>

      <svg
        viewBox="-92 100 420 80" /* Decrease last two numbers to increase w and h */
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "85vw",        
          height: "auto",       
          overflow: "visible",  
        }}
      >
        <defs>
          
 

          {/* --- ACTIVE: BLACK INK VERSION */}
          <linearGradient id="prismBurnGradient">
            <stop offset="0%" stopColor="#000000" />
          </linearGradient>

          <filter id="burnSparkle" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="0.2" result="coreBlur" />
            <feGaussianBlur stdDeviation="2.5" result="rayBlur" />
            
            <feSpecularLighting surfaceScale="10" specularConstant="2.5" specularExponent="" lightingColor="#f8ffbb" in="rayBlur" result="specularBeams">
              <feDistantLight azimuth="50" elevation="60" />
            </feSpecularLighting>
            <feComposite in="specularBeams" in2="rayBlur" operator="in" result="combBeams" />

            <feComponentTransfer in="combBeams" result="brightBeams">
              <feFuncA type="linear" slope="6" />
            </feComponentTransfer>
            
            <feMerge>
              <feMergeNode in="brightBeams" />
              <feMergeNode in="coreBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
          <g
            ref={containerRef}
            style={{
              fill: "none",
              stroke: "#ffffff", // Switched from gradient to solid black
              strokeWidth: 1, 
              vectorEffect: "non-scaling-stroke", 
              strokeLinecap: "butt",
              strokeLinejoin: "bevel",
              filter: 'drop-shadow(0px 0px 3px #ffffff)', // Adjust the 8px for glow intensity
            }}
          >
          {PATH_SEGMENTS.map((d, index) => (
            <path 
              key={`stroke-${index}`} 
              className="draw-path" 
              d={d} 
            />
          ))}
        </g>
        
  
      {sparkles.map((sparkle) => (
        <path
          key={sparkle.id}
          /* Elongated "Twilight" Path: Long points (size) vs thin width (0.05) */
        
          d={`M ${sparkle.x} ${sparkle.y - sparkle.size * 12} 
              L ${sparkle.x + sparkle.size * 0.1} ${sparkle.y - sparkle.size * 0.1} 
              L ${sparkle.x + sparkle.size * 12} ${sparkle.y} 
              L ${sparkle.x + sparkle.size * 0.1} ${sparkle.y + sparkle.size * 0.1} 
              L ${sparkle.x} ${sparkle.y + sparkle.size * 12} 
              L ${sparkle.x - sparkle.size * 0.1} ${sparkle.y + sparkle.size * 0.1} 
              L ${sparkle.x - sparkle.size * 12} ${sparkle.y} 
              L ${sparkle.x - sparkle.size * 0.1} ${sparkle.y - sparkle.size * 0.1} Z`}
          fill="#ffffff"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            filter: "drop-shadow(0px 0px 5px 5px #e7fdcf)",
            opacity:0.2, // Keep it translucent
            "--tx": `${sparkle.tx}px`,
            "--ty": `${sparkle.ty}px`,
            // Smoother, longer duration for a "twilight" drift
            animation: "sparkleBurst 5s ease-out forwards", 
          } as React.CSSProperties}
        />
      ))}

        <g style={{ display: "none", visibility: "hidden", opacity: 0 }}>
          <Pen x={penPos.x} y={penPos.y} />
        </g>
      </svg>
    </div>
  );
}