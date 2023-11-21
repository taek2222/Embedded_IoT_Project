package com.example.embedded.controller;

import com.example.embedded.model.WeatherData;
import com.example.embedded.service.WeatherDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
public class WeatherDataController {

    private final WeatherDataService service;

    @Autowired
    public WeatherDataController(WeatherDataService service) {
        this.service = service;
    }

    @GetMapping("/data")
    public List<WeatherData> getAllWeatherData() {
        return service.getAllWeatherData();
    }

    @GetMapping("/latest")
    public WeatherData getLatestWeatherData() {
        return service.getLatestWeatherData();
    }

    @GetMapping("/humid")
    public Integer getHumidity() {
        return service.getHumidity();
    }

    @GetMapping("/temperature")
    public Integer getTemperature() {
        return service.getTemperature();
    }

}
