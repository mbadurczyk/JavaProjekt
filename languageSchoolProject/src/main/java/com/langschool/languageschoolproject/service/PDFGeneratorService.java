package com.langschool.languageschoolproject.service;

import com.langschool.languageschoolproject.entity.Grade;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

@Service
public class PDFGeneratorService {
    private final StudentService studentService;
    private final TeacherService teacherService;
    private final GradeService gradeService;

    public PDFGeneratorService(StudentService studentService, TeacherService teacherService, GradeService gradeService) {
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.gradeService = gradeService;
    }

    public void export(HttpServletResponse response) throws IOException {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();
        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Paragraph paragraph = new Paragraph("Title.", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraph.setSize(12);

        Paragraph paragraph2 = new Paragraph("This is a paragraph.", fontParagraph);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);

        document.add(paragraph);
        document.add(paragraph2);
        document.close();
    }

    public void export_raport(HttpServletResponse response, int id) throws IOException {
        List<Grade> gradeList = gradeService.getGradesByStudentId(id);

        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());
        document.open();

        Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);

        Font fontParagraph = FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraph.setSize(12);


        Paragraph paragraph = new Paragraph("Raport ocen ucznia.", fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);

        Paragraph paragraph2 = new Paragraph("Imie: " + studentService.getStudentById(id).getName() + '\n' +
                                                "Nazwisko: " + studentService.getStudentById(id).getLastName() + '\n' +
                                                "Indeks: " + studentService.getStudentById(id).getSchoolIndex() + "\n\n\n" +
                                                "Oceny:" + "\n\n"
                , fontParagraph);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);

        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String currentDateTime = dateFormatter.format(new Date());

        Paragraph paragraph3 = new Paragraph( currentDateTime, fontParagraph);

        PdfPTable table = new PdfPTable(3);
        addTableHeader(table);
        addRows(table, gradeList);

        document.add(paragraph);
        document.add(paragraph2);
        document.add(paragraph3);
        document.add(table);
        document.close();
    }

    private void addTableHeader(PdfPTable table) {
        Stream.of("Przedmiot", "Ocena", "Nauczyciel")
                .forEach(columnTitle -> {
                    PdfPCell header = new PdfPCell();
                    header.setBorderWidth(2);
                    header.setPhrase(new Phrase(columnTitle));
                    table.addCell(header);
                });
    }

    private void addRows(PdfPTable table, List<Grade> grades) {
        Iterator<Grade> gradeIterator = grades.iterator();
        while (gradeIterator.hasNext()) {
            Grade grade = gradeIterator.next();

            table.addCell(teacherService.getTeacherById(grade.getTeacherId()).getSubject());
            table.addCell(String.valueOf(grade.getValue()));
            table.addCell(teacherService.getTeacherById(grade.getTeacherId()).getSubject());
        }
    }
}