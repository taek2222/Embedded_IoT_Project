package com.example.embedded.repository;

import com.example.embedded.model.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherData, Long> {
    // 필요에 따라 사용자 정의 메소드를 여기에 추가할 수 있습니다.
}
