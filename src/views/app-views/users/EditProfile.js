import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Loading from 'components/shared-components/Loading';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import UserService from 'services/UserService';


export const EditProfile = () => {

	const [status, setStatus] = useState('loading');
	const users = useSelector(state => state.users.users);
	const history = useHistory();
	const userId = +useParams().id;
	const [form] = Form.useForm(); 
	
	useEffect(() => {
		fillFields(users, userId)
		setStatus('idle')
	}, [])

	const fillFields = async (users, userId) => {
		let user;

		if (users && users.length > 0) {
			user = users.filter(item => item.id === userId)[0]

			form.setFieldsValue({
				id: user.id,
				name: user.name,
				email: user.email,
				userName: user.username,
				phoneNumber: user.phone,
				website: user.website,
				city: user.address.city,
				company: user.company.name
			})

			return;
		}

		user = UserService.getUser(userId);
		
		form.setFieldsValue({
			id: user.id,
			name: user.name,
			email: user.email,
			userName: user.username,
			phoneNumber: user.phone,
			website: user.website,
			city: user.address.city,
			company: user.company.name
		})
	}

	const onFinish = values => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key, duration: 1 });
		
		UserService.postUser(userId)

		setTimeout(() => {
			history.push('/');
		}, 1000);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};


	if (status === 'loading') {
		return <Loading cover="content"/>
	}

	return (
		<>
			<div className="mt-4">
				<Form
					form={form}
					name="basicInformation"
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
									<Form.Item
										name="id"
									>
										<Input hidden/>
									</Form.Item>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="UserName"
										name="userName"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[{ 
											required: true,
											type: 'email',
											message: 'Please enter a valid email!' 
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Phone Number"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Website"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="City"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Company"
										name="company"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}

export default EditProfile
