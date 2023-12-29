package com.example.bd4.controller;

import com.example.bd4.model.EventRequest;
import com.example.bd4.model.Member;
import com.example.bd4.model.UserRequest;
import com.example.bd4.model.UserResponse;
import com.example.bd4.service.OrganizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/organizer")
public class OrganizerController {
    private final OrganizerService organizerService;

    @Autowired
    public OrganizerController(OrganizerService organizerService) {
        this.organizerService = organizerService;
    }

    @PostMapping("/event")
    public ResponseEntity<String> addEvent(@RequestBody EventRequest event) {
        organizerService.addEvent(event, event.getUserid());
        return ResponseEntity.ok("success");
    }

    @PostMapping("/user")
    public ResponseEntity<String> verifyUser(@RequestBody UserRequest userRequest) {
        organizerService.verifyUser(userRequest.getId());
        return ResponseEntity.ok("success");
    }

    @GetMapping("/non_verify_user")
    public ResponseEntity<ArrayList<UserResponse>> getNonVerifyUsers() {
        return ResponseEntity.ok(organizerService.getUsers());
    }

    @PostMapping("/all_users")
    public ResponseEntity<ArrayList<UserResponse>> getAllUsersFromEvent(@RequestBody UserRequest request) {
        return ResponseEntity.ok(organizerService.getUsersFromEvent(request.getId()));
    }


}
