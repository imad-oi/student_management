package com.imad.addstudent.ws;

import com.imad.addstudent.bean.Student;
import com.imad.addstudent.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService ;

    @PostMapping("/add")
    public String add(@RequestBody Student student)
    {
        return studentService.saveStudent(student) ;
    }

    @GetMapping("/name/{name}")
    public Student findByName(@PathVariable String name) {
        return studentService.findByName(name);
    }

    @GetMapping("/")
    public List<Student> findAll() {
        return studentService.findAll();
    }
}
