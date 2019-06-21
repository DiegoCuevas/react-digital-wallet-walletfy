/** @jsx jsx */
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import React from "react";
import { connect } from "react-redux";
import {
  addExpense,
  addIncome,
  addExpenseCategory,
  addIncomeCategory,
  addBalance
} from "../actions";

function RegisterForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const categoryId = event.target.elements.categoryId.value;
    const amount = event.target.elements.amount.value;
    const desc = event.target.elements.desc.value;
    const ExpCategoryName = event.target.elements.expenseCategory.value;
    const IncCategoryName = event.target.elements.incomeCategory.value;
    props.addIncomeCategory(IncCategoryName);
    props.addBalance(2019, 6, 100, 200, 50, 250);
  }

  return (
    <section
      css={{
        height: "calc(100vh - 3em)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <input
          css={{
            borderRadius: "5px",
            border: "1px solid #dbdbdb",
            textAlign: "center",
            height: "3rem",
            fontSize: "2rem",
            width: "90%",
            margin: "1em 0"
          }}
          type="text"
          name="categoryId"
          placeholder="categoryId"
        />
        <input
          css={{
            borderRadius: "5px",
            border: "1px solid #dbdbdb",
            textAlign: "center",
            height: "3rem",
            fontSize: "2rem",
            width: "90%",
            margin: "1em 0"
          }}
          type="text"
          name="amount"
          placeholder="amount"
        />
        <input
          css={{
            borderRadius: "5px",
            border: "1px solid #dbdbdb",
            textAlign: "center",
            height: "3rem",
            fontSize: "2rem",
            width: "90%",
            margin: "1em 0"
          }}
          type="text"
          name="desc"
          placeholder="description"
        />
        <input
          css={{
            borderRadius: "5px",
            border: "1px solid #dbdbdb",
            textAlign: "center",
            height: "3rem",
            fontSize: "2rem",
            width: "90%",
            margin: "1em 0"
          }}
          type="text"
          name="expenseCategory"
          placeholder="expenseCategory"
        />
        <input
          css={{
            borderRadius: "5px",
            border: "1px solid #dbdbdb",
            textAlign: "center",
            height: "3rem",
            fontSize: "2rem",
            width: "90%",
            margin: "1em 0"
          }}
          type="text"
          name="incomeCategory"
          placeholder="incomeCategory"
        />
        <button
          type="submit"
          css={{
            backgroundColor: "#3897f0",
            border: "1px solid #3897f0",
            borderRadius: "5px",
            color: "#fff",
            padding: "0.5rem",
            fontSize: "1.5rem",
            width: "90%",
            margin: "1em 0",
            cursor: "pointer",
            "&:disabled": {
              backgroundColor: "#dbdbdb",
              border: "1px solid #dbdbdb"
            }
          }}
        >
          Add
        </button>
      </form>
    </section>
  );
}

function mapDispatch(dispatch) {
  return {
    addExpense(categoryId, amount, desc) {
      return dispatch(addExpense(categoryId, amount, desc));
    },
    addIncome(categoryId, amount, desc) {
      return dispatch(addIncome(categoryId, amount, desc));
    },
    addExpenseCategory(name) {
      return dispatch(addExpenseCategory(name));
    },
    addIncomeCategory(name) {
      return dispatch(addIncomeCategory(name));
    },
    addBalance(year, month, initial, income, expense, final) {
      return dispatch(addBalance(year, month, initial, income, expense, final));
    }
  };
}

export default connect(
  null,
  mapDispatch
)(RegisterForm);
