package com.not.real.john.Outpicker.components;

import com.not.real.john.Outpicker.Enums.MissPlaySeverity;
import com.not.real.john.Outpicker.Enums.MissPlayType;
import com.not.real.john.Outpicker.models.Game;
import com.not.real.john.Outpicker.models.MissPlay;
import com.not.real.john.Outpicker.repositorys.GameRepository;
import com.not.real.john.Outpicker.repositorys.MissplayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    GameRepository gameRepository;

    @Autowired
    MissplayRepository missplayRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {

        gameRepository.deleteAll();
        missplayRepository.deleteAll();

        Game testGame = new Game(6368118105L, 12,12,true,12,12,12 );
        gameRepository.save(testGame);

        MissPlay missPlay = new MissPlay(MissPlayType.MENTAL, MissPlaySeverity.MAJOR, "Lost patience and went hunting for kills, got picked off", "Keep a good routuine of not rage requeing, possbiliy take small sessions of mindfullness practice", false, testGame);
        missplayRepository.save(missPlay);

        MissPlay missPlay1 = new MissPlay(MissPlayType.PICK, MissPlaySeverity.MIDDLING, "Already bored creating seed data ", "Just put int random crap", false, testGame);
        missplayRepository.save(missPlay1);

        MissPlay missPlay2 = new MissPlay(MissPlayType.ITEM_BUILD, MissPlaySeverity.GAME_LOSING, "Already bored creating seed data ", "Just put int random crap", false, testGame);
        missplayRepository.save(missPlay2);

        MissPlay missPlay3 = new MissPlay(MissPlayType.SKILL_BUILD, MissPlaySeverity.MAJOR, "Already bored creating seed data ", "Just put int random crap", false, testGame);
        missplayRepository.save(missPlay3);

    }
}

