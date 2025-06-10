import React from "react";
import myfoto from '../assets/myfoto.jpeg';
import styles from '../styles/apresentation.module.css';
import AngularIcon from '../assets/angularIcon.png';
import JavascriptIcon from '../assets/javascriptIcon.png';
import TypeScriptIcon from '../assets/typescriptIcon.png';
import { Typewriter } from 'react-simple-typewriter';
import { FadeIn } from "./animação/FadeIn";

export const Apresentation = () => {
    
    return (
        <FadeIn direction="up">
            <section className={styles.section}>
                <article className={styles.intro}>
                    <div className={styles.introText}>
                        <p className={styles.apresentationParagraph}>Eae , eu sou</p>
                    </div>
                        <p className={styles.namecodeParagraph}>
                            <Typewriter
                                words={[
                                    '<Emerson />',
                                '<Frontend Developer/>',
                                
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </p>
                    
                </article>

                <article className={styles.logo}>
                    <img className={styles.foto} src={myfoto} alt="minha foto em um lugar legal" />
                    <img className={styles.angularIcon} src={AngularIcon} alt="Icone do Angular flutuando" />
                    <img className={styles.javascriptIcon} src={JavascriptIcon} alt="Icone do Javascript flutuando" />
                    <img className={styles.typescriptIcon} src={TypeScriptIcon} alt="Icone do Typescript flutuando" />
                </article>
            </section>
        </FadeIn>
        
    )
}