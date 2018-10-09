export default ({ segments: [head, ...tail] }) => ({
  running: !tail.some(s => s.collidesWith(head)),
});
