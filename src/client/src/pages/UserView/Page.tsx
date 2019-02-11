import React, { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import UserForm from '../../components/UserForm';
import { IUsersState, ICreatedUser, IUser } from '../../reducers/initialState';
import { History } from 'history';
import { RouteComponentProps } from 'react-router-dom';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export interface IProps<ClassKey extends string = string> extends RouteComponentProps<any> , React.Props<any> {
  classes: Partial<ClassNameMap<ClassKey>>;
  users: IUsersState;
  history: History;
  onEntitySave: (payload: IUser|ICreatedUser) => any;
  onDelete: (id: string) => any;
  fetchUser: (id: string) => any;
}

class Page extends Component<IProps> {
  async componentDidMount() {
    const user = this.props.users.items[this.props.match.params.id];
    if (!user && !this.props.users.loading) {
      await this.props.fetchUser(this.props.match.params.id);
    }
  }

  render() {
    const { classes, users, onEntitySave, onDelete, history, match } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={1}>
          <UserForm
            onEntitySave={onEntitySave}
            onDelete={onDelete}
            users={users}
            history={history}
            id={match.params.id}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Page);
