import React from 'React' 

const saveMissplay = () => {

    return (
        <>
        <form className="missplay-form" onSubmit={}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
        </>
    )
}

export default saveMissplay

// this.match_id = match_id;
// this.hero_id = hero_id;
// this.player_slot = player_slot;
// this.radiant_win = radiant_win;
// this.kills = kills;
// this.deaths = deaths;
// this.duration = duration;
// this.missPlays = new ArrayList<>();