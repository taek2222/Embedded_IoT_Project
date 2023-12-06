package com.example.embedded.repository;

import com.example.embedded.model.MotionEvents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotionEventsRepository extends JpaRepository<MotionEvents, Long> {
    // 커스텀 쿼리 메소드가 필요하다면 여기에 추가
}
