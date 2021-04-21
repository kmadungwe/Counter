import './App.css';
import { Component, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle, faMinusCircle);

function App() {
  return (
    <div
      className='App'
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Counter />
      <FunctCounter />
      {/* <ColorCount /> */}
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
        className='content-wrapper'
        style={{ backgroundColor: 'powderblue' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
          }}
        >
          <button
            className='buttons'
            onClick={this.up}
            // style={{ border: 'none', backgroundColor: 'white' }}
          >
            <FontAwesomeIcon
              icon='plus-circle'
              style={{ height: '50px', width: '50px' }}
            />
          </button>
          <button
            className='buttons'
            onClick={this.stay}
            style={{
              fontSize: '3.5rem',
              // border: 'none',
              // backgroundColor: 'white',
            }}
          >
            Reset
          </button>
          <button
            className='buttons'
            onClick={this.down}
            // style={{ border: 'none', backgroundColor: 'white' }}
          >
            <FontAwesomeIcon
              icon='minus-circle'
              style={{ height: '50px', width: '50px' }}
            />
          </button>
        </div>
        <h1>Here is my count! {this.state.count}</h1>
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
    setCount(0);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className='content-wrapperR'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
        }}
      >
        <button onClick={increase} className='buttons'>
          <FontAwesomeIcon
            icon='plus-circle'
            style={{ height: '50px', width: '50px' }}
          />
        </button>
        <button
          onClick={reset}
          className='buttons'
          style={{ fontSize: '3.5rem' }}
        >
          Reset
        </button>
        <button onClick={decrease} className='buttons'>
          <FontAwesomeIcon
            icon='minus-circle'
            style={{ height: '50px', width: '50px' }}
          />
        </button>
      </div>

      <h1>Here is my functional count! {count}</h1>
    </div>
  );
};

// const ColorCount = () => {
//   const [color, setColor] = useState("black");

//   function changeColor() {
//     setColor("#dcd0ff");
//   }

//   function reset() {
//     setColor("black");
//   }

//   function changeDark() {
//     setColor("#6600ff");
//   }
//   return (
//     <div
//       style={{
//         backgroundColor: color,
//         height: "100vh",
//       }}
//     >
//       <button onClick={changeColor}>up</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={changeDark}>down</button>

//       <h1
//         style={{
//           backgroundColor: "purple",
//         }}
//       >
//         Here is my color counter!
//       </h1>
//     </div>
//   );
// };
