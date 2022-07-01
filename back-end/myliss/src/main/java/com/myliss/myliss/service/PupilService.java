package com.myliss.myliss.service;

import com.myliss.myliss.models.Pupil;
import com.myliss.myliss.repository.PupilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PupilService {

    @Autowired
    private PupilRepository repository;

    public Pupil savePupil(Pupil pupil)
    {
        return  repository.save(pupil);
    }

    public List<Pupil> savePupils(List<Pupil> pupils)
    {
        return repository.saveAll(pupils);
    }

    public List<Pupil> getPupils()
    {
        return repository.findAll();
    }

    public Pupil getPupilById(int id)
    {
        return repository.findById(id).orElse(null);
    }

    public Pupil getPupilByName(String name)
    {
        return repository.findByName(name);
    }

    public String deletePupil(int id)
    {
        repository.deleteById(id);
        return "Pupil has removed successfully!";
    }

    public Pupil updatePupil(Pupil pupil)
    {
        Pupil oldentity = repository.findById(pupil.getId()).orElse(null);
        oldentity.setName(pupil.getName());
        oldentity.setSurname(pupil.getSurname());
        oldentity.setPhone(pupil.getPhone());
        oldentity.setEmail(pupil.getEmail());
        oldentity.setCost(pupil.getCost());
        oldentity.setGrade(pupil.getGrade());
        return repository.save(pupil);
    }

}
