package com.not.real.john.Outpicker.controllers;

import com.not.real.john.Outpicker.Enums.MissPlaySeverity;
import com.not.real.john.Outpicker.models.Game;
import com.not.real.john.Outpicker.models.MissPlay;
import com.not.real.john.Outpicker.models.RequestWrapper;
import com.not.real.john.Outpicker.repositorys.GameRepository;
import com.not.real.john.Outpicker.repositorys.MissplayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @Autowired
    MissplayRepository missplayRepository;

    @GetMapping(value = "/games")
    public ResponseEntity<List<Game>> getAndFilterGames(
            @RequestParam(name = "Severity", required = false) MissPlaySeverity severity) {
        if (severity != null) {
            return new ResponseEntity<>(gameRepository.findGameBymissPlaysMissPlaySeverity(severity), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(gameRepository.findAll(), HttpStatus.OK);
        }
    }

    @PostMapping(value = "/games")
    public ResponseEntity<Game> saveGame(@RequestBody Game game){
        gameRepository.save(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/games/{id}")
    public ResponseEntity<Long> deleteGame(@PathVariable Long id){
        gameRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @PostMapping(value = "/games/missplays")
    public ResponseEntity<RequestWrapper> addGameAndMissplays (@RequestBody RequestWrapper requestWrapper) {

        Game game = requestWrapper.getGame();
        ArrayList<MissPlay> missPlays = requestWrapper.getMissPlays();

        gameRepository.save(game);

        for (MissPlay missplay : missPlays){
            missplay.setGame(game);
            missplayRepository.save(missplay);
        }

        return new ResponseEntity<>(requestWrapper, HttpStatus.CREATED);
    }




}
