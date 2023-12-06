package com.example.embedded.controller;

import com.example.embedded.model.DoorStatus;
import com.example.embedded.service.DoorStatusService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doorstatus")
public class DoorStatusController {
    @Autowired
    private DoorStatusService service;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping
    public List<DoorStatus> getAllDoorStatuses() {
        List<DoorStatus> doorStatuses = service.getAllDoorStatuses();
        try {
            String json = objectMapper.writeValueAsString(doorStatuses);
            System.out.println("Data being sent to client: " + json); // JSON 형식의 데이터를 로그로 출력
        } catch (Exception e) {
            e.printStackTrace();
        }
        return doorStatuses;
    }
}
