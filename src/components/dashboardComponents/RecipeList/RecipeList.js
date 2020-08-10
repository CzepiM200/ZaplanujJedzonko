import React, { Component } from "react";
import "./_recipeList.scss";
import { ReactComponent as EditIcon } from "../../../assets/images/Dashboard/edit-regular.svg";
import { ReactComponent as PlusIcon } from "../../../assets/images/Dashboard/plus-square-solid.svg";
import { ReactComponent as TrashIcon } from "../../../assets/images/Dashboard/trash-alt-solid.svg";

const imageStyle = {
  width: "1.5em",
  height: "1.5em",
};

const imageStylex2 = {
  width: "3em",
  height: "3em",
};

const RecipeItem = ({ id, name, description }) => {
  return (
    <tr className="recipe-list__list-item">
      <th className="recipe-list__id">{id}</th>
      <th className="recipe-list__name">{name}</th>
      <th className="recipe-list__description">{description}</th>
      <th className="recipe-list__icons">
        <EditIcon style={imageStyle} /> <TrashIcon style={imageStyle} />
      </th>
    </tr>
  );
};

const RecipeListGenerator = () => {
  let recipeArray = JSON.parse(localStorage.getItem("recipe"));

  return (
    <>
      {recipeArray.map((item, index) => (
        <RecipeItem
          id={index}
          name={item.title}
          description={item.description}
        />
      ))}
    </>
  );
};

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.redirectToAddNewRecipe = this.redirectToAddNewRecipe.bind(this);
  }

  redirectToAddNewRecipe() {
    this.props.history.push("/dashboard/recipes/new");
  }

  render() {
    return (
      <section className="box">
        <header className="recipe-list__header">
          <div className="recipe-list__top-section">
            <h1>Lista przepisów</h1>
            <div className="new-recipe__add-icon">
              <PlusIcon
                style={imageStylex2}
                onClick={this.redirectToAddNewRecipe}
              />
            </div>
          </div>
          <div className="recipe-list__line"></div>
        </header>
        <article className="recipe-list__list">
          <table className="recipe-list__table">
            <thead className="recipe-list__table-head">
              <tr className="recipe-list__list-item_head">
                <th>Id</th>
                <th>Nazwa</th>
                <th>Opis</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody className="recipe-list__table-body">
              <RecipeListGenerator />
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}
