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

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date timestamp;

    // Getter 메소드 추가
    public Long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public Date getTimestamp() {
        return timestamp;
    }
}
