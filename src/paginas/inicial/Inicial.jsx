import { Footer } from "../../componentes/footer/Footer";
import { Header } from "../../componentes/header/Header";
import { Cards } from "../../componentes/cards/Cards";
import React, { useEffect, useState } from "react";
import { Parte1, Parte2 } from "./inicialStyle";


const pageName = "Home"

function Inicial() {

  // ------amostra useState e useEffect------
  // const [imagens, setImagens] = useState('Div da imagem');

  // useEffect(() => {
  //     setTimeout(() => setImagens("Novo Valor"), 3000)
  // }, [])


  return (
    <div>
      {/* <div>{imagens}</div> */}
      <Header />
      <Parte1>
        <h2>CONFIRA OS FILMES POPULARES DA SEMANA  <span style={{fontSize: "130%", fontWeight:"800"}}>↓</span></h2>
      </Parte1>
      <Parte2>
        <Cards />
      </Parte2>
      <Footer texto= {`FullFlix 2022, Todos os direitos reservados. | ${pageName}`}/>
    </div>
  )
};

export default Inicial;