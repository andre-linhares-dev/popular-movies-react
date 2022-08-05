import React  from "react"
import { FooterStyle } from "./FooterStyle"

export function Footer (props) {
    return(
        <FooterStyle>{props.texto}</FooterStyle>
    )
}