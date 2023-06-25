import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Users from './Users';
import Furniture from './Furniture';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users: Users,
    furniture: Furniture
});

export default reducers;