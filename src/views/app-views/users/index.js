import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import EditProfile from './EditProfile';
import UserList from './UserList';

const ContentView = ({match}) => {
	return (
		<Switch>
			<Route path={`${match.url}/edit-profile/:id`} component={EditProfile} />
			<Route path={`${match.url}`} component={UserList} />
		</Switch>
	)
}

export class Users extends Component {
	render() {
		return (
			<ContentView {...this.props} />
		);
	}
}

export default Users