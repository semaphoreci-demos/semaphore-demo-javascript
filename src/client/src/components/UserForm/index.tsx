import React, { Component, SyntheticEvent } from 'react';
import { Formik, FormikActions, FormikConfig, FormikProps } from 'formik';
import Form from './Form';
import {userForm} from '../../validation';
import { routes } from '../../config';
import { IUsersState, ICreatedUser, IUser } from '../../reducers/initialState';
import { ConnectedRouterProps } from 'connected-react-router';

export interface IProps extends ConnectedRouterProps {
  onEntitySave: (payload: IUser|ICreatedUser) => void;
  onDelete?: (id: string) => void;
  users: IUsersState;
  id?: string;
}

class UserForm extends Component<IProps> {
  handleSubmit = async (values: ICreatedUser, actions: FormikActions<ICreatedUser>) => {
    try {
      await this.props.onEntitySave(values);
      actions.setSubmitting(false);

      this.props.history.push(routes.users.list);
    } catch (error) {
      actions.setSubmitting(false);
      actions.setErrors(error);
      actions.setStatus({ msg: 'Set some arbitrary status or data' });
    }
  }

  handleDelete = (event: SyntheticEvent) => {
    event.preventDefault();
    if (this.props.onDelete && this.props.id) {
      this.props.onDelete(this.props.id);
    }
    this.props.history.push(routes.users.list);
  }

  handleGoBack = () => this.props.history.goBack();

  handleFormikRender = (props: FormikProps<IUser>) => (
    <Form
      {...props}
      onDelete={this.handleDelete}
      onGoBack={this.handleGoBack}
      id={this.props.id}
    />
  )

  render() {
    const item = this.props.users.items[`${this.props.id}`] || {};

    const values: IUser|ICreatedUser = {
      id: item.id,
      username: !item.username
        ? ''
        : item.username,
      description: !item.description
        ? ''
        : item.description,
      age: !item.age
        ? 0
        : item.age,
      firstName: !item.firstName
        ? ''
        : item.firstName,
      lastName: !item.lastName
        ? ''
        : item.lastName,
    };

    return (
      <Formik
        render={this.handleFormikRender}
        initialValues={values}
        validationSchema={userForm}
        onSubmit={this.handleSubmit}
        enableReinitialize={true}
      />
    );
  }
}

export default UserForm;
