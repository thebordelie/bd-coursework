package com.example.bd4.controller;

import com.example.bd4.model.*;
import com.example.bd4.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/member_management")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/possible_events")
    public ResponseEntity<ArrayList<EventResponse>> getPossibleEvents(@CookieValue("userId") long id) {
        UserRequest userRequest = new UserRequest();
        userRequest.setId(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(memberService.getPossibleEvents(userRequest));
    }

    @PostMapping("/all_events")
    public ResponseEntity<ArrayList<EventResponse>> getEventsInCity(@RequestBody City city) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(memberService.getEventsInCity(city));
    }

    @PostMapping("/user_event")
    public ResponseEntity<List<Long>> getUsersEvents(@RequestBody UserRequest request) {
        return ResponseEntity.ok().body(memberService.getUsersEvents(request.getId()));
    }

    @PostMapping("/new_event")
    public ResponseEntity<String> addEventToViewer(@RequestBody UserRequest request) {
        memberService.addViewer(request.getId(), request.getId1());
        return ResponseEntity
                .ok("success");
    }

    @PostMapping("/delete_event")
    public ResponseEntity<String> deleteEventFromViewer(@RequestBody UserRequest request) {
        memberService.deleteViewer(request.getId(), request.getId1());
        return ResponseEntity.ok("success");
    }

    @PostMapping("/new_member_event")
    public ResponseEntity<String> addEventToMember(@RequestBody UserRequest request) {
        memberService.participateEvent(request.getId(), request.getId1());
        return ResponseEntity
                .ok("success");
    }

    @PostMapping("/member_event")
    public ResponseEntity<List<Long>> getMemberEvents(@RequestBody UserRequest request) {
        return ResponseEntity
                .ok(memberService.getMemberEvent(request.getId()));
    }

    @PostMapping("/new_member")
    public ResponseEntity<String> addNewMember(@RequestBody Member member) {
        memberService.addNewMember(member);
        return ResponseEntity
                .ok("success");
    }

    @PostMapping("/delete_member_event")
    public ResponseEntity<String> deleteMemberFromEvent(@RequestBody UserRequest request) {
        memberService.removeMemberFromEvent(request.getId(), request.getId1());
        return ResponseEntity.ok("success");
    }

}
