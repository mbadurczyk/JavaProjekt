import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:9191/api";

class StudentService {

    getStudents(){
        return axios.get(TEACHER_API_BASE_URL + "/students");
    }

    createStudent(student){
        return axios.post(TEACHER_API_BASE_URL + "/addstudent" , student);
    }

    getStudentById(studentId){
        return axios.get(TEACHER_API_BASE_URL + '/studentById/' + studentId);
    }

    updateStudent(student){
        return axios.put(TEACHER_API_BASE_URL + '/updateStudent/', student);
    }

    deleteStudent(studentId){
        return axios.delete(TEACHER_API_BASE_URL + '/deleteStudent/' + studentId);
    }
}

export default new StudentService()