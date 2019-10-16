import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from './styles/theme'

import { Publication, Appbar, Feed, Details, } from './components'

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Route path='/' render={() => <Appbar />} />
                <Route exact path='/' render={() => (
                    <>
                        <Publication />
                        <Feed />
                    </>
                )}
                />
                <Route exact path='/details/:id' render={props => <Details {...props} />} />
            </Router>
        </MuiThemeProvider>
    )
}

export default App