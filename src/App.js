import React from "react";
import Products from './components/Products'
import Style from './app.module.css';
const App = () => {
  return <div className={Style.container} >
      {<Products/>
        }

    </div>;
};

export default App;
