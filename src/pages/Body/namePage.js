import React from 'react'

import './namePage.css'

import Pokeball from '../../assets/pokeball.svg'

import { GlobalContext } from "../GlobalContext";
export const NamePage = () => {
    const global = React.useContext(GlobalContext)
    const [region, setRegion] = React.useState(null)
    
    function Region(region){
        switch(region){
            case 1:
                setRegion('Kanto');
                break;
            case 152:
                setRegion('Johto');
                break;
            case 252:
                setRegion('Hoenn');
                break;
            case 387:
                setRegion('Sinnoh');
                break;
        }
    }

    React.useEffect(()=>
    {
        Region(global.region)
    },[global.region])
    
    return (
        <>
            {
                region &&
                <div id='namePage'>
                <img src={Pokeball} id='pokeball' alt="Pokebola" />
                <span id='regionPokemon'>
                {region}
                </span>
                </div>
            }
        </>
    )
}
