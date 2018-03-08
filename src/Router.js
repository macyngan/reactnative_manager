import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="root" tabs>
          <Scene key="login" component={LoginForm} title="Please Login"/>
          <Scene key="main">
            <Scene key="employeeList" component={EmployeeList} title="Employees"/>
          </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent