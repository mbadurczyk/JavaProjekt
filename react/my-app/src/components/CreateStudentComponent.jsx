import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            lastName: '',
            schoolIndex: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({name: student.name,
                    lastName: student.lastName,
                    schoolIndex : student.schoolIndex
                });
            });
        }        
    }

    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, lastName: this.state.lastName, schoolIndex: this.state.schoolIndex};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            student.id = this.state.id;
            StudentService.updateStudent(student).then( res => {
                this.props.history.push('/students');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeSchoolIndexHandler= (event) => {
        this.setState({schoolIndex: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Index: </label>
                                            <input placeholder="Index" name="schoolIndex" className="form-control" 
                                                value={this.state.schoolIndex} onChange={this.changeSchoolIndexHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent