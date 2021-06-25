package com.langschool.languageschoolproject.service;

import com.langschool.languageschoolproject.entity.Grade;
import com.langschool.languageschoolproject.repo.GradeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GradeService {

    @Autowired
    private GradeRepo repository;

    public Grade saveGrade(Grade grade)
    {
        return repository.save(grade);
    }

    public List<Grade> saveGrades(List<Grade> grades)
    {
        return repository.saveAll(grades);
    }

    public List<Grade> getGrades()
    {
        return repository.findAll();
    }

    public Grade getGradeById(int id)
    {
        return repository.findById(id).orElse(null);
    }

    public List<Grade> getGradesByStudentId(int id) { return repository.findAll().stream().filter(p -> p.getStudentId() == id).collect(Collectors.toList()); }



    public String deleteGrade(int id)
    {
        repository.deleteById(id);
        return "Grade with id "+id+" removed!";
    }

    public Grade updateGrade(Grade grade)
    {
        Grade existingGrade=repository.findById(grade.getId()).orElse(null);
        assert existingGrade != null;
        existingGrade.setValue(grade.getValue());
        existingGrade.setStudentId(grade.getStudentId());
        existingGrade.setTeacherId(grade.getTeacherId());
        existingGrade.setSubject(grade.getSubject());
        return repository.save(existingGrade);
    }
}
