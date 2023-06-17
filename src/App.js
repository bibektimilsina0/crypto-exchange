import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
// import About from './components/About.js';
// import Portfolio from './components/Portfolio.js';
// import Market from './components/Market.js';
import Signup from './components/Signup.js';


function App() {
  return (
    // <div className="App ">
    //   <Navbar/>
    //  <Home/>
    //  <About/>
    //  <Portfolio/>
    //  <Market/>
    //  <Signup/>
    //  {/* <Input /> */}
    // </div>
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Home/>} />
        
        <Route path="/signup" element={<Signup />}/>
          {/* </Route> */}
       
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
