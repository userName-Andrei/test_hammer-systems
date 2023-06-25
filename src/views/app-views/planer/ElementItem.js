import { Button, Card, Col, Input, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { deleteFur, editValue } from 'redux/reducers/Furniture';
import { useDispatch } from 'react-redux';

const ElementItem = ({element}) => {

	const dispatch = useDispatch();
	const [editElement, setEditElement] = useState({});

	const onChange = (e, obj, propertyName) => {

		setEditElement(state => ({
			...state,
			...obj,
			[propertyName]: +e.target.value
		}))

		dispatch(editValue({obj, propertyName, value: +e.target.value}))
	}

	return (
		<Card 
			title={`Параметры элемента ${element.name}`}  
			extra={<Button danger icon={<DeleteOutlined />} onClick={()=> dispatch(deleteFur(element.id))} size="small"/>} 
		>
			<Row gutter={6}>
				<Col xs={12}>
					X
					<Input 
						name='x' 
						value={editElement.x || element.x} 
						onChange={(e) => onChange(e, element, 'x')} 
					/>
				</Col>
				<Col xs={12}>
					Y
					<Input 
						name='y' 
						value={editElement.y || element.y} 
						onChange={(e) => onChange(e, element, 'y')} 
					/>
				</Col>
			</Row>
			<Row gutter={6}>
				<Col xs={12}>
					Ширина
					<Input 
						name='width' 
						value={editElement.width || element.width} 
						onChange={(e) => onChange(e, element, 'width')} 
					/>
				</Col>
				<Col xs={12}>
					Высота
					<Input 
						name='height' 
						value={editElement.height || element.height} 
						onChange={(e) => onChange(e, element, 'height')} 
					/>
				</Col>
			</Row>
		</Card>
	)
}

export default ElementItem;