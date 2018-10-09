import SnakeObject from '../SnakeObject';

export default ({
  fruits,
  segments,
}, {
  width,
  height,
  newFruitProbability,
  newFruitSize,
}) => {
  if (Math.random() > newFruitProbability) {
    return null;
  }
  const newFruit = new SnakeObject({
    x: Math.random() * width,
    y: Math.random() * height,
    r: newFruitSize / 2,
    age: 0,
  });
  const collides = segments.concat(fruits).some(
    s => s.collidesWith(newFruit),
  );
  return {
    fruits: fruits.concat(collides ? [] : [newFruit]),
  };
}
