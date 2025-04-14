import React from "react";
import styles from '../styles/header.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><h1>EMERSON</h1></div>
            <nav className={styles.nav}>
                <ol className={styles.ol}>
                    <li className={styles.li}><a href="#about">Sobre</a></li>
                    <li className={styles.li}><a href="#skills">Habilidades</a></li>
                    <li className={styles.li}><a href="#projects">Projetos</a></li>
                </ol>
            </nav>
            <nav className={styles.navContact}>
                <ol>
                    <li className={styles.li}><a className={styles.socialBtn} href="https://www.linkedin.com/in/emerson-a-274245177" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} color="#0e76a8" />Linkedin</a></li>
                    <li className={styles.li}><a className={styles.socialBtn} href="https://github.com/EmersonEcode/" target="_blank" rel="noopener noreferrer"><FaGithub size={28} color="#722f01" />GitHub</a></li>
                    <li className={styles.li}><a className={styles.linkEmail} href="mailto:emersonalves942@gmail.com"><MdOutlineEmail size={25} className={styles.icon}  /><span>Contact me</span></a></li>
                </ol>
            </nav>
        </header>
    )
}