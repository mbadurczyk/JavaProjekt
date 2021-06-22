package com.langschool.languageschoolproject.service;

import com.langschool.languageschoolproject.entity.Teacher;
import com.langschool.languageschoolproject.repo.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepo repository;
    public Teacher saveTeacher(Teacher teacher)
    {
        return repository.save(teacher);
    }

    public List<Teacher> saveTeachers(List<Teacher> teachers)
    {
        return repository.saveAll(teachers);
    }

    public List<Teacher> getTeachers()
    {
        return repository.findAll();
    }

    public Teacher getTeacherById(int id)
    {
        return repository.findById(id).orElse(null);
    }
    public Teacher getTeacherBySubject (String subj)
    {
        return repository.findBySubject(subj);

    }

    public String deleteTeacher(int id)
    {
        repository.deleteById(id);
        return "Teacher with id "+id+" removed!";
    }

    public Teacher updateTeacher(Teacher teacher)
    {
        Teacher existingTeacher=repository.findById(teacher.getId()).orElse(null);
        existingTeacher.setName(teacher.getName());
        existingTeacher.setLastName(teacher.getLastName());
        existingTeacher.setSubject(teacher.getSubject());
        existingTeacher.setLogin(teacher.getLogin());
        existingTeacher.setPassword(teacher.getPassword());
        return repository.save(existingTeacher);
    }

}
