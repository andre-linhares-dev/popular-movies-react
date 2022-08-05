import React  from "react"
import Backgroundheader from "../../assets/img/headerFullflix.jpg"
// import { useSelector } from "react-redux";


const styleHeader = {
    width: "100%",
  };

export const Header = () => {
    // const state = useSelector ((state) => state.page.valor2)

    return (
        
        <header style={{margin: "0 0 -4px 0"}}>

            <img src ={ Backgroundheader} alt="background netflix" style={styleHeader}></img>
            {/* <p>{state.data.title}</p> */}
            
        </header>
    )
}