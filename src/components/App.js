import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data =>  setDogImage(data.message));
        }, []);
        
     
  if (!dogImage){
    return <p>Loading...</p>
  }
 return(
    <div>
      <img src={dogImage} alt="A Random dog" />
    </div>)
  
  
 
    
 
 
  
}

export default App;
