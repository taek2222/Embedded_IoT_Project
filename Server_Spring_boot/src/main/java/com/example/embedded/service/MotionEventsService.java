package com.example.embedded.service;

import com.example.embedded.model.MotionEvents;
import com.example.embedded.repository.MotionEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotionEventsService {

    @Autowired
    private MotionEventsRepository repository;

    public List<MotionEvents> getAllMotionEvents() {
        return repository.findAll();
    }
}
