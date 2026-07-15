export interface StrokeAnimation {
  path: SVGPathElement;
  length: number;
}

export function initializeStroke(path: SVGPathElement): StrokeAnimation {
  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  return {
    path,
    length,
  };
}

export function updateStroke(
  stroke: StrokeAnimation,
  progress: number
) {
  stroke.path.style.strokeDashoffset =
    `${stroke.length * (1 - progress)}`;
}

export function resetStroke(
  stroke: StrokeAnimation,
  progress: number
) {
  stroke.path.style.strokeDashoffset =
    `${stroke.length - progress}`;
}