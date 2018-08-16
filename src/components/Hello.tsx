// This page is taken directly from https://github.com/Microsoft/TypeScript-React-Starter

import * as React from 'react';
import { Link } from "react-router-dom";

import '../App.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="App">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>

        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <Link to='/'>Back</Link>
    </div>
  );
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}