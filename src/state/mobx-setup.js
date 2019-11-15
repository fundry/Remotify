import { observable, decorate, action } from 'mobx';

class AuthStore {
  test = true;

  set = () => {
    this.test = true;
  };

  set2 = () => {
    this.set = false;
  };
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables here
  test: observable,

  //actions here
  set: action,
  set2: action,
});

const store = new DecoratedAuthStore();

export default store;
