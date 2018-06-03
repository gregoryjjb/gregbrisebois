import React from 'react';
import Link from 'gatsby-link';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';

import UnstyledLink from '../components/UnstyledLink'

const drawerWidth = 280;

const styles = theme => ({
	root: {
		width: drawerWidth,
		position: 'relative',
		flex: '0 0 auto',
	},
	fixed: {
		position: 'fixed',
		width: drawerWidth,
	},
	toolbar: {
		...theme.mixins.toolbar,
		display: 'flex',
		alignItems: 'center',
	},
	drawerPaper: {
		width: drawerWidth,
		position: 'relative',
		flex: '0 0 auto',
		//[theme.breakpoints.up('md')]: {
		//	position: 'relative',
		//},
	},
	closeButton: {
		marginLeft: 12,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
});

const DrawerLink = ({ name, to, icon }) => (
	<UnstyledLink to={to} >
		<ListItem button>
			<ListItemIcon>
				{icon}
			</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	</UnstyledLink>
)

const drawerContent = (
	<List>
		<DrawerLink name="Home" to="/" icon={<HomeIcon />} />
		<DrawerLink name="Tutorials" to="/tutorials" icon={<HelpIcon />} />
		<DrawerLink name="Projects" to="/projects" icon={<CodeIcon />} />
		<DrawerLink name="About" to="/about" icon={<AccountCircleIcon />} />
	</List>
)

const MenuDrawer = ({ classes, isOpen, onClose }) => (
	<span>
		<Hidden smDown implementation='css' >
			<div className={classes.root} >
				<div className={classes.fixed} >
					<Drawer variant='permanent' open classes={{ paper: classes.drawerPaper }} >
						<div className={classes.toolbar} />
								{drawerContent}
					</Drawer>
				</div>
			</div>
		</Hidden>
		<Hidden mdUp >
			<Drawer
				variant='temporary'
				anchor='left'
				open={isOpen}
				onClose={onClose}
				classes={{ paper: classes.drawerPaper }}
				ModalProps={{ keepMounted: true }}
			>
			
				<div className={classes.toolbar} >
					<IconButton className={classes.closeButton} color="inherit" aria-label="Close" onClick={onClose} >
						<CloseIcon />
					</IconButton>
				</div>
				{drawerContent}
			</Drawer>
		</Hidden>
	</span>
)

export default withStyles(styles, { withTheme: true })(MenuDrawer);