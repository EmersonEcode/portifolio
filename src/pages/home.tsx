import React from "react";
import { Header } from "../components/Header";
import styles from '../styles/home.module.css';
import { Apresentation } from "../components/Apresentation";

export const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Apresentation/>
        </div>
    )
}