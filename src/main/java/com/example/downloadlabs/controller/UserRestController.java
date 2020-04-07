package com.example.downloadlabs.controller;

import com.example.downloadlabs.persistence.model.User;
import com.example.downloadlabs.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserRestController {

    private UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<Object> getUsers() {
        List<User> users = userService.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUser(@PathVariable("id") Long id) {
        User user = userService.getById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> saveUser(@RequestBody User user) {
        userService.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Object> deleteUser(@PathVariable("id") Long id) {
        User user = userService.getById(id);
        userService.delete(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Object> updateUser(@PathVariable("id") Long id,
                                             @RequestBody User user) {
        User oldUser = userService.getById(id);
        oldUser.setFirstName(user.getFirstName());
        oldUser.setSecondName(user.getSecondName());
        oldUser.setThirdName(user.getThirdName());
        oldUser.setFaculty(user.getFaculty());
        oldUser.setGrade(user.getGrade());
        oldUser.setGroup(user.getGroup());
        userService.update(oldUser);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
