# react-incrementer

Handy React increase/decrease component.

## Example
There is an [example](https://codesandbox.io/s/react-incrementer-xf1fxx) of this component.

![Example image](https://i.ibb.co/0mbq1SR/Screenshot-2022-03-29-at-14-52-17.png)

## Install

```bash
# With npm
npm i react-incrementer

# With yarn
yarn add react-incrementer

# Clone from git
git clone https://github.com/7JUMPER7/react-incrementer

```

## Documentation

```jsx
<Incrementer
    value={number1}
    setValue={setNumber1}
    minValue={1}                  // defalut: 1
    maxValue={100}                // defalut: 100
    fontSize={70}                 // defalut: 70
    fontColor={"white"}           // defalut: 'white'
    buttonsSize={16}              // defalut: 16
    buttonsColor={"white"}        // defalut: 'white'
    buttonsHoverColor={"#87FF65"} // defalut: '#87FF65'
    buttonsOffset={10}            // defalut: 10
    buttonsMargin={-4}            // defalut: -4
    animationTime={300}           // defalut: 300
    componentMargin={10}          // defalut: 10
/>
```

### Props

#### `value`
State that should change.

#### `setValue` {function}
Function that changes the state.

#### `minValue` (optional)
Minimum value of the state `default 1`

#### `maxValue` (optional)
Maximum value of the state `default 100`

#### `fontSize` (optional)
Numbers size `default 70`

#### `fontColor` (optional)
Numbers color `default 'white'`

#### `buttonsSize` (optional)
Size of the buttons `default 16`

#### `buttonsColor` (optional)
Color of the buttons `default 'white'`

#### `buttonsHoverColor` (optional)
Color of the buttons when mouseOver `default '#87FF65'`

#### `buttonsOffset` (optional)
How far are the buttons from the number `default 10`

#### `buttonsMargin` (optional)
How far apart are the buttons `default -4`

#### `animationTime` (optional)
Speed of animation `default 300`

#### `componentMargin` (optional)
Margin of entire component `default 10`

## Example

```jsx
import { Incrementer } from "react-incrementer";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <Incrementer
        value={number}
        setValue={setNumber}
        minValue={1} // defalut: 1
        maxValue={100} // defalut: 100
        fontSize={70} // defalut: 70
        fontColor={"black"} // defalut: 'white'
        buttonsSize={16} // defalut: 16
        buttonsColor={"black"} // defalut: 'white'
        buttonsHoverColor={"#87FF65"} // defalut: '#87FF65'
        buttonsOffset={10} // defalut: 10
        buttonsMargin={-4} // defalut: -4
        animationTime={300} // defalut: 300
        componentMargin={10} // defalut: 10
      />
    </div>
  );
}
```