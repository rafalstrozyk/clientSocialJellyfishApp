import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

// Components
import Scream from '../components/scream/Scream';
import Profile from '../components/profile/Profile';
import ScreamSkeleton from '../util/ScreamSkeleton';

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

class home extends Component {
	state = {
		hideNav: false
	};

	componentDidMount() {
		this.props.getScreams();
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}
	resize() {
		let currentHideNav = window.innerWidth <= 600;
		if (currentHideNav !== this.state.hideNav) {
			this.setState({ hideNav: currentHideNav });
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize.bind(this));
	}

	render() {
		const { screams, loading } = this.props.data;
		let recentScreamsMarkup = !loading ? (
			screams.map((scream) => <Scream scream={scream} key={scream.screamId} />)
		) : (
			<ScreamSkeleton />
		);
		const { hideNav } = this.state;
		let layout;
		hideNav
			? (layout = (
					<>
						<Grid item sm={4} sx={12}>
							<Profile />
						</Grid>
						<Grid item sm={8} sx={12}>
							{recentScreamsMarkup}
						</Grid>
					</>
			  ))
			: (layout = (
					<>
						<Grid item sm={8} sx={12}>
							{recentScreamsMarkup}
						</Grid>
						<Grid item sm={4} sx={12}>
							<Profile />
						</Grid>
					</>
			  ));

		return (
			<Grid container spacing={8} direction='row' justify='center'>
				{layout}
			</Grid>
		);
	}
}

home.propTypes = {
	getScreams: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	data: state.data
});

export default connect(mapStateToProps, { getScreams })(home);
