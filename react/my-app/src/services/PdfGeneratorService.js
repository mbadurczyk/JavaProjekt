import axios from 'axios';

const API_BASE_URL = "http://localhost:9192/api/pdf";

class PdfGeneratorService {

    generateStudentRaport(studentId)
    {
        return axios.get(API_BASE_URL + "/student/" + studentId);
    }
}

export default new PdfGeneratorService()