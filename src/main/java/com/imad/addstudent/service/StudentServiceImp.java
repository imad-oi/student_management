package com.imad.addstudent.service;

import com.imad.addstudent.bean.Student;
import com.imad.addstudent.dao.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements StudentService {

    @Override
    public Student findByName(String name) {
        return studentDao.findByName(name);
    }

    @Override
    public List<Student> findAll() {
        return studentDao.findAll();
    }

    @Autowired
    private StudentDao studentDao ;

    @Override
    public String saveStudent(Student student) {

        if( findByName(student.getName()) != null)
        {
            return "student is already exist";
        }else {
        studentDao.save(student);
            return "new student is added" ;
        }
    }
}
