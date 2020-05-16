import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../js/store';
import Checkbox from './Checkbox';

class ProductFilters extends React.Component {
  render() {
    return (
      <div>
        <Checkbox
          label="Выбрать все"
          checked={state.filters.isAllChecked}
          onChange={() => {
            state.filters.isAllChecked = !state.filters.isAllChecked;
            state.filters.isFruitChecked = state.filters.isAllChecked;
            state.filters.isVegetablesChecked = state.filters.isAllChecked;
            state.filters.isCannedfoodChecked = state.filters.isAllChecked;
          }}
        />
        <hr />
        <Checkbox
          label="Фрукты"
          checked={state.filters.isFruitChecked}
          onChange={() => {
            state.filters.isFruitChecked = !state.filters.isFruitChecked;
            if (state.filters.isFruitChecked) {
              state.category = 'fruit';
              state.type.push({ fruit: true });
            } else {
              state.category = '';
            }
          }}
        />
        <Checkbox
          label="Овощи"
          checked={state.filters.isVegetablesChecked}
          onChange={() => {
            state.filters.isVegetablesChecked = !state.filters.isVegetablesChecked;
            if (state.filters.isVegetablesChecked) {
              state.category = 'vegetable';
            } else {
              state.category = '';
            }
          }}
        />
        <Checkbox
          label="Консервы"
          checked={state.filters.isCannedfoodChecked}
          onChange={() => {
            state.filters.isCannedfoodChecked = !state.filters.isCannedfoodChecked;
            if (state.filters.isVegetablesChecked) {
              state.category = 'canned food';
            } else {
              state.category = '';
            }
          }}
        />
      </div>
    );
  }
}

export default view(ProductFilters);
