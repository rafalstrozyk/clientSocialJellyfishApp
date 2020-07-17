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
            '"Segoe UI Symbol"',
          ].join(',')
	},
	form: {
		textAlign: 'center'
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
    }
}