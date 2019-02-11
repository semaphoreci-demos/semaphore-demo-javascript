import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import { routes } from '../../config';
import { IUsersState } from '../../reducers/initialState';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => ({
  brand: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  sideListItem: {
    color: 'inherit',
    textDecoration: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  fab: {
    position: 'absolute' as 'absolute',
    bottom: `${theme.spacing.unit * 2}`,
    right: `${theme.spacing.unit * 2}`,
  },
  container: {
    marginBottom: 48,
  },
  progress: {
    position: 'relative' as 'relative',
    top: '49',
  },
});

export interface IProps<ClassKey extends string = string> {
  users: IUsersState;
  classes: Partial<ClassNameMap<ClassKey>>;
}

export interface IState {
  drawerOpen: boolean;
}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawerOpen: open,
    });
  }

  render() {
    const { classes, users } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <NavLink to={routes.users.new} className={classes.sideListItem}>
            <ListItem button={true}>
              <ListItemIcon><AddIcon /></ListItemIcon>
              <ListItemText primary={'New User'} />
            </ListItem>
          </NavLink>
          <NavLink to={routes.users.list} className={classes.sideListItem}>
            <ListItem button={true}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary={'List Users'} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    );

    return (
      <div className={classes.container}>
        <AppBar
          position="fixed"
        >
          <Toolbar variant="dense">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <NavLink to={routes.default} className={classes.brand}>
                Demo
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
        {(users.loading) && <LinearProgress className={classes.progress}  color="secondary" />}
        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
