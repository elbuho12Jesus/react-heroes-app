import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreem = () => {
    return (
        <div>
            <h1>Marvel Screem</h1>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
