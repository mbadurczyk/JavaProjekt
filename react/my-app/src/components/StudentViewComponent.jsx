import React, { Component } from 'react'
import StudentService from '../services/StudentService'
import TeacherService from '../services/TeacherService'
import GradeService from '../services/GradeService'
import PdfGeneratorService from '../services/PdfGeneratorService'
import DownloadLink from "react-download-link";

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {},
            grades: []
        }

        this.addGrade = this.addGrade.bind(this);
        this.editGrade = this.editGrade.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.getGradeSubject = this.getGradeSubject.bind(this);
        this.generateReport = this.generateReport.bind(this);
    }

    generateReport() {
        PdfGeneratorService.generateStudentRaport(this.state.id);
    }

    addGrade() {
        this.props.history.push(`/add-grade/${this.state.id}`);
    }

    deleteGrade(id) {
        GradeService.deleteGrade(id).then(res => {
            this.setState({ grades: this.state.grades.filter(grade => grade.id !== id) });
        });
    }

    editGrade(id) {
        this.props.history.push(`/add-grade/${id}`);
    }

    getGradeSubject(grade) {
        return GradeService.getGradeById(grade.gradeId).subject;
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState({ student: res.data });
        });

        GradeService.getGradesByStudentId(this.state.id).then(res => {
            this.setState({ grades: res.data });
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Student Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Student First Name: </label>
                            <div> {this.state.student.name}</div>
                        </div>
                        <div className="row">
                            <label> Student Last Name: </label>
                            <div> {this.state.student.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Student School Index: </label>
                            <div> {this.state.student.schoolIndex}</div>
                        </div>



                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Subject</th>
                                    <th> Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.grades.map(
                                        grade =>
                                            <tr key={grade.id}>
                                                <td> {grade.subject} </td>
                                                <td> {grade.value}</td>
                                                <td>
                                                    <button onClick={() => this.editGrade(grade.id)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteGrade(grade.id)} className="btn btn-danger">Delete </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <br></br>
                        <div className="row">

                            <button className="btn btn-primary" onClick={this.addGrade}> Add Grade</button>

                        </div>
                        <br></br>
                        <div className="row">
                            {/* <a href={'http://localhost:9192/api/pdf/student/' + this.state.id} download>Click to download</a>
                            <button className="btn btn-primary" onClick={this.generateReport}> Generate PDF report</button> */}
                            <form  action={'http://localhost:9192/api/pdf/student/' + this.state.id}> 
                            <input className="btn btn-primary" type="submit" value="Generate PDF report" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
