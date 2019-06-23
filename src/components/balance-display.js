/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import MonthYearPicker from "react-month-year-picker";
import BalanceTable from "./balance-table";
import { FaCaretDown } from "react-icons/fa";

function BalanceDisplay(props) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [showCalendar, setShowCalendar] = useState(false);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  function handleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  function filterMovements(type, date) {
    const categories = Object.values(props.categories)
      .filter(category => category.type === type)
      .map(category => category.id);

    const filterByCategory = Object.values(props.movements).filter(movement => {
      return categories.includes(movement.categoryId);
    });

    return filterByCategory.filter(movement => new Date(movement.date) <= date);
  }

  function finalBalance(date) {
    const totalIncome = filterMovements("income", date).reduce(
      (acum, e) => acum + e["amount"],
      0
    );
    const totalExpense = filterMovements("expense", date).reduce(
      (acum, e) => acum + e["amount"],
      0
    );

    return totalIncome - totalExpense;
  }

  return (
    <>
      <div
        onClick={handleShowCalendar}
        css={{
          alignSelf: "center",
          backgroundColor: "#5086ed",
          padding: "0.25rem 0.5em",
          fontSize: "1.1em",
          color: "#FFF",
          fontWeight: "bold"
        }}
      >
        {month}-{year} <FaCaretDown />
      </div>
      <div
        css={{
          display: showCalendar ? "block" : "none",
          ".month-year-picker": {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "0.25em 0"
          },
          ".month-year-picker .caption": {
            marginBottom: "0.25em"
          },
          ".month-year-picker .year-picker": {
            marginBottom: "unset"
          },
          ".month-year-picker .month-picker": {
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr"
          },
          ".month-year-picker .month-picker > div": {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            justifyItems: "stretch"
          },
          ".month-year-picker .month-picker > div > div": {
            width: "unset"
          }
        }}
      >
        <MonthYearPicker
          selectedMonth={month}
          selectedYear={year}
          minYear={2000}
          maxYear={2030}
          onChangeYear={year => setYear(year)}
          onChangeMonth={month => {
            setMonth(month);
            handleShowCalendar();
          }}
        />
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1em",
          fontSize: "1.25em",
          marginTop: "0.5em"
        }}
      >
        <span>Initial balance:</span>
        <span>S/ xxx</span>
      </div>
      <BalanceTable year={year} month={month} type="expense" setTotal={setTotalExpense} />
      <BalanceTable year={year} month={month} type="income" setTotal={setTotalIncome} />
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1em",
          fontSize: "1.25em"
        }}
      >
        <span>Final balance:</span>
        <span>S/ {finalBalance(new Date(`${year}-${month + 1}`) - 1)}</span>
      </div>
    </>
  );
}

function mapState(state) {
  return {
    movements: state.movements,
    categories: state.categories
  };
}

export default connect(
  mapState,
  null
)(BalanceDisplay);
