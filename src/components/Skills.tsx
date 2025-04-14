import React from "react";
import styles from '../styles/skills.module.css';
import { FaReact, FaJs, FaCode, FaAngular, FaHtml5, FaCss3, FaLinux} from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { FadeIn } from "./animação/FadeIn";
export const Skills = () => {
    return (
        <FadeIn direction="right"> 
            <section id="skills" className={styles.content}>
             <h2>habilidades<span>( )</span></h2>
                <ol>
                <li><FaHtml5 size={80} color="#e34c26" /></li>      
                <li><FaCss3 size={80} color="#264de4" /></li>        
                <li><FaJs size={80} color="#f0db4f" /></li>          
                <li><SiTypescript size={75} color="#3178C6" /></li>  
                <li><FaAngular size={85} color="#dd0031" /></li>     
                <li><FaReact size={80} color="#61dafb" /></li>      
                <li><FaLinux size={80} color="#fcc624" /></li>          
                </ol>
            </section>
        </FadeIn>
       
    )
}