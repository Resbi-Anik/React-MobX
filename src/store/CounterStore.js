import { observable, action, computed } from "mobx";

class CounterStore {
  @observable count = null;

  @action increment = () => {
    this.count = this.count + 1;
  };

  @action reduceValue = () => {
    this.count = this.count - 1;
  };

  @computed get counterValue() {
    return this.count;
  }
}

const store = new CounterStore();

export default store;
