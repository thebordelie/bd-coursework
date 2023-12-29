package com.example.bd4.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "member")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "reliability")
    private short reliability;

    @Column(name = "verification")
    private boolean verification;

    @Column(name = "competition_type")
    private String competitionType;
}
