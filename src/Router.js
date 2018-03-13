import React from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  return(
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="login" component={LoginForm} title="Please Login"/>

        <Scene key="main">

          <Scene
            key="employeeList"
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            component={EmployeeList}
            title="Employees"
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            back={true}
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            back={true}
          />

        </Scene>
      </Stack>

    </Router>
  )
}

export default RouterComponent
