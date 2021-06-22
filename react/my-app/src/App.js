import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListTeacherComponent from './components/ListTeacherComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';


function App() {
  return (
    <div>
    <Router>
        
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListTeacherComponent}></Route>
                      <Route path = "/teachers/" exact component = {ListTeacherComponent}></Route>
                      <Route path = "/add-teacher/:id" component = {CreateTeacherComponent}></Route>
                      {/* <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                      <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                      <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                </Switch>
            </div>
    </Router>
</div>

  );
}

export default App;
