import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:9192/api";

class TeacherService {

    getTeachers(){
        return axios.get(TEACHER_API_BASE_URL + "/teachers");
    }

    createTeacher(teacher){
        return axios.post(TEACHER_API_BASE_URL + "/addteacher" , teacher);
    }

    getTeacherById(teacherId){
        return axios.get(TEACHER_API_BASE_URL + '/teacherById/' + teacherId);
    }

    updateTeacher(teacher){
        return axios.put(TEACHER_API_BASE_URL + '/updateTeacher/', teacher);
    }

    deleteTeacher(teacherId){
        return axios.delete(TEACHER_API_BASE_URL + '/deleteTeacher/' + teacherId);
    }
}

export default new TeacherService()