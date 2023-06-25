import { useDispatch, useSelector } from 'react-redux';
import { addFur } from 'redux/reducers/Furniture';
import { Col, Row } from 'antd';
import { useRef } from 'react';

const FurnitureList = () => {

	const furnitures = useSelector(state => state.furniture.furniture);
	const dispatch = useDispatch();
	let id = useRef(1);

	const onClickAddElement = (obj) => {
		dispatch(addFur({...obj, id: id.current, objId: obj.id}))
		id.current++
	}

	return (
		<Row justify='space-between'>
			{furnitures.map((item, i) => (
				<Col 
					key={i}
					onClick={() => onClickAddElement(item)}
				>
					<div 
						className='mb-2'
						style={{
							display: 'flex', 
							alignItems:'center', 
							justifyContent: 'center', 
							backgroundColor: 'black', 
							width: "80px", 
							height: "80px"
						}}
					>
						<img width={item.width} src={item.src} alt={item.name} />
					</div>
					<p style={{textAlign: 'center'}}>{item.name}</p>
				</Col>
			))}
		</Row>
	)

}

export default FurnitureList;