import { History } from 'history';
import { connectRouter } from 'connected-react-router';

export default (history: History) => connectRouter(history);
