import React, { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import UserList from '../../components/UserList';
import { IUsersState } from '../../reducers/initialState';
import { routes } from '../../config';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  fab: {
    position: 'fixed' as 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  users: IUsersState;
  fetchUsers(): any;
  onDelete: (id: string) => any;
}

class Page extends Component<IProps> {
  async componentDidMount() {
    if (!this.props.users.loaded) {
      await this.props.fetchUsers();
    }
  }

  render() {
    const { classes, users, } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={1}>
          <UserList
            users={users}
            onDelete={this.props.onDelete}
          />
        </Paper>
        <Link to={routes.users.new}>
          <Fab color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Page);
