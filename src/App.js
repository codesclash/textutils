import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]= useState(null);

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#0d0d55';
      showAlert("Dark Mode has been enabled","success");
    }
      else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Has Been Enabled","success");
    } 
  }
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);

  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleModeProp={toggleMode}/>


      <Alert alert={alert} />


      <TextForm showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode}/>

      

    </>
  );
}

export default App;
////Checks to make sure props are passed to a component as components are incomplete without the props
Navbar.propTypes={title:PropTypes.string.isRequired}

Navbar.defaultProps={ title: 'Title Here'}