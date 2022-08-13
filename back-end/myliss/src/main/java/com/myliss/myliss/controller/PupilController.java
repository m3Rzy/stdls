package com.myliss.myliss.controller;

import com.myliss.myliss.models.Pupil;
import com.myliss.myliss.service.PupilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PupilController {

    @Autowired
    private PupilService service;

    @PostMapping("/addPupil")
    public Pupil addPupil(@RequestBody Pupil pupil)
    {
        return service.savePupil(pupil);
    }

    @GetMapping("/pupils")
    public List<Pupil> findAll()
    {
        return service.getPupils();
    }

    @GetMapping("/pupil/{id}")
    public Pupil findByPupilById(@PathVariable int id)
    {
        return service.getPupilById(id);
    }

    @PutMapping("/edit")
    public Pupil updatePupil(@RequestBody Pupil pupil)
    {
        return service.updatePupil(pupil);
    }

    @DeleteMapping("/delete/{id}")
    public String deletePupil(@PathVariable int id)
    {
        return service.deletePupil(id);
    }
}
