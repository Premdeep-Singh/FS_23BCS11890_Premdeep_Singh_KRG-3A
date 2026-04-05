package com.example.demo_G1.controllers;

// import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo_G1.entity.UserEntity;
import com.example.demo_G1.services.UserServive;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserServive userServive;

    @PostMapping
    public UserEntity creatUser(@RequestBody UserEntity user) {
        return userServive.addUser(user);
    }

    @GetMapping("/{id}")
    public UserEntity getUserById(@PathVariable Long id) {
        return userServive.getUserById(id);
    }

    @GetMapping("/test-service")
    public String testService() {
        return userServive.serviceTest();
    }
}


