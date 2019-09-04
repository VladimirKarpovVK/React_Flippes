import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useSpring,animated} from 'react-spring';
import "./styles.css";

const Users = [
  { name: "Karl", age: 33 },
  { name: "Charls", age: 46 },
  {
    name: "Kristian",
    age: 54
  },
  {
    name: "Kreig",
    age: 54
  }
];

function currentData(index) {
  if ((index + 1) % 2 === 0) {
    return {
      ...Users[index],
      currStyle: {
        color: "red",
        backgroundColor:'yellow',
        },
        direction:'left'
      
    };
  }
  return {
    ...Users[index],
    currStyle: {
      width:'100%',
      backgroundColor:'#042',
      color: "blue",
      
    },
    direction:'right'
      
  };
}

const Base = ({direction, name, age, currStyle }) => {
 
   const [is_hovered,setHover]=useState(false);
    
     
    const [{r},setAnimate]=useSpring(()=>{
     return {r:0}} );
    const animation=useSpring(
     is_hovered?{opacity: 0.5}:{opacity:1});
   
  return (
    <> 

      <animated.div

         
        onMouseEnter={()=>{setHover(true);
        setAnimate({r: (direction==='right')?180:-180});
        }}
        onMouseLeave={()=>{setHover(false);
          setAnimate({r:0});
       
        }
      }
       style={{ ...currStyle, 
       transform:r.interpolate((r)=>`
       perspective(700px)
       rotateY(${r}deg)`)
       ,...animation }}>
        <div><h2>{name}!</h2></div>
        <div>{<h3>Wellcome {age}</h3>}</div>
      </animated.div>
      
    </>
  );
};
function App() {
  return (
    <div className="App" style={{
       }}>
      <h1>Hello CodeSandbox</h1>
<div style={{display:'flex',
flexDirection:'column',
width:'60%',
fontFamily:'Roboto sans-serif',
margin:'0 auto'
}}>
      {
        Users.map((item, i) => {
        return <Base
         {...currentData(i)} />;
      })}
</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
