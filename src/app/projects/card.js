'use client'
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useRouter } from "next/navigation";

export default function Card(props){
  const link = props.lk;
  const router = useRouter();
  return(
  <div className="card">
    <div className="card-content">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-body">
        {props.desc}
      </p>
      <a href="#" className="button" onClick={()=> router.push(link)}>
        {props.button}
      </a>
    </div>
  </div>
)
}
