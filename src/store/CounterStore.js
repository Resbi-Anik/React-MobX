import { observable, action, computed, decorate } from "mobx";

class CounterStore {
//   @observable 
  count = null;

//   @action 
  increment = () => {
    this.count = this.count + 1;
  };

//   @action 
  reduceValue = () => {
    this.count = this.count - 1;
  };

//   @computed 
  get counterValue() {
    return this.count;
  }
}

decorate(CounterStore, {
    count: observable,
    increment: action,
    reduceValue: action,
    counterValue :computed
})

const store = new CounterStore();

export default store;
