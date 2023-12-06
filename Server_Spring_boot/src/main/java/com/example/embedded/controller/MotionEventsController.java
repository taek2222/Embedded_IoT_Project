package com.example.embedded.controller;

import com.example.embedded.model.MotionEvents;
import com.example.embedded.service.MotionEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/motionevents")
public class MotionEventsController {

    @Autowired
    private MotionEventsService service;

    @GetMapping
    public List<MotionEvents> getAllMotionEvents() {
        return service.getAllMotionEvents();
    }
}
