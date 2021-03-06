import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';

import GithubCircleIcon from 'mdi-material-ui/GithubCircle';
import LinkedinIcon from 'mdi-material-ui/Linkedin';
import UnrealIcon from 'mdi-material-ui/Unreal'
import NpmVariantOutlineIcon from 'mdi-material-ui/NpmVariantOutline';

import UnstyledLink from '../components/UnstyledLink'

const drawerWidth = 280;

const styles = theme => ({
	root: {
		width: drawerWidth,
		position: 'relative',
		flex: '0 0 auto',
		display: 'flex',
		flexDirection: 'column',
	},
	fixed: {
		position: 'fixed',
		width: drawerWidth,
		height: '100%',
	},
	toolbar: {
		...theme.mixins.toolbar,
		display: 'flex',
		alignItems: 'center',
	},
	drawerContent: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	},
	drawerPaper: {
		width: drawerWidth,
		position: 'relative',
		display: 'flex',
		flex: '0 0 auto',
		//[theme.breakpoints.up('md')]: {
		//	position: 'relative',
		//},
	},
	drawerIconButtonPaper: {
		color: theme.palette.text.secondary,
		padding: '16px 16px',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	iconButton: {
		marginRight: 8,
	},
	closeButton: {
		marginLeft: 12,
		[theme.breakpoints.down('xs')]: {
			marginLeft: 4,
		}
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
	listItemGutters: {
		...theme.mixins.gutters({
			paddingTop: 12,
			paddingBottom: 12,
		})
	}
});

const links = [{
	name: "Home",
	to: '/',
	icon: <HomeIcon />,
}, {
	name: "Tutorials",
	to: '/tutorials',
	icon: <HelpIcon />,
}, {
	name: "Projects",
	to: '/projects',
	icon: <CodeIcon />,
}, {
	name: "About",
	to: '/about',
	icon: <AccountCircleIcon />,
}, {
	name: "Contact",
	to: '/contact',
	icon: <ChatIcon />,
}];

const DrawerLink = ({ name, to, icon, onClick, classes }) => (
	<UnstyledLink to={to} >
		<ListItem button onClick={onClick} classes={{
			gutters: classes.listItemGutters,
		}} >
			<ListItemIcon>
				{icon}
			</ListItemIcon>
			<ListItemText primary={name} />
		</ListItem>
	</UnstyledLink>
)

const drawerContent = (c, classes) => (
	<div className={classes.drawerContent} >
		<List style={{ flex: 1 }} >
			{links.map(l => (
				<DrawerLink onClick={c} key={l.name} name={l.name} to={l.to} icon={l.icon} classes={classes} />
			))}
		</List>
		<Divider />
		<div className={classes.drawerIconButtonPaper} >
			<IconButton color="inherit" href="https://www.linkedin.com/in/gregbrisebois/" target="_blank"  className={classes.iconButton} >
				<LinkedinIcon />
			</IconButton>
			<IconButton color="inherit" href="https://github.com/gregoryjjb" target="_blank" className={classes.iconButton} >
				<GithubCircleIcon />
			</IconButton>
			<IconButton color="inherit" href="https://forums.unrealengine.com/member/179-gregdumb" target="_blank" className={classes.iconButton} >
				<UnrealIcon />
			</IconButton>
			<IconButton color="inherit" href="https://www.npmjs.com/~gregoryjjb" target="_blank" className={classes.iconButton} >
				<NpmVariantOutlineIcon />
			</IconButton>
		</div>
	</div>
)

const MenuDrawer = ({ classes, isOpen, onOpen, onClose }) => (
	<span>
		<Hidden mdDown implementation='css' >
			<div className={classes.root} >
				<div className={classes.fixed} >
					<Drawer
						variant='permanent'
						open
						classes={{ paper: classes.drawerPaper }}
						style={{ height: '100%' }} >
						<div className={classes.toolbar} />
						{drawerContent(onClose, classes)}
					</Drawer>
				</div>
			</div>
		</Hidden>
		<Hidden lgUp >
			<SwipeableDrawer
				variant='temporary'
				anchor='left'
				open={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				classes={{ paper: classes.drawerPaper }}
				ModalProps={{ keepMounted: true }}
			>
				<div className={classes.toolbar} >
					<IconButton className={classes.closeButton} color="inherit" aria-label="Close" onClick={onClose} >
						<CloseIcon />
					</IconButton>
				</div>
				{drawerContent(onClose, classes)}
			</SwipeableDrawer>
		</Hidden>
	</span>
)

export default withStyles(styles, { withTheme: true })(MenuDrawer);