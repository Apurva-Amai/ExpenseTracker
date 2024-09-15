import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredDate] = useState('2024');

    const filterDateHandler = (selectedYear) => {
        setFilteredDate(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterDate={filterDateHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                
            </Card>
        </div>
    )
}






export default Expenses;
