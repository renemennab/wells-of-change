import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './home/homePage'
import { Header } from './common/header'

function App(): JSX.Element {
    return (
        <Router>
            <AppStyles className="App">
                <Header />
                <main>
                    <Switch>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </main>
            </AppStyles>
        </Router>
    )
}

const AppStyles = styled.div`
    height: 100vh;
    width: 100%;
    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`
export default App
