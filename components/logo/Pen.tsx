"use client";

interface PenProps {
  x: number;
  y: number;
  visible?: boolean;
}

export default function Pen({
  x,
  y,
  visible = true,
}: PenProps) {
  if (!visible) return null;

  return (
    <circle
      cx={x}
      cy={y}
      r={3}
      fill="#4E647C"
    />
  );
}