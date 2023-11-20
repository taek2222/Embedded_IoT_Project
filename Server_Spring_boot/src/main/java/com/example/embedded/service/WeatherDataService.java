package com.example.embedded.service;

import com.example.embedded.model.WeatherData;
import com.example.embedded.repository.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
