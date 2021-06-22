import React, { PureComponent } from 'react'

class HomePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }

        this.viewStudents = this.viewStudents.bind(this);
        this.viewTeachers = this.viewTeachers.bind(this);
    }

    viewStudents(){
        this.props.history.push('/students/');
    }

    viewTeachers(){
        this.props.history.push('/teachers/');
    }

    render() {
        return (
            <div>
                                    <button onClick={ () => this.viewStudents()} className="btn btn-info">Students </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewTeachers()} className="btn btn-danger">Teachers </button>      
            </div>
        )
    }
}

export default HomePage