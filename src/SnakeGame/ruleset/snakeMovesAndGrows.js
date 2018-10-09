export default ({
  segments,
  segments: [head, ...tail],
  direction,
  growth,
  ticks,
}, { width: w, height: h }) => {
  const headSize = 2 * head.r;
  const rad = direction * Math.PI / 180;
  const tailEnd = segments[segments.length - 1];
  return {
    segments: [
      head.cloneWith({
        x: (head.x + headSize * Math.sin(rad) + w) % w,
        y: (head.y + headSize * -Math.cos(rad) + h) % h,
      }),
      ...tail.map((s, index) => {
        const { [index]: { x, y } } = segments;
        return s.cloneWith({ x, y });
      }),
      ...(growth ? [tailEnd.cloneWith({ key: undefined }),
      ] : []),
    ],
    growth: Math.max(growth - 1, 0),
    ticks: ticks + 1,
  };
}
