package com.not.real.john.Outpicker.repositorys;

import com.not.real.john.Outpicker.Enums.MissPlaySeverity;
import com.not.real.john.Outpicker.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

//    List<Game> findGameByMissplaysLengthGreaterThanInt(int misplays);
    List<Game> findGameBymissPlaysMissPlaySeverity(MissPlaySeverity missPlaySeverity);
}
