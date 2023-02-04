package com.imad.addstudent.service;

import com.imad.addstudent.bean.Student;

import java.util.List;

public interface StudentService {
    Student findByName(String name);

    List<Student> findAll();

    public String saveStudent(Student student) ;

}
