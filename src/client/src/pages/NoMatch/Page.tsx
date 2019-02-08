import React, { Component } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

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
}

class Page extends Component<IProps> {
  render() {
    const { classes, } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={1}>
          404 - Page Not Found
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Page);
