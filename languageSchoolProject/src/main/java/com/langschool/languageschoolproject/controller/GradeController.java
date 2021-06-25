package com.langschool.languageschoolproject.controller;

import com.langschool.languageschoolproject.entity.Grade;
import com.langschool.languageschoolproject.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class GradeController {
    @Autowired
    private GradeService service;

    @PostMapping("/addgrade")
    public Grade addGrade(@RequestBody Grade grade)
    {
        return service.saveGrade(grade);
    }

    @PostMapping("/addgrades")
    public List<Grade> addGrades(@RequestBody List<Grade> grades)
    {
        return service.saveGrades(grades);
    }

    @GetMapping("/grades")
    public List<Grade> findAllGrades()
    {
        return service.getGrades();
    }
    @GetMapping("/gradesByStudentId/{id}")
    public List<Grade> findAllGradesByStudentId(@PathVariable int id)
    {
        return service.getGradesByStudentId(id);
    }

    @GetMapping("/gradeById/{id}")
    public Grade findGradeById(@PathVariable int id)
    {
        return service.getGradeById(id);
    }

    @PutMapping("/updateGrade")
    public Grade updateGrade(@RequestBody Grade grade)
    {
        return service.updateGrade(grade);
    }

    @DeleteMapping("/deleteGrade/{id}")
    public String deleteGrade(@PathVariable int id)
    {
        return service.deleteGrade(id);
    }

}
