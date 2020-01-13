import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: "Lets hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Brrrr it is COLD!!!",
        iconName: 'snowflake'

    }


};



const getSeason = (lat, month) => {
if(month > 2 && month < 9){
   return lat > 0 ? 'summer' : 'winter' ;
}else {
    return lat > 0 ? 'winter' : 'summer';
}


};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];
   
    return (
   <div className={`season-display ${season}`}>
     <i className={`icon-left huge ${iconName} icon`} />
    <h1 style={{ color: '#bcbdbd'}}>{text}</h1>  
     <i className={`icon-right huge ${iconName} icon`} />
    
    </div>

    );
};



export default SeasonDisplay;


