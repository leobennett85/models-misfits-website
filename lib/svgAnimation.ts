export function initializeStroke(path: SVGPathElement): number {
  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  return length;
}

export function updateStroke(
  path: SVGPathElement,
  progress: number
) {
  const length = path.getTotalLength();

  path.style.strokeDashoffset = `${length * (1 - progress)}`;
}

export function resetStroke(path: SVGPathElement) {
  const length = path.getTotalLength();

  path.style.strokeDashoffset = `${length}`;
}