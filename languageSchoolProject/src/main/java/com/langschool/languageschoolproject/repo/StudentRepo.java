package com.langschool.languageschoolproject.repo;
import com.langschool.languageschoolproject.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Integer> {

    Student findBySchoolIndex(String idx);
}
