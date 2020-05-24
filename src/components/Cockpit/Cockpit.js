import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const Cockpit = (props) => {
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      {" "}
      <h1>Hi, I am a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <StyledButton alt={props.showPersons ? 1 : 0} onClick={props.clicked}>
        Toggle Person
      </StyledButton>
    </div>
  );
};

export default Cockpit;
