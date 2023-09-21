import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import IndexHome from "./Component/Home/IndexHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextProvider from './Contxt/Context'
import Singleproduct from "./Component/page/Singleproduct/Singleproduct";
import Header1 from "./Component/Home/Header/Header1";
import Header3 from "./Component/Home/Header/Header3";
import Header2 from "./Component/Home/Header/Header2";
import Cart from "./Component/page/Cart/Cart";
import Login from "./Component/Authentication/Login/Login";
import Signup from "./Component/Authentication/Signup/Signup";
import Dashboard from "./Component/Dashboard/Dashboard";
import Editprouduct from "./Component/Dashboard/Editprouduct/Editprouduct";
import Createproduct from "./Component/Dashboard/Createproduct/Createproduct";


const App = (props) => {

  return (
    <ContextProvider>
      
       
    <BrowserRouter>
    <Header1/>
       
       <Header3/>
      <Routes>
       
      <Route path="/" Component={IndexHome}/>
      <Route path='/Singleproduct/:id' Component={Singleproduct}/>
      <Route path="/Cart" Component={Cart}/>
      <Route path="/Login" Component={Login}/>
      <Route path="/Signup" Component={Signup}/>
     <Route path="/Dashboard" Component={Dashboard}/>
     <Route path="/Editprouduct/:id" Component={Editprouduct}/>
     <Route path="/Createproduct" Component={Createproduct}/>
      </Routes>
      </BrowserRouter>
      </ContextProvider>
  )
}

export default App








