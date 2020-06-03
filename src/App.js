import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observer
class App extends Component {
  handleClickInc = () => {
    this.props.CounterStore.increment();
  };

  handleClickReduceValue = () => {
    this.props.CounterStore.reduceValue();
  };
  render() {
    console.log(this.props.CounterStore.counterValue);

    const { CounterStore } = this.props;
    return (
      <div>
        Button for inc:
        <button onClick={() => this.handleClickInc()}>inc</button>
        {CounterStore.counterValue}
        Button for reduce:
        <button onClick={() => this.handleClickReduceValue()}>reduce</button>
      </div>
    );
  }
}

export default App;
