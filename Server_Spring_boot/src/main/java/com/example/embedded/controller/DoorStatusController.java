package com.example.embedded.controller;

import com.example.embedded.model.DoorStatus;
import com.example.embedded.service.DoorStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // RESTful 서비스 컨트롤러
@RequestMapping("/api/doorstatus") // 문 상태 체크 리스트 데이  요청 URL
public class DoorStatusController {

    @Autowired // Spring 의존성 주입 기능 사용
    private DoorStatusService service;

    @GetMapping // GET 요청을 이 메서드에 매핑
    public List<DoorStatus> getAllDoorStatuses() {
        return service.getAllDoorStatuses();
    }
}
