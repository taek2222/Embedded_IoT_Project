package com.example.embedded.controller;

import com.example.embedded.model.DoorStatus;
import com.example.embedded.service.DoorStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doorstatus")
public class DoorStatusController {
    @Autowired
    private DoorStatusService service;

    @GetMapping
    public List<DoorStatus> getAllDoorStatuses() {
        return service.getAllDoorStatuses();
    }
}
