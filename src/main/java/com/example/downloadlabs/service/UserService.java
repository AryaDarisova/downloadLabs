package com.example.downloadlabs.service;

import com.example.downloadlabs.persistence.model.User;

import java.util.List;

public interface UserService {

    List<User> getAll();
    User getById(Long id);
    void save(User user);
    void update(User user);
    void delete(User user);

}
