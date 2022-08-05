import React from "react";
import { Header } from "../../componentes/header/Header";
import { Footer } from "../../componentes/footer/Footer"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, RightSide, MainContainer } from "./DetalhesStyle";
import { goToHome } from "../../assets/redux/slice"

const pageName = "Detalhes"

 function Detalhes() {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.page.valor2)

    return(
    <MainContainer>
      <Grid>
        <img src={`https://image.tmdb.org/t/p/w500/${state.data.poster_path}`} alt=""/>
          <RightSide>
            <p><b>Titulo:</b> {state.data.title}</p>
            <p><b>Sinopse:</b> {state.data.overview}</p>
            <p><b>Data de lançamento:</b> {state.data.release_date}</p>
            <p><b>Nota:</b> {state.data.vote_average}</p>
            <Link to="/" onClick={()=>dispatch(goToHome())}>Voltar para a home</Link>
          </RightSide>
      </Grid>
      <Footer texto= {`FullFlix 2022, Todos os direitos reservados. | ${pageName}`}/>
    </MainContainer>
    );
}

export default Detalhes;