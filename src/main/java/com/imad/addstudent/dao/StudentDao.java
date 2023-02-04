package com.imad.addstudent.dao;

import com.imad.addstudent.bean.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDao extends JpaRepository <Student,Integer> {
    Student findByName(String name) ;
}
