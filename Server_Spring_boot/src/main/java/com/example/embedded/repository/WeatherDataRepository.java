package com.example.embedded.repository;

import com.example.embedded.model.WeatherData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository // 데이터 레포지토리
public interface WeatherDataRepository extends JpaRepository<WeatherData, Long> {
    Page<WeatherData> findAll(Pageable pageable);

    @Query("SELECT AVG(w.temperature) FROM WeatherData w") // 쿼리에 직접 요청 후 결과 값 반환
    Double findAverageTemperature();

    @Query("SELECT AVG(w.humidity) FROM WeatherData w") // 쿼리에 직접 요청 후 결과 값 반환
    Double findAverageHumidity();

    @Query("SELECT AVG(w.fine_dust) FROM WeatherData w") // 쿼리에 직접 요청 후 결과 값 반환
    Double findAverageFine_dust();
}
