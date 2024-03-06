import React from "react";

function App(){
    let currtime = new Date(2024,2,1,8);
currtime = currtime.getHours();
let greeting="";
const cssStyle ={};

if(currtime >= 1 && currtime < 12){
  greeting = "Good Morning";
  cssStyle.color ="green";
}else if(currtime >= 12 && currtime < 19){
  greeting = "Good Afternoon";
  cssStyle.color ="Orange";

}
else{
  greeting = "Good Night";
  cssStyle.color ="Black";

}

    return (
        <>
            <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
        </>
    )
        
}
export default App;