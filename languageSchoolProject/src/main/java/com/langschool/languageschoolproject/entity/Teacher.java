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
@Table(name="TEACHER_TAB")
public class Teacher {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String lastName;
    private String subject;
    private String login;
    private String password;
}
