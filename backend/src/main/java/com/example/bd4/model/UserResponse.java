package com.example.bd4.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private long id;
    private String fullName;
    private String city;
    private String role;
    private String gender;

    private String type;

    public UserResponse(long id, String fullName, String city, String role, String gender) {
        this.id = id;
        this.fullName = fullName;
        this.city = city;
        this.role = role;
        this.gender = gender;
    }
}
