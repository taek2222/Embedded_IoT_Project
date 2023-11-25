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
    private Integer temperature;

    @Column(name = "humidity")
    private Integer humidity;

    @Column(name = "fine_dust")
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
