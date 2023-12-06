package com.example.embedded.model;

import jakarta.persistence.Entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "MotionEvents")
public class MotionEvents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "DetectionTime")
    private Date detectionTime;

    @Column(name = "SerialNumber")
    private Integer serialNumber;

    public Long getId() {
        return id;
    }

    public Date getDetectionTime() {
        return detectionTime;
    }

    public Integer getSerialNumber() {
        return serialNumber;
    }
}
