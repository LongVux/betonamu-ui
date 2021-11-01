import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/homepage/HomePage";
import StudyMaterialPage from "../pages/studyMaterialpage/StudyMaterialPage";
import TestPage from "../pages/testpage/TestPage";

export const ROUTES = [
  {
    path: "/", 
    key: "root",
    exact: true,
    component: () => <HomePage />
  },
  {
    path: "/studyMaterial", 
    key: "studyMaterial",
    exact: true,
    component: () => <StudyMaterialPage />
  },
  {
    path: "/studyMaterial/:id", 
    key: "testpage",
    exact: true,
    component: () => <TestPage />
  }
]

export function RenderRoutes() {
  return (
    <Switch>
      {
        ROUTES.map(route => {
          return (
            <Route 
              path={route.path}
              exact={route.exact}
              render={route.component}
            />
          )
        })
      }
    </Switch>
  )
}