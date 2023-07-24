import React,{useMemo,useState,useEffect} from 'react';
import './App.css';
import banner from './banner.png'; 
import Navbar from './Navbar';
import { MaterialReactTable } from 'material-react-table'; // https://www.material-react-table.com/docs/examples/basic

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ojyikcluxfqbxcpacdvy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qeWlrY2x1eGZxYnhjcGFjZHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5ODY4MDcsImV4cCI6MjAwNDU2MjgwN30.VBBL_CvwWLfnMyo1ZgOOCXf9B4degD2qDcNAtHoDj7I';
const supabase = createClient(supabaseUrl, supabaseKey);

// https://supabase.com/docs/guides/functions/examples/stripe-webhooks
// const URL='https://feedback-forms-backend.vercel.app';

const dataTable=[
    {
        name:'John Doe',
        address:'261 Erdman Ford',
        city:'East Daphne',
        state:'Kentucky',
    },
    {
        name:'Jane Doe',
        address:'769 Dominic Grove',
        city:'Columbus',
        state:'Ohio',
    },
    {
        name:'Joe Doe',
        address:'566 Brakus Inlet',
        city:'South Linda',
        state:'West Virginia',
    },
    {
        name:'Kevin Vandy',
        address:'722 Emie Stream',
        city:'Lincoln',
        state:'Nebraska',
    },
    {
        name:'Joshua Rolluffs',
        address:'32188 Larkin Turnpike',
        city:'Charleston',
        state:'South Carolina',
    },
];

// const { data: { user } } = await supabase.auth.getUser()



function App() {
    const [login,setLogin]=useState(false);
    supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
            setLogin(true);
        }
        else setLogin(false);
        console.log(event, session)
    })

    async function submitForm() {
        let formData={
            api_key:'233b3086-8b9e-4ed8-a72c-8c962ead1461',
            name:"John Doe",
            email:"john-doe@example.com",
            // test:"hallo das ist ein test"
        };
        let response=await fetch(URL+'/forms', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        });
        let json=await response.json();
        console.log(JSON.stringify(json))
    };
    const columns=useMemo(()=>[
        {
            accessorKey:'name',
            header:'Name',
            size:150,
        },
        {
            accessorKey:'address',
            header:'Address',
            size:200,
        },
        {
            accessorKey:'city',
            header:'City',
            size:150,
        },
        {
            accessorKey:'state',
            header:'State',
            size:150,
        },
    ],[]);

    async function checkUser() {
        let { data: users, error } = await supabase
            .from('users')
            .select()
        console.log(users);
    }

    return (
        <div className="App">
            {/* <button onClick={submitForm}>Submit</button> */}
            <button onClick={checkUser}>user</button>
            <div className="flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-500 h-s96">
                <Navbar supabase={supabase} login={login}/>
                <h1 className="text-7xl text-white">Form feedback</h1>
                <img className="m-9" src={banner} alt="banner" />
            </div>
            <MaterialReactTable 
                columns={columns} 
                data={dataTable} 
            />
        </div>
    );
}

export default App;
