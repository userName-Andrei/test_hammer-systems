import { Button, Col, Row } from 'antd';
import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFurs } from 'redux/reducers/Furniture';
import Utils from 'utils';

const ImportExport = () => {

    const dispatch = useDispatch();
    const furnitures = useSelector(state => state.furniture.board);
    const fileRef = useRef(null);
    
    const handleExport = (data, fileName = 'planner-coords') => {
        if (!data) return;

        Utils.exportDataToTXT(data.map(item => {
            return {
                id: item.objId,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height
            }
        }), fileName);
    }

    const handleImport = () => {
        if (!fileRef) return

        fileRef.current.click();
    }

    const handleInputChange = (e) => {
        const file = e.target.files[0];

        function fileHandler(file) {
            dispatch(addFurs(file))
        }

        Utils.importTXTToData(file, fileHandler)

        e.target.value = '';
    }

    return (
        <Row gutter={6} className='mb-4'>
            <Col xs={12} >
                <Button 
                    type="primary" 
                    shape="round" 
                    className='mr-2'
                    block
                    onClick={() => handleExport(furnitures)}
                >
                    Сохранить
                </Button>
            </Col>
            <Col xs={12} >
                <Button 
                    type="primary" 
                    shape="round" 
                    danger
                    block
                    onClick={handleImport}
                >
                    Загрузить
                </Button>
            </Col>
            <input ref={fileRef} type='file' onChange={handleInputChange} hidden />
        </Row>
    );
};

export default ImportExport;