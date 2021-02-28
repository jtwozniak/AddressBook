import React from "react"
import { Switch, Route } from "react-router-dom"
import { Home } from "./Home"
import { Settings } from "./Settings"

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/settings" component={Settings} />
      <Route path="/:nationality" component={Home} />
    </Switch>
  )
}
