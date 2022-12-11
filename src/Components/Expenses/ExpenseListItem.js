const ExpenseListItem = (props) => {
  return (
    <li>
      <span>{props.amount}</span>
      {"  "}
      <span>{props.description}</span>
      {"  "}
      <span>{props.category}</span>
      {"  "}
    </li>
  );
};

export default ExpenseListItem;
