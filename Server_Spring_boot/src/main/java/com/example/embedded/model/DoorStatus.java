package com.example.embedded.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity // JPA 엔터티 선언
@Table(name = "DoorStatus") // 매핑될 데이터베이스 테이블 이름 지정
public class DoorStatus {
    @Id // 해당 필드가 엔터티의 기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 생성 전략
    private Long id;

    @Column(nullable = false) // 데이터베이스 칼럼 [NULL 값 허용 X]
    private String status;

    @Temporal(TemporalType.TIMESTAMP) // Data 타입을 데이베이스의 타임스탬프 타입과 매핑
    @Column(nullable = false) // 데이터베이스 칼럼 [NULL 값 허용 X]
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
