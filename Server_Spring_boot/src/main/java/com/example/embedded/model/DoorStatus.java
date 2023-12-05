package com.example.embedded.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "DoorStatus")
public class DoorStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    // getters and setters
}
