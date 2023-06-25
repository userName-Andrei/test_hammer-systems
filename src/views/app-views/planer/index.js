import { Card, Col, Row } from 'antd';
import React from 'react';
import FurnitureList from './FurnitureList';
import ElementList from './ElementList';
import Board from './Board';
import ImportExport from './ImportExport';

const Planer = () => {

	return (
		<Row gutter={6} style={{height: '100%'}}>
			<Col xs={24} md={8}>
				<Card title="Элементы">
					<FurnitureList />
				</Card>
				<ImportExport />
				<ElementList />
			</Col>
			<Col xs={24} md={16}>
				<Card 
					title={'Конструктор'} 
					style={{
						display: 'flex',
						flexDirection: 'column',
						overflow: 'hidden', 
						height: '100%'
					}}
					bodyStyle={{
						flexGrow: 1,
						padding: '20px 0 0'
					}}
				>
					<Board />
				</Card>
			</Col>
		</Row>
	)
}

export default Planer
