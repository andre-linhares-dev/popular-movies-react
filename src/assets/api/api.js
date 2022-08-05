import axios from "axios"

export const PegarFilmes = (setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ac57c76aa7b66833535f4b4aabe014f6&language=pt-BR&page=1`)
    .then((resposta)=>{
        setState(resposta.data.results)
    }).catch((erro)=>{
        console.log(erro)
    })
}

export const PegarDetalhes = (id, setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ac57c76aa7b66833535f4b4aabe014f6&language=pt-BR`)
    .then((resposta)=>{
        setState(resposta)
    }).catch((erro)=>{
        console.log(erro)
    })
}