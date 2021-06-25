import React, { Component } from 'react'
import GradeService from '../services/GradeService';
import TeacherService from '../services/TeacherService';

class CreateGradeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            studentId: this.props.match.params.studentId,
            teacherId: '',
            value: '',
            subject: ''
        }
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
        this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this);
        this.changeTeacherIdHandler = this.changeTeacherIdHandler.bind(this);
        this.changeValueHandler = this.changeValueHandler.bind(this);
        this.saveOrUpdateGrade = this.saveOrUpdateGrade.bind(this);
    }

    // step 3
    componentDidMount(){
            
    }

    saveOrUpdateGrade = (e) => {
        e.preventDefault();
        let grade = {value: this.state.value, studentId: this.state.studentId, teacherId: this.state.teacherId, subject: this.state.subject};
        console.log('grade => ' + JSON.stringify(grade));
            grade.id = this.state.studentId;
            GradeService.createGrade(grade).then( res => {
                this.props.history.push(`/view-student/${this.state.studentId}`);
            });
    }
    
    
    changeSubjectHandler= (event) => {
        this.setState({subject: event.target.value});
    }

    changeValueHandler= (event) => {
        this.setState({value: event.target.value});
    }

    changeStudentIdHandler= (event) => {
        this.setState({studentId: event.target.value});
    }

    changeTeacherIdHandler= (event) => {
        this.setState({teacherId: event.target.value});
    }

    cancel(){
        this.props.history.push(`/view-student/${this.state.studentId}`);
    }

    getTitle(){
        if(this.state.studentId === '_add'){
            return <h3 className="text-center">Add Grade</h3>
        }else{
            return <h3 className="text-center">Update Grade</h3>
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
                                            <label> Subject: </label>
                                            <input placeholder="Subject" name="subject" className="form-control" 
                                                value={this.state.subject} onChange={this.changeSubjectHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Value: </label>
                                            <input placeholder="Last Name" name="value" className="form-control" 
                                                value={this.state.value} onChange={this.changeValueHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Teacher: </label>
                                            <input placeholder="Index" name="teacherId" className="form-control" 
                                                value={this.state.teacherId} onChange={this.changeTeacherIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateGrade}>Save</button>
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

export default CreateGradeComponent