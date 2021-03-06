import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import UnstyledLink from './UnstyledLink'

const styles = theme => ({
	root: {
		flexGrow: 1,
		zIndex: theme.zIndex.drawer + 1,
	},
	title: {
		flex: 1,
		fontWeight: 'bold',
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	}
})

const Header = ({ classes, headerTitle, toggleDropDown, closeDropDown, dropDownVisible, openDrawerClicked }) => (
	<header className={classes.root} >
		<AppBar position="fixed" >
			<Toolbar>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={openDrawerClicked} >
					<MenuIcon />
				</IconButton>
				<Typography className={classes.title} variant="h5" color="inherit" >
					<UnstyledLink to='/'>
						Greg Brisebois
					</UnstyledLink>
				</Typography>
			</Toolbar>
		</AppBar>
	</header>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default withStyles(styles)(Header);
