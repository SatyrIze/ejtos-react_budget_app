import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

import plusSVG from '../plus.svg';
import minusSVG from '../minus.svg';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{background: 'none', border: 'none', padding: '5px', cursor: 'pointer' }} onClick={event=> increaseAllocation(props.name)}><img src={plusSVG} alt="plus" style={{ width: '25px', height: '25px'}}/></button></td>
        <td><button style={{background: 'none', border: 'none', padding: '5px', cursor: 'pointer' }} onClick={event=> decreaseAllocation(props.name)}><img src={minusSVG} alt="plus" style={{ width: '22px', height: '22px'}}/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;