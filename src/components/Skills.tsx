import React from "react";
import styles from '../styles/skills.module.css';
import { 
    FaReact, 
    FaJs, 
    FaAngular, 
    FaHtml5, 
    FaCss3, 
    FaLinux 
} from "react-icons/fa";
import { SiTypescript, SiSpringboot } from 'react-icons/si';
import { FadeIn } from "./animação/FadeIn";

// --- ARRAY DE HABILIDADES (MAIS SIMPLES) ---
const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3 color="#264de4" /> },
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'React', icon: <FaReact color="#61dafb" /> },
    { name: 'Angular', icon: <FaAngular color="#dd0031" /> },
    { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
    { name: 'Linux', icon: <FaLinux color="#fcc624" /> },
];

export const Skills = () => {
    return (
        <FadeIn direction="right"> 
            <section id="skills" className={styles.content}>
                <h2>habilidades<span>( )</span></h2>
                
                {/* Esta é a nossa nova lista de "tags" */}
                <ol className={styles.skillsList}>
                    {skillsData.map((skill) => (
                        <li key={skill.name} className={styles.skillItem}>
                            {/* Ajustamos o tamanho do ícone diretamente aqui */}
                            {React.cloneElement(skill.icon, { size: 40 })}
                            <span className={styles.skillName}>{skill.name}</span>
                        </li>
                    ))}
                </ol>
            </section>
        </FadeIn>
    )
}