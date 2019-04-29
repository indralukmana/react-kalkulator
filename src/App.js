import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from "./components/Input";
import Button from "./components/Button";

  return (
    <div className="App">
        <div className="kalkulator">
          <Input value={this.state.value} />
          <div>
            <Button name="0" onClickHandler={this.setValue} />
            <Button name="1" onClickHandler={this.setValue} />
            <Button name="2" onClickHandler={this.setValue} />
            <Button name="3" onClickHandler={this.setValue} />
            <Button name="4" onClickHandler={this.setValue} />
            <Button name="5" onClickHandler={this.setValue} />
            <Button name="6" onClickHandler={this.setValue} />
            <Button name="7" onClickHandler={this.setValue} />
            <Button name="8" onClickHandler={this.setValue} />
            <Button name="9" onClickHandler={this.setValue} />

            <Button name="+" onClickHandler={this.setValue} />
            <Button name="-" onClickHandler={this.setValue} />
            <Button name="/" onClickHandler={this.setValue} />
            <Button name="*" onClickHandler={this.setValue} />
            <Button name="." onClickHandler={this.setValue} />

            <Button name="=" onClickHandler={this.calculate} />
          </div>
        </div>
    </div>
  );
}

export default App;
