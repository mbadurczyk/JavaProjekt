package com.langschool.languageschoolproject.repo;

import com.langschool.languageschoolproject.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<Teacher,Integer> {

    Teacher findBySubject(String subj);
}
