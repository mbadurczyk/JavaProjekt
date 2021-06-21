package com.langschool.languageschoolproject.controller;

import com.langschool.languageschoolproject.entity.Student;
import com.langschool.languageschoolproject.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentService service;

    @PostMapping("/addstudent")
    public Student addStudent(@RequestBody Student student)
    {
        return service.saveStudent(student);
    }

    @PostMapping("/addstudents")
    public List<Student> addStudents(@RequestBody List<Student> students)
    {
        return service.saveStudents(students);
    }

    @GetMapping("/students")
    public List<Student> findAllStudents()
    {
        return service.getStudents();
    }

    @GetMapping("/studentById/{id}")
    public Student findStudentById(@PathVariable int id)
    {
        return service.getStudentById(id);
    }

    @GetMapping("/student/{idx}")
    public Student findStudentBySchoolIndex(@PathVariable String idx)
    {
        return service.getStudentBySchoolIndex(idx);
    }

    @PutMapping("/update")
    public Student updateStudent(@RequestBody Student student)
    {
        return service.updateStudent(student);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id)
    {
        return service.deleteStudent(id);
    }

}
