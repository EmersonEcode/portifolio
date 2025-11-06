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
                        Olá! Sou desenvolvedor (em formação) com foco em Sistemas para Internet e também técnico em Administração. Sempre fui movido por curiosidade e criatividade — e foi assim que a tecnologia entrou de vez na minha vida.
                    </p>  

                    <p>
                        Estou construindo uma base sólida nas principais tecnologias do front-end e me aprofundando no ecossistema JavaScript e Linux.
                    </p>


                    <p>
                        Além do código, gosto de explorar ideias através da música e da filosofia, o que me ajuda a pensar fora da caixa. Gosto de testar soluções diferentes e estou sempre buscando aprender mais.
                    </p>

                    </article>
            </section>
        </FadeIn>
    )
}

