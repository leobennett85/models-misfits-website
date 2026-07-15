export function getPointAlongPath(
  path: SVGPathElement,
  progress: number
  ): DOMPoint {
    const length = path.getTotalLength();

    return path.getPointAtLength(progress * length);
}

export function getPathLength(path: SVGPathElement): number {
  return path.getTotalLength();
}