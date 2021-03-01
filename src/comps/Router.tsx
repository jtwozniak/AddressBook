import React from "react"
import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Settings } from "../pages/Settings/Settings"

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/:nationality/settings" component={Settings} />
      <Route path="/:nationality" strict={false} component={Home} />
    </Switch>
  )
}
