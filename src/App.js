import React from 'react';
import './App.css';
import banner from './banner.png'; 
import Navbar from './Navbar';

function App() {
    // async function submitForm() {
    //     let formData={
    //         api_key:'233b3086-8b9e-4ed8-a72c-8c962ead1461',
    //         name:"John Doe",
    //         email:"john-doe@example.com",
    //         // test:"hallo das ist ein test"
    //     };
    //     let response=await fetch('http://192.168.2.47:3001/forms', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json',
    //         },
    //         body:JSON.stringify(formData),
    //     });
    //     let json=await response.json();
    //     alert(JSON.stringify(json))
    // };

    return (
        <div className="App">
            {/* <button onClick={submitForm}>Submit</button> */}
            <div className="flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-500 h-screen">
                <Navbar/>
                <h1 className="text-7xl text-white">Form feedback</h1>
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
}

export default App;
