package com.example.downloadlabs.service.impl;

import com.example.downloadlabs.persistence.dao.UserRepository;
import com.example.downloadlabs.persistence.model.User;
import com.example.downloadlabs.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public void update(User user) {

    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }
}
