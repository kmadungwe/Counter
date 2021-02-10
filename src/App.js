import "./App.css";
import { Component, useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
      <FunctCounter />
      <ColorCount />
    </div>
  );
}

export default App;

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.stay = this.stay.bind(this);
  }

  up() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  down() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  stay() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          height: "10vh",
        }}
      >
        <button onClick={this.up}>up</button>
        <button onClick={this.stay}>Stay</button>
        <button onClick={this.down}>down</button>

        <h1
          style={{
            backgroundColor: "purple",
          }}
        >
          Here is my count! {this.state.count}
        </h1>
      </div>
    );
  }
}

const FunctCounter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(count === 0);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "10vh",
      }}
    >
      <button onClick={increase}>up</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>down</button>

      <h1
        style={{
          backgroundColor: "purple",
        }}
      >
        Here is my functional count! {count}
      </h1>
    </div>
  );
};

const ColorCount = () => {
  const [color, setColor] = useState("black");

  function changeColor() {
    setColor("#dcd0ff");
  }

  function reset() {
    setColor("black");
  }

  function changeDark() {
    setColor("#6600ff");
  }
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
      }}
    >
      <button onClick={changeColor}>up</button>
      <button onClick={reset}>Reset</button>
      <button onClick={changeDark}>down</button>

      <h1
        style={{
          backgroundColor: "purple",
        }}
      >
        Here is my color counter!
      </h1>
    </div>
  );
};
