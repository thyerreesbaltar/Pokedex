import React from "react";
import './header.css';
import OptionMenu from "./optionMenu";

import Kanto from '../../assets/iconKanto.svg';
import Johto from '../../assets/iconJohto.svg';
import Hoenn from '../../assets/iconHoenn.svg';
import Sinnoh from '../../assets/iconSinnoh.svg';

export default function Header() {
    const menuItens = [
        {
            img: Kanto,
            name:'Kanto',
        },
        {
            img: Johto,
            name:'Johto',
        },
        {
            img: Hoenn,
            name:'Hoenn',
        },
        {
            img: Sinnoh,
            name:'Sinnoh',
        },
    ]



    return (
        
        <header>
            <OptionMenu options={menuItens}/>
        </header>
    )
}