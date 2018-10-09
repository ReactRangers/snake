let count = 0;

export default class SnakeObject {
  constructor(props) {
    const { key = count++ } = props;
    Object.assign(this, props, { key });
  }

  collidesWith(b) {
    const a = this;
    return Math.abs(a.x - b.x) < a.r + b.r
      && Math.abs(a.y - b.y) < a.r + b.r;
  }

  cloneWith(props) {
    return new this.constructor({ ...this, ...props });
  }
}
