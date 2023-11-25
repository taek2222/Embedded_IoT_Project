package com.example.embedded.repository;

import com.example.embedded.model.WeatherData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherData, Long> {
    Page<WeatherData> findAll(Pageable pageable);

    @Query("SELECT AVG(w.temperature) FROM WeatherData w")
    Double findAverageTemperature();

    @Query("SELECT AVG(w.humidity) FROM WeatherData w")
    Double findAverageHumidity();
}
