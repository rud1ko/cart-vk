import React, {JSX} from 'react';
import logo from './logo.svg';
import './App.css';
import {useGetProductsQuery} from "./redux/services/CardProductsAPI";
import {CardProductsProps} from "./components/CardDirectory/CardProducts.props";
import CardProducts from "./components/CardDirectory/CardProducts";

function App(): JSX.Element {
    const {data, isLoading, isError} = useGetProductsQuery()

    if (!data || isError) return <div>Not Found</div>
    if (isLoading) return <div>Load</div>

  return (
    <div className="App">
      <div className="listProducts">
          {
              data.map((product: CardProductsProps) => {
                  return <CardProducts
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      description={product.description}
                      rating={product.rating}
                      price={product.price}/>
              })
          }
      </div>
      <div className="sumProducts">Итого: 0 руб</div>
    </div>
  );
}

export default App;
