import { configureStore } from 'redux';
import reducer from './reducer';

const Store = configureStore(reducer);

export default Store;
