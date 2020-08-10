import React from "react";
import AddRecipe from "../AddRecipe/AddRecipe";
import RecipeList from "../RecipeList/RecipeList";
import StartingWindow from "../StartWindow/StartingWindow";
import LayoutNewPlan from "../LayoutNewPlan/LayoutNewPlan";
import { Switch, Route } from "react-router-dom";
import "./_dashboardScreen.scss";

const DashboardScreen = ({ handleNameChange, handleSubmit, name }) => {
  return (
    <section className="dashboard__screen">
      <Switch>
        <Route
          path="/dashboard/desktop"
          component={function () {
            return (
              <StartingWindow
                handleNameChange={handleNameChange}
                handleSubmit={handleSubmit}
                name={name}
              />
            );
          }}
        ></Route>
        <Route path="/dashboard/recipes/new" exact component={AddRecipe} />
        <Route path="/dashboard/recipes" exact component={RecipeList} />
        <Route
          path="/dashboard/plan/new"
          exact
          component={LayoutNewPlan}
        ></Route>
      </Switch>
    </section>
  );
};
export default DashboardScreen;
