import React from 'react';
import { Provider } from 'mobx';
import { Pricingstore, Teststore } from './index';

export const rootProvider = ({ element }) => (
  <Provider store={Teststore} PricingStore={Pricingstore}>
    {element}
  </Provider>
);
