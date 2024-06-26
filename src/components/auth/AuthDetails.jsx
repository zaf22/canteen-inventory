import React, {useEffect, useState} from 'react';
import {onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// This checks if the user is signed in or not. If they are signed in, Their email will be printed along with a button with the ability to sign out. If not, a button will appear to log in.
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out successfully!');
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        });
    }
    const navigate = useNavigate();
    const userSignIn = () => {
        navigate("/login");
    }
  return (
    <Container>
        {authUser ? <div className='mt-3'>
            <p>{`Signed In as ${authUser.email}`}</p>
            <Button onClick={userSignOut}>Sign Out</Button></div> 
        : <Button onClick={userSignIn}>Sign In</Button>}
    </Container>
  )
}

export default AuthDetails