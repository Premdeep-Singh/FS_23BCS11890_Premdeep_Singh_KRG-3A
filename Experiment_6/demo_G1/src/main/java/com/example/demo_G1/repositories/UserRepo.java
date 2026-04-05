package com.example.demo_G1.repositories;

import com.example.demo_G1.entity.UserEntity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUsernameAndId(String username, Long id);
    Optional<java.util.List<UserEntity>> findByIdGreaterThan(Long id);
}

