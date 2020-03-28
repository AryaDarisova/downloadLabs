package com.example.downloadlabs.persistence.dao;

import com.example.downloadlabs.persistence.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {



}
