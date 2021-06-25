package com.langschool.languageschoolproject.repo;
import com.langschool.languageschoolproject.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepo extends JpaRepository<Grade,Integer> {

}
