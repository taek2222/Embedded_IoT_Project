package com.example.embedded.controller;

import com.example.embedded.model.MotionEvents;
import com.example.embedded.service.MotionEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  // RESTful 서비스 컨트롤러
@RequestMapping("/api/motionevents") // 침입자 감지 리스트 데이터 요청 URL
public class MotionEventsController {

    @Autowired // Spring 의존성 주입 기능 사용
    private MotionEventsService service;

    @GetMapping // GET 요청을 이 메서드에 매핑
    public List<MotionEvents> getAllMotionEvents() {
        return service.getAllMotionEvents();
    }
}
