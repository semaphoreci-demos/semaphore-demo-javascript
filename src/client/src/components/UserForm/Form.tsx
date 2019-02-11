import React, { SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { IUser, } from '../../reducers/initialState';
import { FormikProps, } from 'formik';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => ({
  formControlControls: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export interface IProps<ClassKey extends string = string> {
  classes: Partial<ClassNameMap<ClassKey>>;
  onDelete?: (event: SyntheticEvent) => any;
  onGoBack: () => any;
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
        age,
        firstName,
        lastName,
      },
      errors,
      touched,
      isValid,
      handleSubmit,
    } = this.props;

    return (
      <form
        className={classes.container}
        noValidate={true}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          InputLabelProps={{ shrink: true }}
          id="username"
          name="username"
          label="Username"
          helperText={touched.username ? errors.username : ''}
          error={touched.username && Boolean(errors.username)}
          className={classes.textField}
          value={username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <br />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="description"
          name="description"
          label="Description"
          helperText={touched.description ? errors.description : ''}
          error={touched.description && Boolean(errors.description)}
          className={classes.textField}
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="age"
          name="age"
          label="Age"
          helperText={touched.age ? errors.age : ''}
          error={touched.age && Boolean(errors.age)}
          className={classes.textField}
          value={age}
          onChange={this.handleChange('age')}
          margin="normal"
        />
        <br />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="firstName"
          name="firstName"
          label="First Name"
          helperText={touched.firstName ? errors.firstName : ''}
          error={touched.firstName && Boolean(errors.firstName)}
          className={classes.textField}
          value={firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <br />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="lastName"
          name="lastName"
          label="Last Name"
          helperText={touched.lastName ? errors.lastName : ''}
          error={touched.lastName && Boolean(errors.lastName)}
          className={classes.textField}
          value={lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
        <FormControl className={classes.formControlControls} fullWidth={true}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.props.onGoBack}
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
}

export default withStyles(styles, { withTheme: true })(Form);
