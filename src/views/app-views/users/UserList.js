import React, { useEffect, useState } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Loading from 'components/shared-components/Loading';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from 'redux/reducers/Users';

export const UserList = (props) => {

	const [userProfileVisible, setUserProfileVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const dispatch = useDispatch();
	const users = useSelector(state => state.users.users);
	const usersStatus = useSelector(state => state.users.status);

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	const removeUser = userId => {
		dispatch(deleteUser(userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = userInfo => {
		setUserProfileVisible(true)
		setSelectedUser(userInfo)
	};
	
	const closeUserProfile = () => {
		setUserProfileVisible(false)
		setSelectedUser(null)
	}
		
	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, user) => (
				<Link to={`${props.match.url}/edit-profile/${user.id}`}>
					<AvatarStatus src={user?.img} name={user.name} subTitle={user.email}/>
				</Link>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Company',
			dataIndex: 'company',
			render: (_, user) => (
				<span>{user.company?.name}</span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.company?.name.toLowerCase();
					b = b.company?.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				}
			},
		},
		{
			title: 'City',
			dataIndex: 'city',
			render: (_, user) => (
				<span>{user.address?.city}</span>
			),
			sorter: {
				compare: (a, b) => {
					a = a.address?.city.toLowerCase();
					b = b.address?.city.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				}
			},
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {removeUser(elm.id)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];

	if (usersStatus === 'loading') {
		return <Loading cover="content"/>
	}

	if (users.length === 0) {
		return <h4>Пользователей пока нет.</h4>
	}

	return (
		<Card bodyStyle={{'padding': '0px'}}>
			<Table columns={tableColumns} dataSource={users} rowKey='id' pagination={{position: ['bottomCenter']}} />
			<UserView data={selectedUser} visible={userProfileVisible} close={()=> {closeUserProfile()}}/>
		</Card>
	)
}

export default UserList