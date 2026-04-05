package com.example.demo_G1.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo_G1.entity.UserEntity;
import com.example.demo_G1.repositories.UserRepo;

@Service
public class UserServive {
    
    @Autowired
    private UserRepo userRepo;

    public String serviceTest() {
        return "Service is working!";
    }

    public UserEntity getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    public UserEntity getUserByEmailAndId(String username, Long id) {
        return userRepo.findByUsernameAndId(username, id).orElse(null);
    }

    public Optional<List<UserEntity>> getUserGreaterThan(Long id) {
        return userRepo.findByIdGreaterThan(id);
    } 
    
    public UserEntity addUser(UserEntity user) {
        return userRepo.save(user);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
}