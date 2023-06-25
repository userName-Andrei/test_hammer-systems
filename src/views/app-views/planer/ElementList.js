import { useSelector } from 'react-redux';
import ElementItem from './ElementItem';
import { nanoid } from '@reduxjs/toolkit';

const ElementList = () => {

	const furniture = useSelector(state => state.furniture.board);

	if (furniture.length === 0) return null;

	return (
		<>
			{furniture.map(item => <ElementItem key={nanoid()} element={item} />).reverse()}
		</>
	)
}

export default ElementList;