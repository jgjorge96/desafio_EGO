import React from "react";
import './index.css';
import {NavBar} from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemsCars} from './components/ItemsCars/ItemsCars.js'
import { ItemListPriceAsc } from "./components/ItemListOrder/ItemListPriceAsc";
import { ItemListPriceDesc } from "./components/ItemListPriceDesc/ItemListPriceDesc.js"
import { ItemListYearAsc } from "./components/ItemListYearAsc/ItemListYearAsc.js"
import { ItemListYearDesc } from "./components/ItemListYearDesc/ItemListYearDesc.js"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element= {<ItemListContainer/>}/>
      <Route path="/category/:segmentId" element= {<ItemListContainer/>} />
      <Route path="/item/:carId" element= {<ItemDetailContainer/>} />
      <Route path="/category/Autos" element= {<ItemsCars/>} />
      <Route path="/price/Asc" element= {<ItemListPriceAsc/>} />
      <Route path="/price/Desc" element= {<ItemListPriceDesc/>} />
      <Route path="/year/Asc" element= {<ItemListYearAsc/>} />
      <Route path="/year/Desc" element= {<ItemListYearDesc/>} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
