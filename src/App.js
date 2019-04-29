import React from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    result: "",
    value: "",
    operation: ""
  };

  calculate = () => {
    try {
      this.setState({ value: eval(this.state.value) });
    } catch (error) {
      this.setState({ value: "error" });
    }
  };

  setValue = event => {
    this.setState({ value: this.state.value + event });
  };

  reset = event => {
    this.setState({ value: "" });
  };

  render() {
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
            <Button name="clear" onClickHandler={this.reset} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
