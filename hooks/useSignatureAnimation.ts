import { useCallback, useEffect, useRef, useState } from "react";

export interface SignatureAnimation {
  progress: number;
  playing: boolean;
  finished: boolean;
  restart: () => void;
}

export default function useSignatureAnimation(
  duration = 4000
): SignatureAnimation {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);

  const startTime = useRef<number | null>(null);

  const restart = useCallback(() => {
    startTime.current = null;
    setProgress(0);
    setFinished(false);
    setPlaying(true);
  }, []);

  useEffect(() => {
    if (!playing) return;

    let frameId: number;

    const animate = (time: number) => {
      if (startTime.current === null) {
        startTime.current = time;
      }

      const elapsed = time - startTime.current;

      const value = Math.min(elapsed / duration, 1);

      setProgress(value);

      if (value >= 1) {
        setFinished(true);
        setPlaying(false);
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [duration, playing]);

  return {
    progress,
    playing,
    finished,
    restart,
  };
}