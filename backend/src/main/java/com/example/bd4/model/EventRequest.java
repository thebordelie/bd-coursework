package com.example.bd4.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "event")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EventRequest {
    @Id
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "city")
    private long cityName;

    @Column(name = "date")
    private Date date;

    @Column(name = "name")
    private String name;

    @Column(insertable=false, updatable=false)
    private String city;

    @Column(insertable=false, updatable=false)
    private String street;

    @Column(insertable=false, updatable=false)
    private String house;

    @Column(insertable=false, updatable=false)
    private long userid;


}
