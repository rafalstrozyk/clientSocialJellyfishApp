import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Components
import Navbar from './components/Navbar';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#6573c3',
			main: '#3f51b5',
			dark: '#2c387e',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ffee33',
			main: '#ffea00',
			dark: '#b2a300',
			contrastText: '#fff'
		}
	}
});

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className='App'>
					<Router>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={home} />
								<Route exact path='/login' component={login} />
								<Route exact path='/signup' component={signup} />
							</Switch>
						</div>
					</Router>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
