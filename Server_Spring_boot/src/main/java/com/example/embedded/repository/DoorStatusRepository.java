package com.example.embedded.repository;

import com.example.embedded.model.DoorStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoorStatusRepository extends JpaRepository<DoorStatus, Long> {
}
