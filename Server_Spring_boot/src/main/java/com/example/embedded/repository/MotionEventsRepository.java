package com.example.embedded.repository;

import com.example.embedded.model.MotionEvents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // 데이터 레포지토리
public interface MotionEventsRepository extends JpaRepository<MotionEvents, Long> {
}
