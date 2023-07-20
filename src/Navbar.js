import {React, useState} from 'react';
import Modal from 'react-modal';
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Navbar({supabase,login}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    function openModal() {setIsOpen(true);}
    // function handleEmailChange(event) {setUserEmail(event.target.value);}
    
    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }

    function closeModal() {setIsOpen(false);setUserEmail('');}

    // async function loginUser() {
    //     // let { data, error } = await supabase.auth.signInWithOtp({
    //     //     email: userEmail
    //     // })
    //     let { data, error } = await supabase.auth.signInWithOtp({
    //         email: 'jonas.kaatz95@gmail.com'
    //     })
    //     console.log(data);
    //     console.log(error);
    // }
    return (
        <nav className="flex flex-col items-center w-full bg-white">
            <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-between h-16 px-4 max-w-7xl">
                <span className="text-whiste font-bold text-xl">welcome</span>
                <div className="flex flex-row items-center py-2">
                    {login?
                    <button className="flex justify-center items-center py-2 w-24 text-center bg-indigo-500 rounded-lg text-white" onClick={signOut}>logout</button>
                    :
                    <button className="flex justify-center items-center py-2 w-24 text-center bg-indigo-500 rounded-lg text-white" onClick={openModal}>Login</button>
                    }
                </div>
            </div>
            <Modal isOpen={modalIsOpen} ariaHideApp={false} className={'h-1/2 flex items-center justify-center'}>
                <div className="w-11/12 max-w-lg h-s48 bg-slate-100 p-2 rounded-xl shadow-lg shadow-slate-400">
                    <div className="flex justify-between mb-3">
                        <h2 className="text-4xl">Login</h2>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <div className="p-4">
                        <Auth
                            supabaseClient={supabase}
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                            providers={false}
                            className={"w-96 bg-blue-200"}
                            // providers={["google", "facebook", "github"]}
                        />
                        {/* <input className="px-4 py-2 rounded-xl border" type='text' value={userEmail} onChange={handleEmailChange} placeholder='Email'/> */}
                        {/* <button className="flex justify-center items-center py-2 w-24 text-center bg-indigo-500 rounded-lg text-white" onClick={loginUser}>Login</button> */}
                    </div>
                </div>
            </Modal>
        </nav>
    )
}
