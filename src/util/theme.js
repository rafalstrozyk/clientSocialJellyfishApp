export default {
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
	},
	typography: {
		useNextVariants: true,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	},
	form: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	image: {
		margin: '20px auto 20px auto',
		width: '100px',
		height: 'auto'
	},
	pageTitle: {
		margin: '10px auto 10px auto'
	},
	textField: {
		margin: '10px auto 10px auto'
	},
	button: {
		marginTop: 20,
		position: 'relative'
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progress: {
		position: 'absolute'
	},
	invisibleSeparator: {
		border: 'none',
		margin: 4
	},
	visibleSeparator: {
		width: '100%',
		borderBottom: '1px solid rgba(0,0,0,.1)',
		marginBottom: 20
	},
	paper: {
		padding: 20
	},
	profile: {
		'& .image-wrapper': {
			textAlign: 'center',
			position: 'relative',
			'& button': {
				position: 'absolute',
				top: '80%',
				left: '70%'
			}
		},
		'& .profile-image': {
			width: 200,
			height: 200,
			objectFit: 'cover',
			maxWidth: '100%',
			borderRadius: '50%'
		},
		'& .profile-details': {
			textAlign: 'center',
			'& span, svg': {
				verticalAlign: 'middle'
			},
			'& a': {
				color: '#3f51b5'
			}
		},
		'& hr': {
			border: 'none',
			margin: '0 0 10px 0'
		},
		'& svg.button': {
			'&:hover': {
				cursor: 'pointer'
			}
		}
	},
	buttons: {
		textAlign: 'center',
		'& a': {
			margin: '20px 10px'
		}
	}
};
