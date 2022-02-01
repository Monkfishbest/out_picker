package com.not.real.john.Outpicker.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.not.real.john.Outpicker.Enums.MissPlaySeverity;
import com.not.real.john.Outpicker.Enums.MissPlayType;

import javax.persistence.*;

@Entity
@Table(name = "missplays")
public class MissPlay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "miss_play_type")
    @Enumerated(value = EnumType.STRING)
    private MissPlayType missPlayType;

    @Column(name = "miss_play_severity")
    @Enumerated(value = EnumType.STRING)
    private MissPlaySeverity missPlaySeverity;

    @Column(name = "description")
    private String description;

    @Column(name = "adjustment")
    private String adjustment;

    @Column(name = "is_forced")
    private boolean isForced;

    @ManyToOne
    @JsonIgnoreProperties({"missPlays"})
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;



    public MissPlay(MissPlayType missPlayType, MissPlaySeverity missPlaySeverity, String description, String adjustment, boolean isForced, Game game) {
        this.missPlayType = missPlayType;
        this.missPlaySeverity = missPlaySeverity;
        this.description = description;
        this.adjustment = adjustment;
        this.isForced = isForced;
        this.game = game;
    }

    public MissPlay(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public MissPlayType getMissPlayType() {
        return missPlayType;
    }

    public void setMissPlayType(MissPlayType missPlayType) {
        this.missPlayType = missPlayType;
    }

    public MissPlaySeverity getMissPlaySeverity() {
        return missPlaySeverity;
    }

    public void setMissPlaySeverity(MissPlaySeverity missPlaySeverity) {
        this.missPlaySeverity = missPlaySeverity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdjustment() {
        return adjustment;
    }

    public void setAdjustment(String adjustment) {
        this.adjustment = adjustment;
    }

    public boolean isForced() {
        return isForced;
    }

    public void setForced(boolean forced) {
        isForced = forced;
    }

}
