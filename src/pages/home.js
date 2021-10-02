import React from 'react'
import Header from './Header/header'

import { GlobalStorage } from './GlobalContext'
import { Body } from './Body/body'


export default function Home(){
    /*O problema do duplo clique é o region*/
    return (
        <GlobalStorage>
            <Header/>
            <Body/>

        </GlobalStorage>
    )
}
