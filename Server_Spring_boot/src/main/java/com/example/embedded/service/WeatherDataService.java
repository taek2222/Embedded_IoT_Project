package com.example.embedded.service;

import com.example.embedded.model.WeatherData;
import com.example.embedded.repository.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WeatherDataService {

    private final WeatherDataRepository repository;

    @Autowired
    public WeatherDataService(WeatherDataRepository repository) {
        this.repository = repository;
    }

    public List<WeatherData> getAllWeatherData() {
        return repository.findAll();
    }

    public WeatherData getLatestWeatherData() { // 최신 데이터 전체 반환
        return repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
    }

    public Integer getHumidity() { // 최신 데이터 중 습도만 반환
        WeatherData latestData = repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
        return latestData != null ? latestData.getHumidity() : null;
    }

    public Integer getTemperature() { // 최신 데이터 중 온도만 반환
        WeatherData latestData = repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
        return latestData != null ? latestData.getTemperature() : null;
    }
}
