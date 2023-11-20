package com.example.embedded.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "weather_data")
public class WeatherData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "record_date", nullable = false)
    private Date recordDate;

    @Column(name = "temperature")
    private Double temperature;

    @Column(name = "humidity")
    private Double humidity;

    // 기본 생성자
    public WeatherData() {
    }

    // 모든 필드를 포함하는 생성자
    public WeatherData(Long id, Date recordDate, Double temperature, Double humidity) {
        this.id = id;
        this.recordDate = recordDate;
        this.temperature = temperature;
        this.humidity = humidity;
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

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getHumidity() {
        return humidity;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }
}
