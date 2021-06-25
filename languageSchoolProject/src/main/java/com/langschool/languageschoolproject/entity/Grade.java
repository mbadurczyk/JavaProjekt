package com.langschool.languageschoolproject.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="GRADE_TAB")
public class Grade {
    @Id
    @GeneratedValue
    private int id;
    private int value;
    private int studentId;
    private int teacherId;
    private String subject;
}