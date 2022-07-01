package com.myliss.myliss.controller;

import com.myliss.myliss.models.Pupil;
import com.myliss.myliss.service.PupilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PupilController {

    @Autowired
    private PupilService service;

    @PostMapping("/addPupil")
    public Pupil addPupil(@RequestBody Pupil pupil)
    {
        return service.savePupil(pupil);
    }
}
