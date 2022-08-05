import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Inicial  from "../../paginas/inicial/Inicial"
import  Detalhes  from "../../paginas/detalhes/Detalhes"

export function RouterDom(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element ={<Inicial/>}/>
                <Route path="/detalhes" element ={<Detalhes/>}/>
                <Route path="*" element ={<div>Página não encontrada - 404</div>}/>
            </Routes>
        </BrowserRouter>
    )
};