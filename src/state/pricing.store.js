import { observable, decorate, action } from 'mobx';

class PricingStore {
  Name = '';
  Pricing = '';

  setPricing = (event) => {
    this.Name = event.value;
    this.Pricing = event.value;
  };
}

decorate(PricingStore, {
  count: observable,
  increase: action,
});

const pricingStore = new PricingStore();

export default pricingStore;
