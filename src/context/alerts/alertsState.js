import {useReducer} from 'react';
import alertContext from './alertsContext';
import alertsReducer from './alertsReducer';
import { SET_ALERT, REMOVE_ALERT} from '../types';


const AlertsState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertsReducer, initialState);

    const setAlert = (message, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {
                message,
                type
            }
        });

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000 )
    }

    return (
        <alertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}


export default AlertsState;
