import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/teachers";

class TeacherService {

    getTeachers(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createTeacher(teacher){
        return axios.post(EMPLOYEE_API_BASE_URL, teacher);
    }

    getTeacherById(teacherId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + teacherId);
    }

    updateTeacher(teacher, teacherId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + teacherId, teacher);
    }

    deleteTeacher(teacherId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + teacherId);
    }
}

export default new TeacherService()