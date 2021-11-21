import Product from "./components/Product";
    import './App.css';
    import Navbar from "./components/Navbar";
    import Products from "./components/Products";
    import CheckoutCard from "./components/CheckoutCard";
    import CheckoutPage from "./components/CheckoutPage";
    import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
    import SignIn from "./components/Signin";

    function App() {
      return (
        <div className="App">
          <Navbar/>
          <Switch>
          <Route path="/signup">
                <Signup/>
             </Route >
          <Route path="/signin">
                <SignIn/>
             </Route >
            <Route path="/checkout-page">
                <CheckoutPage/>
             </Route >
            <Route path="/">
                <Products/>
             </Route >
          </Switch>
          <Checkoutpage/>
          <CheckoutCard/>
          
          <Product/>
        </div>
    );
}

export default App;