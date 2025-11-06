import React from "react";
import { FadeIn } from "./animação/FadeIn";
import styles from '../styles/projects.module.css';

export const Projects = () => {
    const projetos = [
        {    
            id: 4,
            titulo: 'Ecode Blog',
            descricao: 'Blog full-stack completo. O frontend em Angular 17 (Standalone) possui SEO dinâmico, Dark Mode com Glassmorphism, filtros de tag e animações. O backend é uma API RESTful com Node.js, Express e Mongoose, conectada ao MongoDB Atlas. O deploy é automatizado com GitHub Actions.',
            stacks: [
                { stack: 'Angular', color: '#dd0031' },
                { stack: 'TypeScript', color: '#3178C6' },
                { stack: 'Node.js', color: '#68A063' },
                { stack: 'MongoDB', color: '#47A248' },
                { stack: 'CI/CD', color: '#FF6B6B' }
            ],
            img: './images/blog.png',
            link: 'https://blog-ecode.vercel.app/blog'
        },
        // ======================================
        {    
            id: 1,
            titulo: 'Psn Store',
            descricao: 'Interface da PlayStation Store. O objetivo foi treinar a componentização no Angular e aplicar conceitos de UI/UX em um layout inspirado em e-commerce.',
            stacks: [
                { stack: 'Angular', color: '#dd0031' },
                { stack: 'Typescript', color: '#3178C6' },
                
            ],
            img: './images/psn-site.png',
            link: 'https://emersonecode.github.io/psn-store/'
        },
        {    
            id: 2,
            titulo: 'Cripto',
            descricao: 'Projeto em React para exibir dados de criptomoedas em tempo real, com integração de API (CoinGecko) e cache inteligente via localStorage.',
            stacks: [
                { stack: 'React', color: '#61DAFB' },
                { stack: 'Typescript', color: '#3178C6' },
                { stack: 'API REST', color: '#FF6B6B' }
            ],
            img: './images/cripto.png',
            link: 'https://emersonecode.github.io/cripto/'
        },
        {    
            id: 3,
            titulo: 'Edunova',
            descricao: 'Sistema educacional com CRUD completo, validações de formulários, filtros e paginação. Desenvolvido com Angular aplicando conceitos avançados de componentização e gerenciamento de estado.',
            stacks: [
                { stack: 'Angular', color: '#dd0031' },
                { stack: 'Typescript', color: '#3178C6' },
                { stack: 'Sass', color: '#CC6699' },
                { stack: 'LocalStorage', color: '#4D4DFF' }
            ],
            img: './images/edunova.png',
            link: 'https://edunova-jade.vercel.app/'
        }
    ]

    return (
        <FadeIn direction="up" delay={0.5}>
            <section id="projects" className={styles.content}>
                <h2>Projetos<span>( )</span></h2>
                
                <div className={styles.list}>
                    {/* O .sort() garante que os projetos apareçam em ordem (4, 3, 2, 1) */}
                    {projetos.sort((a, b) => b.id - a.id).map((item) => (
                        <article 
                            key={item.id} 
                            className={styles.listItem} 
                            onClick={() => window.open(item.link, "_blank")}
                        >
                            <div className={styles.imageContainer}>
                                <img 
                                    src={item.img} 
                                    alt={`Captura do projeto ${item.titulo}`} 
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className={styles.textContent}>
                                <h3>{item.titulo}</h3>
                                <p>{item.descricao}</p>
                                
                                <div className={styles.techTags}>
                                    {item.stacks.map((tech, idx) => (
                                        <span 
                                            key={idx}
                                            style={{ backgroundColor: tech.color }}
                                        >
                                            {tech.stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </FadeIn>
    )
}