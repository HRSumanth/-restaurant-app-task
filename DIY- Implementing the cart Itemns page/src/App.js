import { useContext } from "react";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Store/CartProvider";
import NavBar from "./components/layout/NavBar";
import CartContext from "./components/Store/CartContext";

function App() {

  const ctx= useContext(CartContext)
  console.log(ctx)
  return (
       <div>
      <CartProvider>
      <NavBar></NavBar>
      <main>
      <Meals></Meals>
      </main>
      </CartProvider>
       </div>
      
   
  );
}

export default App;
