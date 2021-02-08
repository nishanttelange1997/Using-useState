import {useState} from 'react';
import './design.css';

function App()
{

  const [my_name,changeMyName] = useState("Nishant");
  const [my_Age,changeMyAge] = useState(24);
const Click = () =>
{
changeMyName("Chetan");

} 
const forAge = () =>
{
  changeMyAge(23);
}
 
    return(
<center >
  <div className="create">
      <h1>My Name : {my_name}</h1>   
      <button onClick={Click} style={{backgroundColor:"orange"}}>Change Name</button>  
       <h1>My Age : {my_Age}</h1>
       <button onClick={forAge} style={{backgroundColor:"orange"}}>Change Age</button>
       </div>
       
    </center>
    );
  
}

export default App;
