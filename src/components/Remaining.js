import React, { useContext, useSelector } from 'react';
import { AppContext } from '../context/AppContext';
import { Budget } from '../components/Budget';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const remainingBudget = budget - totalExpenses;
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{remainingBudget}</span>
        </div>
    );
};
export default Remaining;