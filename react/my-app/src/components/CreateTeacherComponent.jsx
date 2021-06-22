import React, { Component } from 'react'
import TeacherService from '../services/TeacherService';

class CreateTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            lastName: '',
            subject: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateTeacher = this.saveOrUpdateTeacher.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            TeacherService.getTeacherById(this.state.id).then( (res) =>{
                let teacher = res.data;
                this.setState({name: teacher.name,
                    lastName: teacher.lastName,
                    subject : teacher.subject
                });
            });
        }        
    }

    saveOrUpdateTeacher = (e) => {
        e.preventDefault();
        let teacher = {name: this.state.name, lastName: this.state.lastName, subject: this.state.subject};
        console.log('teacher => ' + JSON.stringify(teacher));

        if(this.state.id === '_add'){
            TeacherService.createTeacher(teacher).then(res =>{
                this.props.history.push('/teachers');
            });
        }else{
            teacher.id = this.state.id;
            TeacherService.updateTeacher(teacher).then( res => {
                this.props.history.push('/teachers');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeSubjectHandler= (event) => {
        this.setState({subject: event.target.value});
    }

    cancel(){
        this.props.history.push('/teachers');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Teacher</h3>
        }else{
            return <h3 className="text-center">Update Teacher</h3>
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
                                            <label> Subject: </label>
                                            <input placeholder="Subject" name="subject" className="form-control" 
                                                value={this.state.subject} onChange={this.changeSubjectHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTeacher}>Save</button>
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

export default CreateTeacherComponent