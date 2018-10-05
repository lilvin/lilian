package com.lilian.Dao;

import com.lilian.Entity.Student;
import com.sun.javafx.collections.MappingChange;

import java.util.HashMap;
import java.util.Map;

public class StudentDao {

    public static Map<Integer,Student> students;

    static {
        students = new HashMap<Integer,String>(){
            {
                students.put(1,"said", "computer science");
            }
        };

    }
}
