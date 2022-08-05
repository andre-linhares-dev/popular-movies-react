import React, { useEffect, useState } from "react"
import { PegarFilmes, PegarDetalhes } from "../../assets/api/api";
import { Container, Grid } from "./CardsStyle";
import { useDispatch } from "react-redux";
import { getMovieDetail, goToDetail } from "../../assets/redux/slice";


export function Cards() {
    const [filmes, setFilmes] = useState();
    const [detalhes, setDetalhes] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        PegarFilmes(setFilmes)
    }, [])

    // useEffect(() => {
    //     dispatch(getMovieDetail(detalhes))
    // }, [detalhes])

// const styleCardsGeneral = {
//     display: "grid",
//     gridTemplateColumns: " 1fr 1fr 1fr 1fr ",
//     backgroundColor: "black"
// };

// const styleCards = {
//     display:"flex", 
//     flexDirection: "column", 
//     alignItems: "center", 
//     borderStyle: "solid", 
//     borderWidth: "1px"
// };

// {display: "flex", flexDirection: "row", flexWrap: "wrap"}

const onHoverDetail = (event) => {
    PegarDetalhes(event.target.id, setDetalhes)
}

    return (
        <Grid to="/detalhes">
            {!filmes ? <div>Loading</div> : <>
                {filmes.map((filme) => {
                    return (
                        <Container key={filme.id} id={filme.id} onMouseEnter={onHoverDetail}>
                            <img src= {`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="poster" ></img>
                            <div className="infoContainer" id={filme.id}>
                                <p>{filme.title}</p>
                                <p>{`Nota: ${filme.vote_average}`}</p>
                            </div>
                        </Container>
                    )
                })}
        </>}
    </Grid>
    )
}
        