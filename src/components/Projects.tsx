import React from "react";
import { FadeIn } from "./animação/FadeIn";
import styles from '../styles/projects.module.css';
import { color } from "framer-motion";


export const Projects = () => {

    const projetos = [
        {   
            id: 1,
            titulo: 'Psn Store',
            descricao: 'interface da PlayStation Store. O objetivo foi treinar a componentização no Angular e aplicar conceitos de UI/UX em um layout inspirado em e-commerce.',
            stacks: [
                {
                    stack: 'Angular',
                    color: 'white'
                },
                {
                    stack: 'Typescript',
                    color: 'white'
                }    
            ],
            img: './images/psn-site.png',
            link: 'https://emersonecode.github.io/psn-store/'
        },
    ]



    return (
    <FadeIn direction="up" delay={0.5}>
        <section id="projects" className={styles.content}>
            <h2>Projetos<span>( )</span></h2>
            <section className={styles.contentList}>
                <section className={styles.list}>
                {
                    projetos.map((item , index) => (
                        
                        <div key={index} className={styles.listItem} onClick={() => window.open(item.link, "_blank")}>
                            <div className={styles.imageContent}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={styles.infoContent}>
                                <h3>{item.titulo}</h3>
                                <p>{item.descricao}</p>
                                <div className={styles.listStacks}> 
                                    {item.stacks.map((item, index) => (
                                        <div key={index}>
                                            {item.stack}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                     ) )
                }
            </section>
            </section>
            
        </section>
    </FadeIn>
        
    )
}