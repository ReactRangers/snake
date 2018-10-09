import * as React from 'react';

import Fruit from './Fruit';
import Snake from './Snake';
import SnakeObject from './SnakeObject';
import * as ruleset from './ruleset/';

const tickDelay = 150;

export default class SnakeGame extends React.Component {
  static defaultProps = {
    width: 640,
    height: 480,
    backgroundColor: 'white',
    newFruitProbability: 0.2,
    newFruitSize: 40,
    fruitExpirationAge: 30,
  };

  constructor(props) {
    super(props);
    this.state = {
      segments: [
        new SnakeObject({
          x: this.props.width / 2,
          y: this.props.height / 2,
          r: 10,
        }),
      ],
      fruits: [],
      direction: 90,
      running: true,
      ticks: 0,
      growth: 5,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown);
    this._intervalId = setInterval(() => {
      const { noCrossing, ...rest } = ruleset;
      [noCrossing, ...Object.values(rest)].forEach((rule) => {
        if (this.state.running) {
          this.setState(rule);
        }
      });
    }, tickDelay);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
    document.removeEventListener('keydown', this._onKeyDown);
  }

  _onKeyDown = ({ keyCode }) => this.setState(() => {
    const direction = {
      37: 270, // left
      38: 0, // up
      39: 90, // right
      40: 180, // down
    }[keyCode];
    return {
      ...(direction != null && { direction }),
    };
  });

  render() {
    const {
      props: { width, height, backgroundColor },
      state: { fruits, segments, ticks },
    } = this;
    const time = (ticks * tickDelay / 1000).toFixed(2);
    return (
      <svg style={{ width, height, backgroundColor }}>
        <text y={20}>Score: {time} s and {segments.length} segments</text>
        {fruits.map(fruit => <Fruit {...fruit} />)}
        <Snake {...{ segments }} />
      </svg>
    )
  }
}
