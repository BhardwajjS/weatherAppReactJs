import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    const {Component} = props;
    let login = localStorage.getItem("token");
    
    useEffect(() => {
     if(!login){
       navigate("/")
    }
    }, [])
    
  return (
    <div><Component/></div>
  )
}

export default Protected;