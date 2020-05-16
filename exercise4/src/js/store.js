import { store } from '@risingstack/react-easy-state';

const state = store({
  filters: {
    isAllChecked: true,
    isFruitChecked: true,
    isVegetablesChecked: true,
    isCannedfoodChecked: true,
  },
  products: [
    { id: 1, name: 'Апельсины', price: 1000, amount: 30, category: 'fruit' },
    { id: 2, name: 'Бананы', price: 1000, amount: 30, category: 'fruit' },
    { id: 4, name: 'Помидоры', price: 2000, amount: 10, category: 'vegetable' },
    { id: 5, name: 'консервированный тунец', price: 5000, amount: 20, category: 'canned food' },
    { id: 6, name: 'яблоки', price: 1000, amount: 50, category: 'fruit' },
    { id: 7, name: 'картофель', price: 500, amount: 30, category: 'vegetable' },
  ],
  reverse: false,
  category: '',
  type: {},
});

export default state;
