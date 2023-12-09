package com.example.embedded.model;

import jakarta.persistence.Entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity // JPA 엔터티 선언
@Table(name = "MotionEvents") // 매핑될 데이터베이스 테이블 이름 지정
public class MotionEvents {

    @Id // 해당 필드가 엔터티의 기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 생성 전략
    private Long id;

    @Column(name = "DetectionTime") // 데이터베이스 칼럼
    private Date detectionTime;

    @Column(name = "SerialNumber") // 데이터베이스 칼럼
    private Integer serialNumber;

    // Getter 메소드 추가
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
