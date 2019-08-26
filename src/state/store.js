import { observable, decorate, action } from 'mobx';



class Store {


  count = 0;

  increase = () => {
    this.count ++ ;
    console.log('from state');
  };
}

decorate(Store, {
  count: observable,
  increase: action,
});

const store = new Store();
console.log('from store file');

export default store;
