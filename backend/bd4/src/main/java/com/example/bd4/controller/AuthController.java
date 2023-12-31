package com.example.bd4.controller;

import com.example.bd4.model.AppUser;
import com.example.bd4.model.UserResponse;
import com.example.bd4.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody AppUser user) {
        System.out.println(user);
        authService.registerNewUser(user);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody AppUser user) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authService.authUser(user.getLogin(), user.getPassword()));
    }


}
