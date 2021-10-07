import React from 'react'
import './modal.css'
import useFetch from '../../Hooks/useFetch';
import { Types } from './types';
import pokeball from '../../assets/pokeball.svg'

export const Modal = ({ id, nome, type, img, showModal, setShowModal }) => {
  const [description, setDescription] = React.useState()
  const { loading, request } = useFetch()

  function onclose() {
    setShowModal(!showModal)
  }

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)

      const desc = json.flavor_text_entries.find(descrip => descrip.language.name === 'en')

      { json && setDescription(desc.flavor_text.replace(/(\f)/g, ' '))}
    }
    fetchData();
  }, [])
  {
    description && console.log(description)
  }
  console.log(loading)
  /*no texto tem uma seta para cima por causa do \f */
  if(loading) return (
    <div className="modal">
      <div className="modalContainer loading">
        <img src={pokeball} alt="Carregando" />
        <h1>Carregando...</h1>
      </div>
    </div>
  )

  return (
    <div className="modal">
      <div className="modalContainer">
        <button className="close" onClick={onclose} />
        <div className="content">


          <h1 className='pokemonName'>
            {nome}
          <span className='pokemonId'>
            N°{` ${id}`}
          </span>
          </h1>

          <img className='pokemonImg' src={img} alt={nome} />

          <Types type={type} />
          {/* <div className='description' dangerouslySetInnerHTML={{ __html:teste}}/> */}

          <p className='description'>
            {description}


          </p> 

        </div>
      </div>
    </div>
  )
}
