import React from "react";
import { FadeIn } from "./animação/FadeIn";
import styles from '../styles/projects.module.css';

export const Projects = () => {
    const projetos = [
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
                
                <div className={styles.contentList}>
                    <div className={styles.list}>
                        {projetos.map((item) => (
                            <article 
                                key={item.id} 
                                className={styles.listItem} 
                                onClick={() => window.open(item.link, "_blank")}
                                aria-label={`Projeto ${item.titulo}`}
                            >
                                <div className={styles.imageContent}>
                                    <img 
                                        src={item.img} 
                                        alt={`Captura de tela do projeto ${item.titulo}`} 
                                        loading="lazy"
                                    />
                                </div>
                                
                                <div className={styles.infoContent}>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.descricao}</p>
                                    
                                    <div className={styles.listStacks}>
                                        {item.stacks.map((tech, idx) => (
                                            <span 
                                                key={idx}
                                                className={styles.stackBadge}
                                                style={{ 
                                                    backgroundColor: tech.color,
                                                    color: getContrastColor(tech.color)
                                                }}
                                            >
                                                {tech.stack}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>
    )
}

// Função auxiliar para determinar cor do texto com melhor contraste
function getContrastColor(hexColor:any) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
}