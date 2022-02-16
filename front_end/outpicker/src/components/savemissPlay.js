import React, {useState}  from 'react' 

const SaveMissplay = ({postMissplay, game}) => {

  const [gameID] = useState(game.id)
  const [description, setDescription] = useState('')
  const [adjustment, setAdjustment] = useState('')
  const [missplayType, setMissplayType] = useState('TACTICAL')
  const [missplaySeverity, setMissplaySeverity] = useState('MINOR')
  const [isForced, setIsForced] = useState(false)

  
  const handleSubmit = (event) => {
      event.preventDefault(); 
      
      let  missPlayToUpdate = {
          "missPlayType": missplayType,
          "missPlaySeverity": missplaySeverity,
          "description": description,
          "adjustment": adjustment,
          "forced": isForced,
          "game" : { "id" : gameID}
        
      }
      postMissplay(missPlayToUpdate); 

      setDescription('')
      setAdjustment('')
      setMissplaySeverity('MINOR')
      setMissplayType('TACTICAL')
      setIsForced(false)

      // TODO: some input validation
    }


  const handleMissplayTypeChange = (event) => {
    setMissplayType(event.target.value);
  }

  const handleMissplaySeverityChange = (event) => {
    setMissplaySeverity(event.target.value);
  }

  const handleAdjustmentChange = (event) => {
    setAdjustment(event.target.value);
  }

  const handleDescrptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleIsForcedChange = () => {
    setIsForced(!isForced)
  }


  // Is there a dryer way of doing the above? I don't think so? I guess it's not really repeating the same code just repeating the function signatures? 

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='What went wrong?'
            value={description}
            onChange={handleDescrptionChange}
          />
          <input
            type='text'
            placeholder='What can I do better next time?'
            value={adjustment}
            onChange={handleAdjustmentChange}
          />
          <select 
            value={missplayType} 
            onChange={handleMissplayTypeChange}
          >
            <option value='TACTICAL'>Tatical</option>
            <option value='MECHANICAL'>Mechincal</option>
            <option value='MENTAL'>Mental</option>
            <option value='PICK'>Pick</option>
            <option value='ITEM_BUILD'>Item build</option>
            <option value='SKILL_BUILD'>Skill build</option>
          </select>
          <select
            value={missplaySeverity}
            onChange={handleMissplaySeverityChange}
          >
            <option value='MINOR'>Minor</option>
            <option value='MINORPLUS'>Minor+</option>
            <option value='MIDDLING'>Middling</option>
            <option value='MAJOR'>Major</option>
            <option value='LANE_LOSING'>Lane losing</option>
            <option value='GAME_LOSING'>Game losing</option>
          </select>
          <input 
            value={isForced}
            type="checkbox"
            onClick={handleIsForcedChange}
          />
          <input 
            type="submit"
            value="Save Missplay"
          />
      </form>
    </>
    
  )
}

export default SaveMissplay

// "id": 1,
// 				"missPlayType": "MENTAL",
// 				"missPlaySeverity": "MAJOR",
// 				"description": "Lost patience and went hunting for kills, got picked off",
// 				"adjustment": "Keep a good routuine of not rage requeing, possbiliy take small sessions of mindfullness practice",
// 				"forced": false