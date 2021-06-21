package com.langschool.languageschoolproject.controller;

import com.langschool.languageschoolproject.entity.Teacher;
import com.langschool.languageschoolproject.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeacherController {
    @Autowired
    private TeacherService service;

    @PostMapping("/addteacher")
    public Teacher addTeacher(@RequestBody Teacher teacher)
    {
        return service.saveTeacher(teacher);
    }

    @PostMapping("/addteachers")
    public List<Teacher> addTeachers(@RequestBody List<Teacher> teachers)
    {
        return service.saveTeachers(teachers);
    }

    @GetMapping("/teachers")
    public List<Teacher> findAllTeachers()
    {
        return service.getTeachers();
    }

    @GetMapping("/teacherById/{id}")
    public Teacher findTeacherById(@PathVariable int id)
    {
        return service.getTeacherById(id);
    }

    @GetMapping("/teacher/{idx}")
    public Teacher findTeacherBySubject(@PathVariable String subj)
    {
        return service.getTeacherBySubject(subj);
    }

    @PutMapping("/updateTeacher")
    public Teacher updateTeacher(@RequestBody Teacher teacher)
    {
        return service.updateTeacher(teacher);
    }

    @DeleteMapping("/deleteTeacher/{id}")
    public String deleteTeacher(@PathVariable int id)
    {
        return service.deleteTeacher(id);
    }

}
