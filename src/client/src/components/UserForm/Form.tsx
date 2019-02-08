import React, { SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import { withStyles, Theme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import { IUser, } from "../../reducers/initialState";
import { FormikProps, } from 'formik';
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { History } from "history";

const styles = (theme: Theme) => ({
  formControlControls: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 400,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  history: History;
  onDelete?: (event: SyntheticEvent) => void;
  id?: string;
}

class Form extends React.Component<FormikProps<IUser> & IProps> {
  handleChange = (name: keyof IUser) => (e: React.SyntheticEvent) => {
    const {
      handleChange,
      setFieldTouched
    } = this.props;

    e.persist();

    handleChange(e);
    setFieldTouched(name, true, false);
  }

  render() {
    const {
      classes,
      values: {
        username,
        description,
      },
      errors,
      touched,
      isValid,
      handleSubmit,
    } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="username"
          name="username"
          label="Username"
          helperText={touched.username ? errors.username : ""}
          error={touched.username && Boolean(errors.username)}
          className={classes.textField}
          value={username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <br />
        <TextField
          id="description"
          name="description"
          label="Description"
          helperText={touched.description ? errors.description : ""}
          error={touched.description && Boolean(errors.description)}
          className={classes.textField}
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <FormControl className={classes.formControlControls} fullWidth>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => this.props.history.goBack()}
          >
            Back
          </Button>
          {this.props.id && <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.onDelete}
          >
            Delete
          </Button>}
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            disabled={!isValid}
            className={classes.button}
          >
            Save
          </Button>
        </FormControl>
      </form>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Form);
