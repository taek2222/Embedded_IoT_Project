package com.example.embedded.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity // JPA 엔터티 선언
@Table(name = "weather_data") // 매핑될 데이터베이스 테이블 이름 지정
public class WeatherData {

    @Id // 해당 필드가 엔터티의 기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 생성 전략
    private Long id;

    @Temporal(TemporalType.TIMESTAMP) // Data 타입을 데이베이스의 타임스탬프 타입과 매핑
    @Column(name = "record_date", nullable = false) // 데이터베이스 칼럼 [NULL 값 허용 X]
    private Date recordDate;

    @Column(name = "temperature") // 데이터베이스 칼럼
    private Integer temperature;

    @Column(name = "humidity") // 데이터베이스 칼럼
    private Integer humidity;

    @Column(name = "fine_dust") // 데이터베이스 칼럼
    private Integer fine_dust;

    // 기본 생성자
    public WeatherData() {
    }

    // 모든 필드를 포함하는 생성자
    public WeatherData(Long id, Date recordDate, Integer temperature, Integer humidity, Integer fine_dust) {
        this.id = id;
        this.recordDate = recordDate;
        this.temperature = temperature;
        this.humidity = humidity;
        this.fine_dust= fine_dust;
    }

    // getter 및 setter 메소드
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(Date recordDate) {
        this.recordDate = recordDate;
    }

    public Integer getTemperature() {
        return temperature;
    }

    public void setTemperature(Integer temperature) {
        this.temperature = temperature;
    }

    public Integer getHumidity() {
        return humidity;
    }

    public void setHumidity(Integer humidity) { this.humidity = humidity; }

    public Integer getFine_dust() {
        return fine_dust;
    }

    public void setFine_dust(Integer fine_dust) {
        this.fine_dust = fine_dust;
    }
}
