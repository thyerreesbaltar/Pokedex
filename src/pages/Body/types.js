import React from 'react'
import './types.css'
export const Types = ({type}) => {


    return (
        <div className="tipos">
            {type.map((tipo, index) => <div className={`tipo ${tipo}`} key={index}>{tipo}</div>)}
        </div>
    )
}
