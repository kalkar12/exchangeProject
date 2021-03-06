import React,{useState} from 'react';

function DateEx(props){
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  
  const [currentTime , setCurrentTime] = useState(time);
  const [currentDate , setCurrentDate] = useState(date);

  const updateTime = () =>{
      time = new Date().toLocaleTimeString();
      date = new Date().toLocaleDateString();
      setCurrentTime(time);
      setCurrentDate(date);
  }

  setInterval(updateTime, 1000);

  return (
      <div>
          <h4 className="d-inline" style={{fontSize: "2em"}}>{time}&nbsp;-&nbsp;</h4>
          <h4 className="d-inline" style={{fontSize: "2em"}}>{date}</h4>
      </div>
  )
}

export default DateEx