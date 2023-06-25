import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Draggable from 'react-draggable';
import { editFur } from 'redux/reducers/Furniture';

import styles from './Board.module.css';

const Board = () => {

    const dispatch = useDispatch();
    const furnitures = useSelector(state => state.furniture.board);

    const handleDragEnd = (elemObj, moveData) => {
        const newFurObj = {
            ...elemObj,
            x: moveData.x,
            y: moveData.y
        }

        dispatch(editFur(newFurObj))
    }

    const renderFurs = (data) => {
        return data.map(elem => (
            <Draggable
                key={nanoid()}
                allowAnyClick={true}
                bounds="parent"
                defaultPosition={{x: elem.x, y: elem.y}}
                onStop={(e, moveData) => handleDragEnd(elem, moveData)}
            >
                <div className={styles.item} style={{
                    width: `${elem.width}px`,
                    height: `${elem.height}px`
                }}>
                    <img 
                        src={elem.src}
                        alt={elem.name}
                    />
                </div>
            </Draggable>
        ))
    }

    return (
        <div className={styles.board}>
            {renderFurs(furnitures)}
        </div>
    );
};

export default Board;