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
                    <li className={styles.li}>Sobre</li>
                    <li className={styles.li}>Habilidades</li>
                    <li className={styles.li}>Projetos</li>
                </ol>
            </nav>
            <nav className={styles.navContact}>
                <ol>
                    <li className={styles.li}><FaLinkedin size={28} color="#0e76a8" />Linkedin</li>
                    <li className={styles.li}><FaGithub size={28} color="#722f01" />GitHub</li>
                    <li className={styles.li}><a className={styles.a} href="#"><MdOutlineEmail size={25} className={styles.icon}  /><span>Contact me</span></a></li>
                </ol>
            </nav>
        </header>
    )
}