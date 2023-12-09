package com.example.embedded.repository;

import com.example.embedded.model.DoorStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // 데이터 레포지토리
public interface DoorStatusRepository extends JpaRepository<DoorStatus, Long> {
}
