package com.example.embedded.service;

import com.example.embedded.model.WeatherData;
import com.example.embedded.repository.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
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

    public Integer getHumidity() { // 최신 데이터 중 습도 반환
        WeatherData latestData = repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
        return latestData != null ? latestData.getHumidity() : null;
    }

    public Integer getTemperature() { // 최신 데이터 중 온도 반환
        WeatherData latestData = repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
        return latestData != null ? latestData.getTemperature() : null;
    }

    public Integer getFine_dust() { // 최신 데이터 중 미세 먼지 반환
        WeatherData latestData = repository.findAll(PageRequest.of(0, 1, Sort.by("recordDate").descending()))
                .getContent().get(0);
        return latestData != null ? latestData.getFine_dust() : null;
    }

    public Double getAverageTemperature() { // 평균 온도 값 반환
        Double avgTemperature = repository.findAverageTemperature();
        if (avgTemperature != null) {
            // 소수점 한 자리로 반올림
            BigDecimal bd = new BigDecimal(avgTemperature).setScale(1, RoundingMode.HALF_UP);
            return bd.doubleValue();
        }
        return null;
    }

    public Double getAverageHumidity() { // 평균 습도 값 반환
        Double avgHumidity = repository.findAverageHumidity();
        if (avgHumidity != null) {
            // 소수점 한 자리로 반올림
            BigDecimal bd = new BigDecimal(avgHumidity).setScale(1, RoundingMode.HALF_UP);
            return bd.doubleValue();
        }
        return null;
    }

    public Double getAverageFine_Dust() { // 평균 미세먼지 값 반환
        Double avgFine_dust = repository.findAverageFine_dust();
        if (avgFine_dust != null) {
            // 소수점 한 자리로 반올림
            BigDecimal bd = new BigDecimal(avgFine_dust).setScale(1, RoundingMode.HALF_UP);
            return bd.doubleValue();
        }
        return null;
    }
}
