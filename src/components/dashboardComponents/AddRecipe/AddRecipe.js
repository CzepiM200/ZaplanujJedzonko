import React, { Component } from "react";
import "./_addRecipe.scss";

import { ReactComponent as EditIcon } from "../../../assets/images/Dashboard/edit-regular.svg";
import { ReactComponent as PlusIcon } from "../../../assets/images/Dashboard/plus-square-solid.svg";
import { ReactComponent as TrashIcon } from "../../../assets/images/Dashboard/trash-alt-solid.svg";

const imageStyle = {
  width: "100%",
  height: "100%",
};

const FormulaListItem = (text, number) => {
  return (
    <li className="new-recipe__instruction-item">
      {number}. {text}
    </li>
  );
};

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      currentInstructioin: "",
      currentIngredient: "",
      instuctionsList: [],
      ingredientsList: [],
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeInstruction = this.onChangeInstruction.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  saveRecipe(e) {
    e.preventDefault();
    let recipeArray = JSON.parse(localStorage.getItem("recipe"));
    console.log(recipeArray);
    if (recipeArray === null) recipeArray = [];
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      instuctionsList: this.state.instuctionsList,
      ingredientsList: this.state.ingredientsList,
    };
    recipeArray.push(newRecipe);
    localStorage.setItem("recipe", JSON.stringify(recipeArray));
    this.props.history.push("/dashboard/desktop");
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  addInstruction(e) {
    this.setState({
      instuctionsList: [
        ...this.state.instuctionsList,
        this.state.currentInstructioin,
      ],
    });
  }

  onChangeInstruction(e) {
    this.setState({ currentInstructioin: e.target.value });
  }

  addIngredient(e) {
    this.setState({
      ingredientsList: [
        ...this.state.ingredientsList,
        this.state.currentIngredient,
      ],
    });
  }

  onChangeIngredients(e) {
    this.setState({ currentIngredient: e.target.value });
  }

  render() {
    return (
      <section className="new-recipe">
        <header className="new-recipe__header">
          <h1>Nowy przepis</h1>
          <button className="new-recipe__button" onClick={this.saveRecipe}>
            Zapisz i zamknij
          </button>
        </header>
        <div className="new-recipe__line" />
        <article className="new-recipe__description">
          <div className="new-recipe__name">
            <span>Nazwa przepisu</span>
            <input
              type="text"
              placeholder="Nazwa przepisu"
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="new-recipe__survey">
            <span>Opis przepisu</span>
            <textarea
              type="text"
              placeholder="Opis przepisu"
              rows="3"
              onChange={this.onChangeDescription}
            />
          </div>
        </article>
        <article className="new-recipe__formula">
          <div className="new-recipe__instruction">
            <h2>Instrukcje</h2>
            <div className="new-recipe__line" />
            <div className="new-recipe__add-section">
              <textarea
                type="text"
                rows="3"
                placeholder="Opis przepisu"
                onChange={this.onChangeInstruction}
              />
              <div className="new-recipe__add-icon">
                <PlusIcon
                  style={{ height: "3em", width: "3em" }}
                  onClick={this.addInstruction}
                />
              </div>
            </div>
            <div className="new-recipe__instruction-list">
              {this.state.instuctionsList.map((el, index) => (
                <p>
                  {index}. {el} <EditIcon /> <TrashIcon />
                </p>
              ))}
            </div>
          </div>
          <div className="new-recipe__ingredients">
            <h2>Składniki</h2>
            <div className="new-recipe__line" />
            <div className="new-recipe__add-section">
              <input
                type="text"
                placeholder="Składnik"
                onChange={this.onChangeIngredients}
              />
              <div className="new-recipe__add-icon">
                <PlusIcon style={imageStyle} onClick={this.addIngredient} />
              </div>
            </div>
            <div className="new-recipe__ingredients-list">
              {this.state.ingredientsList.map((el) => (
                <p>
                  ● {el} <EditIcon /> <TrashIcon />
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default AddRecipe;
