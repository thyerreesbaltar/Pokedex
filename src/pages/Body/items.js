import React from 'react'

import { GlobalContext } from "../GlobalContext";

import './items.css'
import { Modal } from './modal';

export const Items = () => {
    const [poke, setPoke] = React.useState([])
    const [showModal, setShowModal] = React.useState(false)

    const global = React.useContext(GlobalContext)
    const { region, data } = global

    data.forEach((teste) => teste.sort((a,b) => {
        return (a.id> b.id)? 1: ((b.id> a.id) ? -1 : 0)
    }))

    React.useEffect(() => {

        function onScroll() {
            let path = "//body";
            var element = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                if (showModal) {
                    window.scroll(0, 0)
                    element.id = 'onModal'
                } else {
                    element.removeAttribute('id')
                }
            }
        
        onScroll()
    }, [showModal]);

    return (
        <div className='pokemons'>
            {
                data
                    .map(items => items
                        .map((pokemon) => {
                            if (region === pokemon.region) {
                                return (
                                    <div className='pokemon' id={pokemon.id} key={pokemon.id}>
                                        <button
                                            className='item'
                                            onClick={() => {
                                                setPoke({
                                                    id: pokemon.id,
                                                    nome: pokemon.nome,
                                                    img: pokemon.img,
                                                    tipo: pokemon.type
                                                })
                                                setShowModal(!showModal)

                                            }}
                                        >
                                            <img src={pokemon.img} alt="" />
                                        </button>
                                    </div>
                                    
                                )
                            }
                        }
                        ))
            }
            {showModal ? <Modal id={poke.id} nome={poke.nome} img={poke.img} type={poke.tipo} showModal={showModal} setShowModal={setShowModal} /> : null}
        </div>
    )
}
