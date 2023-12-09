package com.example.embedded.controller;

import com.example.embedded.model.WeatherData;
import com.example.embedded.service.WeatherDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  // RESTful 서비스 컨트롤러
@RequestMapping("/api/weather") // 내부 다양한 센서 데이터 요청 URL
public class WeatherDataController {

    private final WeatherDataService service;
    @Autowired // Spring 의존성 주입 기능 사용
    public WeatherDataController(WeatherDataService service) {
        this.service = service;
    }

    @GetMapping("/data") // data GET 요청을 이 메서드에 매핑
    public List<WeatherData> getAllWeatherData() {
        return service.getAllWeatherData();
    }

    @GetMapping("/humid") // humid GET 요청을 이 메서드에 매핑
    public Integer getHumidity() {
        return service.getHumidity();
    }

    @GetMapping("/temperature") // temperature GET 요청을 이 메서드에 매핑
    public Integer getTemperature() {
        return service.getTemperature();
    }

    @GetMapping("/fine_dust") // fine_dust GET 요청을 이 메서드에 매핑
    public Integer getFine_dust() {
        return service.getFine_dust();
    }

    @GetMapping("/average/temperature") // average/temperature GET 요청을 이 메서드에 매핑
    public Double getAverageTemperature() {
        return service.getAverageTemperature();
    }

    @GetMapping("/average/humidity") // average/humidity GET 요청을 이 메서드에 매핑
    public Double getAverageHumidity() {
        return service.getAverageHumidity();
    }

    @GetMapping("/average/fine_dust") // average/fine_dust GET 요청을 이 메서드에 매핑
    public Double getAverageFine_Dust() {
        return service.getAverageFine_Dust();
    }
}
