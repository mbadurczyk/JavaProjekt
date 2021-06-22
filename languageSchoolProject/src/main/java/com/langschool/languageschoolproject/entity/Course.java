package com.langschool.languageschoolproject.entity;
import com.langschool.languageschoolproject.entity.Teacher;
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
@Table(name="COURSE_TAB")
public class Course {
    @Id
    @GeneratedValue
    private int id;
    private int monthly_price;

}
