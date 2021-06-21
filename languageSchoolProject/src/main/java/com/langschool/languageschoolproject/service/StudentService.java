package com.langschool.languageschoolproject.service;

import com.langschool.languageschoolproject.entity.Student;
import com.langschool.languageschoolproject.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repository;
    public Student saveStudent(Student student)
    {
        return repository.save(student);
    }

    public List<Student> saveStudents(List<Student> students)
    {
        return repository.saveAll(students);
    }

    public List<Student> getStudents()
    {
        return repository.findAll();
    }

    public Student getStudentById(int id)
    {
        return repository.findById(id).orElse(null);
    }
    public Student getStudentBySchoolIndex (String idx)
    {
        return repository.findBySchoolIndex(idx);

    }

    public String deleteStudent(int id)
    {
        repository.deleteById(id);
        return "Student with id "+id+" removed!";
    }

    public Student updateStudent(Student student)
    {
        Student existingStudent=repository.findById(student.getId()).orElse(null);
        existingStudent.setName(student.getName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setSchoolIndex(student.getSchoolIndex());
        return repository.save(existingStudent);
    }
}
