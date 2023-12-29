package com.example.bd4.controller;

import com.example.bd4.model.Event;
import com.example.bd4.model.UserRequest;
import com.example.bd4.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/member_management")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/possible_events")
    public ResponseEntity<ArrayList<Event>> getPossibleEvents(@RequestBody UserRequest userRequest) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(memberService.getPossibleEvents(userRequest));
    }
}
