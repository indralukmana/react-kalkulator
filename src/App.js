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
          <Input className="screen" value={this.state.value} />
          <div className="keys">
            <Button
              name="-"
              className="operator"
              onClickHandler={this.setValue}
            />
            <Button
              name="+"
              className="operator"
              onClickHandler={this.setValue}
            />
            <Button
              name="/"
              className="operator"
              onClickHandler={this.setValue}
            />
            <Button
              name="*"
              className="operator"
              onClickHandler={this.setValue}
            />
            <Button name="1" type="button" onClickHandler={this.setValue} />
            <Button name="2" type="button" onClickHandler={this.setValue} />
            <Button name="3" type="button" onClickHandler={this.setValue} />

            <Button name="4" type="button" onClickHandler={this.setValue} />
            <Button name="5" type="button" onClickHandler={this.setValue} />
            <Button name="6" type="button" onClickHandler={this.setValue} />

            <Button name="7" type="button" onClickHandler={this.setValue} />
            <Button name="8" type="button" onClickHandler={this.setValue} />
            <Button name="9" type="button" onClickHandler={this.setValue} />

            <Button name="0" type="button" onClickHandler={this.setValue} />
            <Button
              name="."
              type="button"
              className="decimal"
              onClickHandler={this.setValue}
            />
            <Button
              name="AC"
              type="button"
              className="clear"
              onClickHandler={this.reset}
            />

            <Button
              name="="
              type="button"
              className="equal"
              onClickHandler={this.calculate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
