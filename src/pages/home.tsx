import React from "react";
import { Header } from "../components/Header";
import styles from '../styles/home.module.css';
import { Apresentation } from "../components/Apresentation";
import { AboutMe } from "../components/AboutMe";

export const Home = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Apresentation/>
            <AboutMe/>
        </div>
    )
}