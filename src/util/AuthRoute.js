import React, { Component } from 'react';
import { Route, redirect, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			authenticated === true ? <Redirect to='/' /> : <Component {...props} />
		}
	/>
);

export default AuthRoute;
