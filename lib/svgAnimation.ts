export function hideStroke(path: SVGPathElement) {
  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  return length;
}

export function revealStroke(
  path: SVGPathElement,
  progress: number
) {
  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length * (1 - progress)}`;
}