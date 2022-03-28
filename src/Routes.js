import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Region from './regions/Region'
import AddRegion from './regions/AddRegion'

export default function Routes() {
  return (
    <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/region' component={Region}/>
        <Route exact path='/region/new' component={AddRegion}/>
    </Switch>
  )
}