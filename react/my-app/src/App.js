import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListTeacherComponent from './components/ListTeacherComponent';
import CreateTeacherComponent from './components/CreateTeacherComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ListStudentComponent from './components/ListStudentComponent';
import HomePage from './components/HomePage';
import StudentViewComponent from './components/StudentViewComponent';
import CreateGradeComponent from './components/CreateGradeComponent';

function App() {
  return (
    <div>
    <Router>
        
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {HomePage}></Route>
                      <Route path = "/teachers/" exact component = {ListTeacherComponent}></Route>
                      <Route path = "/add-teacher/:id" component = {CreateTeacherComponent}></Route>
                      <Route path = "/students/" exact component = {ListStudentComponent}></Route>
                      <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                      <Route path = "/add-grade/:studentId" component =   {CreateGradeComponent}></Route>
                      <Route path = "/view-student/:id" component ={StudentViewComponent}></Route>
                </Switch>
            </div>
    </Router>

</div>

  );
}

export default App;
