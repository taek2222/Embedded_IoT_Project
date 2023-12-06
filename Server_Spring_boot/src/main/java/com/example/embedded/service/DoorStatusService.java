package com.example.embedded.service;

import com.example.embedded.model.DoorStatus;
import com.example.embedded.repository.DoorStatusRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoorStatusService {
    private static final Logger logger = LoggerFactory.getLogger(DoorStatusService.class);

    @Autowired
    private DoorStatusRepository repository;

    public List<DoorStatus> getAllDoorStatuses() {
        List<DoorStatus> doorStatuses = repository.findAll();
        return doorStatuses;
    }
}
