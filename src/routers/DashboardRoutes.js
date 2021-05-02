import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { DcScreem } from '../components/dc/DcScreem';
import { MarvelScreem } from '../components/marvel/MarvelScreem';
import { HeroScreem } from '../components/heroes/HeroScreem';
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />            
            <div className="container mt-2">
            <Switch>
                <Route exact path="/dc" component={DcScreem} />
                <Route exact path="/hero/:heroId" component={HeroScreem} />
                <Route exact path="/marvel" component={MarvelScreem} />
                <Route exact path="/search" component={SearchScreen} />
                <Redirect to="/dc" />
            </Switch>
            </div>
        </>
    )
}
