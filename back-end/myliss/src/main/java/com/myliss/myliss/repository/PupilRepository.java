package com.myliss.myliss.repository;

import com.myliss.myliss.models.Pupil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PupilRepository extends JpaRepository<Pupil, Integer> {
    Pupil findByName(String name);
}
