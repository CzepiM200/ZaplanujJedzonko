import React, { useState, Component } from "react";
import Form from "../MessagesAndForm/Form";
import Desktop from "../Desktop/Desktop";

class StartingWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { handleNameChange, handleSubmit, name, history } = this.props;
    const redirectToAddrecipe = () => {
      history.push("/dashboard/recipes/new");
    };
    // redirectToAddrecipe();
    console.log(history);
    return (
      <>
        {localStorage.getItem("savedName") ? (
          <Desktop />
        ) : (
          <Form
            handleNameChange={handleNameChange}
            handleSubmit={handleSubmit}
            name={name}
          />
        )}
      </>
    );
  }
}

export default StartingWindow;
