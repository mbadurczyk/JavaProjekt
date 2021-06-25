package com.langschool.languageschoolproject.controller;

import com.langschool.languageschoolproject.service.PDFGeneratorService;
import com.langschool.languageschoolproject.service.StudentService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class PDFExportController {

    private final PDFGeneratorService pdfGeneratorService;
    private final StudentService studentService;

    public PDFExportController(PDFGeneratorService pdfGeneratorService, StudentService studentService) {
        this.pdfGeneratorService = pdfGeneratorService;
        this.studentService = studentService;
    }

    @GetMapping("/pdf/generate")
    public void generatePDF(HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd:hh:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=pdf_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        this.pdfGeneratorService.export(response);
    }

    @GetMapping("/pdf/student/{id}")
    public void generateStudentReport( @PathVariable int id, HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd:hh:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=raport_" + studentService.getStudentById(id).getSchoolIndex() + '_'  + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        this.pdfGeneratorService.export_raport(response, id);
    }
}