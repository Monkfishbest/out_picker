package com.not.real.john.Outpicker.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="games")
public class Game {
    // [
//     {
//       "match_id": 0,
//       "player_slot": 0,
//       "radiant_win": true,
//       "duration": 0,
//       "game_mode": 0,
//       "lobby_type": 0,
//       "hero_id": 0,
//       "start_time": 0,
//       "version": 0,
//       "kills": 0,
//       "deaths": 0,
//       "assists": 0,
//       "skill": 0,
//       "xp_per_min": 0,
//       "gold_per_min": 0,
//       "hero_damage": 0,
//       "hero_healing": 0,
//       "last_hits": 0,
//       "lane": 0,
//       "lane_role": 0,
//       "is_roaming": true,
//       "cluster": 0,
//       "leaver_status": 0,
//       "party_size": 0
//     }
//   ]

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "match_id")
    private long match_id;

    @Column(name = "hero_id")
    private int hero_id;

    @Column(name = "player_slot")
    private int player_slot;

    @Column(name = "duration")
    private int duration;

    @Column(name = "radiant_win")
    private boolean radiant_win;

    @Column(name = "kills")
    private int kills;

    @Column(name = "deaths")
    private int deaths;

    @JsonIgnoreProperties({"game"})
    @OneToMany(mappedBy = "game", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<MissPlay> missPlays;


    public Game(long match_id, int hero_id, int player_slot, boolean radiant_win, int kills, int deaths, int duration) {
        this.match_id = match_id;
        this.hero_id = hero_id;
        this.player_slot = player_slot;
        this.radiant_win = radiant_win;
        this.kills = kills;
        this.deaths = deaths;
        this.duration = duration;
        this.missPlays = new ArrayList<>();
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPlayer_slot() {
        return player_slot;
    }

    public void setPlayer_slot(int player_slot) {
        this.player_slot = player_slot;
    }

    public int getKills() {
        return kills;
    }

    public void setKills(int kills) {
        this.kills = kills;
    }

    public int getDeaths() {
        return deaths;
    }

    public void setDeaths(int deaths) {
        this.deaths = deaths;
    }

    public boolean isRadiant_win() {
        return radiant_win;
    }

    public void setRadiant_win(boolean radiant_win) {
        this.radiant_win = radiant_win;
    }

    public Game(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getMatch_id() {
        return match_id;
    }

    public void setMatch_id(long match_id) {
        this.match_id = match_id;
    }

    public int getHero_id() {
        return hero_id;
    }

    public void setHero_id(int hero_id) {
        this.hero_id = hero_id;
    }

    public boolean isWin() {
        return this.radiant_win;
    }

    public void setWin(boolean win) {
       this.radiant_win = win;
    }

    public List<MissPlay> getMissPlays() {
        return missPlays;
    }

    public void setMissPlays(List<MissPlay> missPlays) {
        this.missPlays = missPlays;
    }

    public void addMissPlay(MissPlay missPlay){
        this.missPlays.add(missPlay);
    }

}
