package com.example.embedded.service;

import com.example.embedded.model.DoorStatus;
import com.example.embedded.repository.DoorStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoorStatusService {
    @Autowired
    private DoorStatusRepository repository;

    public List<DoorStatus> getAllDoorStatuses() {
        return repository.findAll();
    }
}
