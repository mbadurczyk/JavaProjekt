package com.langschool.languageschoolproject.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="STUDENT_TAB")
public class Student {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String lastName;
    private String schoolIndex;
}
