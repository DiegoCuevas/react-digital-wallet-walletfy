/** @jsx jsx */
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import React, { useState } from "react";
import { connect } from "react-redux";
import { FaCheck, FaArrowAltCircleUp, FaUndoAlt } from "react-icons/fa";
import {
  addExpense,
  addIncome,
  addExpenseCategory,
  addIncomeCategory
} from "../actions";

function RegisterForm(props) {
  const [isExpense, setIsExpense] = useState(props.isExpense || true);
  const [categoryId, setCategoryId] = useState("");

  function changeType() {
    setIsExpense(!isExpense);
    setCategoryId("");
  }

  function changeCategoryId(event) {
    setCategoryId(event.target.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const description = event.target.elements.desc.value;

    switch (isExpense) {
      case true:
        props.addExpense(categoryId, amount, description);
        break;

      case false:
        props.addIncome(categoryId, amount, description);
        break;

      default:
        break;
    }
    navigate("/");
  }

  function handleCategorySubmit(event) {
    event.preventDefault();
    const category = event.target.elements.category.value;
    event.target.elements.category.value = "";
    switch (isExpense) {
      case true:
        let expenseResponse = props.addExpenseCategory(category);
        setCategoryId(expenseResponse.payload.id);
        break;

      case false:
        let Incomeresponse = props.addIncomeCategory(category);
        setCategoryId(Incomeresponse.payload.id);
        break;

      default:
        break;
    }
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <section
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <form
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div>
            <input
              type="radio"
              id="expense"
              name="transactionType"
              value="expense"
              defaultChecked={isExpense}
              onClick={changeType}
              css={{
                display: "none",
                "&:checked+label": {
                  backgroundColor: "#b23655",
                  border: "solid 1px #b23655",
                  color: "#fff",
                  fontWeight: "bold"
                }
              }}
            />
            <label
              htmlFor="expense"
              css={{
                backgroundColor: "inherit",
                color: "inherit",
                padding: "0.5em",
                margin: "0.5em",
                width: "4em",
                display: "block",
                textAlign: "center",
                border: "solid 1px #e0e0dc"
              }}
            >
              Expense
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="income"
              name="transactionType"
              value="income"
              onClick={changeType}
              css={{
                display: "none",
                "&:checked+label": {
                  backgroundColor: "#36b35f",
                  border: "solid 1px #36b35f",
                  color: "#fff",
                  fontWeight: "bold"
                }
              }}
            />
            <label
              htmlFor="income"
              css={{
                backgroundColor: "inherit",
                color: "inherit",
                padding: "0.5em",
                margin: "0.5em",
                width: "4em",
                display: "block",
                textAlign: "center",
                border: "solid 1px #e0e0dc"
              }}
            >
              Income
            </label>
          </div>
        </div>
        <input
          css={{
            border: "none",
            backgroundColor: "#FFF",
            width: "70%",
            display: "block",
            fontSize: "3em",
            padding: "0.35em",
            textAlign: "center"
          }}
          type="number"
          name="amount"
          placeholder="S/"
        />
        <input
          css={{
            border: "none",
            backgroundColor: "#FFF",
            width: "70%",
            display: "block",
            fontSize: "0.95em",
            padding: "0.25em",
            textAlign: "center",
            marginTop: "5px"
          }}
          type="text"
          name="desc"
          placeholder="optional description"
        />
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            "&:before": {
              content: "''",
              width: "100%",
              height: "1px",
              backgroundColor: "#e0e0dc",
              display: "block",
              position: "absolute",
              top: "0",
              bottom: "0",
              margin: "auto"
            }
          }}
        >
          <span
            css={{
              backgroundColor: "#fafaf5",
              padding: "0 0.5em",
              margin: "0.5em",
              zIndex: "1"
            }}
          >
            Categories
          </span>
        </div>
        <div
          css={{
            maxHeight: "225px",
            overflow: "auto"
          }}
        >
          <ul
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "0.5em",
              padding: "0.5em",
              margin: "0"
            }}
          >
            {Object.values(
              isExpense ? props.expenseCategories : props.incomeCategories
            ).map(category => {
              let isSelected = categoryId == category.id;
              return (
                <li
                  key={category.id}
                  onClick={changeCategoryId}
                  id={category.id}
                  css={{
                    maxHeight: "2.5em",
                    height: "2.5em",
                    backgroundColor: isSelected
                      ? isExpense
                        ? "#f4a0a8"
                        : "#87caa6"
                      : "#edede8",
                    padding: "0.25em",
                    borderRadius: "3px",
                    textAlign: "center",
                    fontSize: "0.95em",
                    justifySelf: "stretch",
                    overflow: "auto"
                  }}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type="submit"
          css={{
            border: "none",
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            padding: "7px 0 0 0",
            fontSize: "2em",
            textAlign: "center",
            color: "#FFF",
            backgroundColor: "#cc525c",
            position: "absolute",
            bottom: "4rem",
            right: "0.5em"
          }}
        >
          <FaCheck />
        </button>
      </form>
      <form
        onSubmit={handleCategorySubmit}
        css={{
          display: "flex",
          maxHeight: "2em"
        }}
      >
        <input
          type="text"
          name="category"
          placeholder="new category"
          css={{
            border: isExpense ? "solid 1px  #f4a0a8" : "solid 1px  #87caa6",
            fontSize: "1em",
            padding: "0.5em"
          }}
        />
        <button
          type="submit"
          css={{
            border: "none",
            background: "transparent",
            fontSize: "2em",
            display: "block",
            color: isExpense ? "#f4a0a8" : "#87caa6",
            cursor: "pointer"
          }}
        >
          <FaArrowAltCircleUp />
        </button>
      </form>
      <button
        onClick={handleBack}
        css={{
          border: "none",
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          padding: "7px 0 0 0",
          fontSize: "2em",
          textAlign: "center",
          color: "#FFF",
          backgroundColor: "#cc525c",
          position: "absolute",
          bottom: "4rem",
          left: "0.5em"
        }}
      >
        <FaUndoAlt />
      </button>
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
    }
  };
}

function mapState(state) {
  const expenseCategories = state.expenseCategories;
  const incomeCategories = state.incomeCategories;
  return {
    expenseCategories: expenseCategories,
    incomeCategories: incomeCategories
  };
}

export default connect(
  mapState,
  mapDispatch
)(RegisterForm);
