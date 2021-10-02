import React from "react";
import useFetch from "../../Hooks/useFetch";


import './optionMenu.css'

import { GlobalContext } from "../GlobalContext";

export default function OptionMenu({ options }) {
    const [countIn, setCountIn] = React.useState()
    const [countFim, setCountFim] = React.useState()
    const [botao, setBotao] = React.useState([])

    const { request } = useFetch();
    
    const global = React.useContext(GlobalContext)

    function inserirValorBotao(region){

        if(!botao.includes(region)){
            setBotao([...botao,region])
        }
    }

    function regions(value) {

        switch (value) {
            case 'Kanto':
                setCountIn(1)
                setCountFim(151)
                console.log(countIn)

                break;
            case 'Johto':
                setCountIn(152)
                setCountFim(100)

                break;
            case 'Hoenn':
                setCountIn(252)
                setCountFim(135)

                break;
            case 'Sinnoh':
                setCountIn(387)
                setCountFim(106)

                break;
        }
    }
    function handleClick({ target }) {
        regions(target.innerText);
    }

    React.useEffect(() => {
        
        const data = []
        if(!(botao.includes(countIn))){

            for (let i = 0; i < countFim; i++) {
                async function fetchData() {
                    
                    const { json } = await request(`https://pokeapi.co/api/v2/pokemon-form/${(countIn + i)}/`)
                    
                    {
                        json && data.push({
                            region: countIn,
                            id: json.id,
                            nome: json.pokemon.name,
                            img: json.sprites.front_default,
                            type: json.types.map((tipo) => tipo.type.name)
                        })
                    }
                    if (i === countFim - 1) {
                        global.setData([...global.data, data])
                    }
                }
                fetchData();
            }
        }
        global.setRegion(countIn)
        inserirValorBotao(countIn)
        }, [countIn])


        return (
            <>
            {options.map((option) =>
                <button key={option.name} onClick={handleClick}>
                    <img src={option.img} alt={option.name} />
                    <span>{option.name}</span>
                </button>
            )}
            
        </>
    )
}