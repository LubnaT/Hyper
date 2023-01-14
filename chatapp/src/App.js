
import { useState } from 'react';
import './App.css';
import LandingPage from './screens/LandingPage';
import Loginpage from './screens/Loginpage';
// import Card from './component/Card';
// import Inc from './component/Inc';
// import Classmorgan from './screens/Classmorgan';
// import Y from './Hii';

function App() {
  const [show,setshow] = useState(true)
  return (
  //  <Y/>
  // <Classmorgan/>
  // <Inc/>
  // <Card/>

  <div>
    {show ? <LandingPage/> : <Loginpage/>}
  </div>
  
  );
}

export default App;
