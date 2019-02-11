import React, { Component, SyntheticEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { routes } from '../../config';
import { IUsersState } from '../../reducers/initialState';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme: Theme) => ({
  sideListItem: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export interface IProps<ClassKey extends string = string> {
  users: IUsersState;
  classes: Partial<ClassNameMap<ClassKey>>;
  onDelete: (id: string) => void;
}

class UserList extends Component<IProps> {
  handleDelete = (id: string) => (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.onDelete(id);
  }

  render() {
    const { classes, users } = this.props;

    return (
      <React.Fragment>
        <List>
          {
            users.itemIds.map((id, index) => {
              const item = users.items[id];
              return (
                <NavLink
                  to={routes.users.view.replace(':id', id)}
                  className={classes.sideListItem}
                  key={index}
                >
                  <ListItem
                    button={true}
                    dense={true}
                  >
                    <ListItemText
                      primary={item.username}
                      secondary={item.description}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={this.handleDelete(id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </NavLink>
              );
            })
          }
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UserList);
