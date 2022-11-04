package com.not.real.john.Outpicker.models;

import java.util.ArrayList;

public class RequestWrapper {
//    This file is testing if how to request multiple objects be saved to a data base in a single post request

    Game game;
    ArrayList<MissPlay> missPlays;


    public RequestWrapper(Game game, ArrayList<MissPlay> missPlays) {
        this.game = game;
        this.missPlays = missPlays;
    }


    public RequestWrapper() {
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public ArrayList<MissPlay> getMissPlays() {
        return missPlays;
    }

    public void setMissPlays(ArrayList<MissPlay> missPlays) {
        this.missPlays = missPlays;
    }
}
