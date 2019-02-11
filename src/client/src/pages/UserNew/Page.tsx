import React, { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import UserForm from '../../components/UserForm';
import { IUsersState, IUser, ICreatedUser } from '../../reducers/initialState';
import { History } from 'history';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  users: IUsersState;
  history: History;
  onEntitySave: (payload: IUser|ICreatedUser) => any;
}

class Page extends Component<IProps> {
  render() {
    const { classes, users, history, } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={1}>
          <UserForm
            onEntitySave={this.props.onEntitySave}
            users={users}
            history={history}
            id={''}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Page);
