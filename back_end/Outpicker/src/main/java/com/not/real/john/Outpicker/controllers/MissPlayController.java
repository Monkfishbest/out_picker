package com.not.real.john.Outpicker.controllers;

import com.not.real.john.Outpicker.models.MissPlay;
import com.not.real.john.Outpicker.repositorys.MissplayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MissPlayController {

    @Autowired
    MissplayRepository missplayRepository;

    @PostMapping(value = "/missplays")
    public ResponseEntity<MissPlay> saveMissPlay(@RequestBody MissPlay missPlay){
        missplayRepository.save(missPlay);
        return new ResponseEntity<>(missPlay, HttpStatus.CREATED);
    }

    @DeleteMapping(value="/missplays/{id}")
    public ResponseEntity<Long> deleteMissPLay(@PathVariable Long id) {
        missplayRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @PutMapping(value="/missplays/{id}")
    public ResponseEntity<MissPlay> editMissPlay(@RequestBody MissPlay missPlay, @PathVariable Long id){
        MissPlay missplayToUpdate = missplayRepository.findById(id).get();

        missplayToUpdate.setMissPlayType(missPlay.getMissPlayType());
        missplayToUpdate.setAdjustment(missPlay.getAdjustment());
        missplayToUpdate.setDescription(missPlay.getDescription());
        missplayToUpdate.setMissPlaySeverity(missPlay.getMissPlaySeverity());
        missplayToUpdate.setForced(missPlay.isForced());
        missplayRepository.save(missplayToUpdate);
        return new ResponseEntity<>(missplayToUpdate, HttpStatus.OK);
    }

    @GetMapping(value="/missplays")
    public ResponseEntity<List<MissPlay>> getMissPlays(){
        return new ResponseEntity<>(missplayRepository.findAll(), HttpStatus.OK);
    }

}
