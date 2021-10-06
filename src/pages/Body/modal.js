import React from 'react'
import './modal.css'
import useFetch from '../../Hooks/useFetch';
import { Types } from './types';

export const Modal = ({ id, nome, type, img, showModal, setShowModal }) => {
  const [description, setDescription] = React.useState()
  const { request } = useFetch()

  function onclose() {
    setShowModal(!showModal)
  }

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      { json && setDescription(json.flavor_text_entries[0].flavor_text.replace(/(\f)/g, ' '))}
    }
    fetchData();
  }, [])
  {
    description && console.log(description)
  }
  /*no texto tem uma seta para cima por causa do \f */

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
