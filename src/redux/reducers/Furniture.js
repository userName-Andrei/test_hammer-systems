import { createSlice } from "@reduxjs/toolkit";
import Chair from '../../assets/png/chair.png';
import Table from '../../assets/png/table.png';

const Furnitures = [
    {id: 1, name: 'Стул', width: 20, height: 20, x: 20, y: 20, src: Chair},
    {id: 2, name: 'Стол', width: 30, height: 60, x: 20, y: 20, src: Table}
]

const initialState = {
    furniture: Furnitures,
    board: []
}

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        editValue(state, action) {
            state.board = state.board.map(item => {
                if (item.id === action.payload.obj.id) {
                    return {...item, [action.payload.propertyName]: action.payload.value}
                }

                return item
            })
        },
        editFur(state, action) {
            state.board = state.board.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }

                return item
            })
        },
        addFurs(state, action) {
            let currentFurs = action.payload.map((item, i) => state.furniture.find(el => el.id === item.id));

            let board = action.payload.map((item, i) => ({
                ...currentFurs[i],
                ...item,
                id: i + 1,
                objId: item.id
            }));
            state.board = board;
        },
        addFur(state, action) {
            state.board.push(action.payload)
        },
        deleteFur(state, action) {
            state.board = state.board.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    deleteFur,
    editFur,
    addFurs,
    addFur,
    editValue
} = furnitureSlice.actions;

export default furnitureSlice.reducer