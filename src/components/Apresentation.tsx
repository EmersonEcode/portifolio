import React from "react";
import myfoto from '../assets/myfoto.jpeg';
import styles from '../styles/apresentation.module.css';
import AngularIcon from '../assets/angularIcon.png';
import JavascriptIcon from '../assets/javascriptIcon.png';
import TypeScriptIcon from '../assets/typescriptIcon.png';
import { Typewriter } from 'react-simple-typewriter';
import { FadeIn } from "./animação/FadeIn";
// Importei um ícone para o botão
import { FaArrowRight } from 'react-icons/fa';

export const Apresentation = () => {
    
    return (
        <FadeIn direction="up">
            <section className={styles.section}>
                
                {/* --- LADO ESQUERDO: TEXTO --- */}
                <article className={styles.intro}>
                    <div className={styles.introText}>
                        {/* Mudança: "Eae" -> "Olá," */}
                        <p className={styles.apresentationParagraph}>Olá, eu sou</p>
                    </div>

                    {/* MUDANÇA PRINCIPAL: <p> para <h1> para SEO e Acessibilidade */}
                    <h1 className={styles.namecodeParagraph}>
                        <Typewriter
                            words={[
                                '<Emerson />',
                                '<Desenvolvedor Front-end/>', // Mudei para português
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>

                    {/* NOVO: Sub-headline (Elevator Pitch) */}
                    <p className={styles.subHeadline}>
                        Focado em criar interfaces de usuário modernas e responsivas 
                        com Angular, React e TypeScript.
                    </p>

                    {/* NOVO: Botões de Call to Action (CTA) */}
                    <div className={styles.ctaContainer}>
                        <a href="#projects" className={styles.ctaButtonPrimary}>
                            Meus Projetos
                            <FaArrowRight size={14} />
                        </a>
                        <a href="mailto:emersonalves942@gmail.com" className={styles.ctaButtonSecondary}>
                            Contato
                        </a>
                    </div>
                    
                </article>

                {/* --- LADO DIREITO: IMAGENS --- */}
                <article className={styles.logo}>
                    {/* Mudança: Alt tag mais descritiva */}
                    <img className={styles.foto} src={myfoto} alt="Foto de perfil de Emerson" />
                    <img className={styles.angularIcon} src={AngularIcon} alt="Icone do Angular flutuando" />
                    <img className={styles.javascriptIcon} src={JavascriptIcon} alt="Icone do Javascript flutuando" />
                    <img className={styles.typescriptIcon} src={TypeScriptIcon} alt="Icone do Typescript flutuando" />
                </article>
            </section>
        </FadeIn>
        
    )
}