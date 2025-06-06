import React from "react";
import styles from '../styles/aboutme.module.css'
import { FadeIn } from "./animação/FadeIn";

export const AboutMe = () =>{
    return (
        <FadeIn direction="left">
            <section id="about" className={styles.content}>
                <h2>sobreMim<span>( )</span></h2>
            <article className={styles.aboutMe}>
                <p>
                Olá! Sou estudante de Sistemas para Internet e também técnico em Administração. Sempre fui movido por curiosidade e criatividade — e foi assim que a tecnologia entrou de vez na minha vida. Tenho habilidades em HTML, CSS, JavaScript e estou me aprofundando em Angular e React e também no sistema operacional Linux.
                Além do código, gosto de explorar ideias através da música e da filosofia, o que me ajuda a pensar fora da caixa. Gosto de testar sempre soluções diferentes e estou sempre buscando aprender mais.
                </p>
            </article>
            </section>
        </FadeIn>
    )
}

