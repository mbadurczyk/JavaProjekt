import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:9192/api";

class GradeService {

    getGrades(){
        return axios.get(TEACHER_API_BASE_URL + "/grades");
    }

    createGrade(grade){
        return axios.post(TEACHER_API_BASE_URL + "/addgrade" , grade);
    }

    getGradeById(gradeId){
        return axios.get(TEACHER_API_BASE_URL + '/gradeById/' + gradeId);
    }

    getGradesByStudentId(studentId){
        return axios.get(TEACHER_API_BASE_URL + '/gradesByStudentId/' + studentId);
    }

    updateGrade(grade){
        return axios.put(TEACHER_API_BASE_URL + '/updateGrade/', grade);
    }

    deleteGrade(gradeId){
        return axios.delete(TEACHER_API_BASE_URL + '/deleteGrade/' + gradeId);
    }
}

export default new GradeService()