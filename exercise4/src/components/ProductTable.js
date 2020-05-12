import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../js/store';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
    this.state = {
      reverse: false,
    };
  }

  sort() {
    if (!this.state.reverse) {
      this.setState({
        reverse: true,
      });
      state.products.sort(function (a, b) {
        if (a.amount > b.amount) {
          return 1;
        }
        if (a.amount < b.amount) {
          return -1;
        }

        return 0;
      });
    } else {
      this.setState({
        reverse: false,
      });
      state.products.sort(function (a, b) {
        if (a.amount < b.amount) {
          return 1;
        }
        if (a.amount > b.amount) {
          return -1;
        }

        return 0;
      });
    }
  }

  render() {
    return (
      <table border="1" width="500px">
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во <button onClick={this.sort}>сортировка</button>
          </td>
        </tr>
        {state.products.map((product) => {
          if (state.filters.isFruitChecked && product.category === 'fruit') {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            );
          }
          if (state.filters.isVegetablesChecked && product.category === 'vegetable') {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            );
          }
          if (state.filters.isCannedfoodChecked && product.category === 'canned food') {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
              </tr>
            );
          }
        })}
      </table>
    );
  }
}

export default view(ProductTable);
