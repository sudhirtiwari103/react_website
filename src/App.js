import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Product from './components/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
// import About from './pages/About';
const App=()=>{
    return (
    <>
        <Router>
            <Navigation/>
            <Routes>    
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/product/:_id" element={<SingleProduct/>} ></Route>
                <Route path="/cart" element={<Cart />}></Route>
                {/* <Route path='/about' element={<About/>}></Route> */}
            </Routes>
        </Router> 
    </>
    )
}

export default App;