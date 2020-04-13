import React, { Component } from 'react';
import '../sass/main.css';
import { Button } from './Button.js';
import { Input } from './Input.js';
import { Clearbutton } from './Clearbutton.js';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) })
  }

  render() {
    return (
      <div className="app">
        <div className="calcWrapper">
          <div className="row">
          <Input input={this.state.input} />
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Clearbutton handleClear={ () => this.setState({ input: '' })}>Clear</Clearbutton>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
