import React from "react";
import img from "./img/imagem.JPEG"
import CaixaTeste from "./caixaTeste";

export default function Corpo(){
    return(
        <div>
            <h2 className="tit">Subtitulo</h2>
            <img className="imagem"src={img} alt="imagemDaora" />
            <CaixaTeste>
                <p>bom dia</p>
            </CaixaTeste>
        </div>
    )
}