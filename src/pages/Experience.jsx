import React, { useEffect, useRef, useState } from 'react';
import '../style/componentStyle/experience.css';

const experiences = [
    {
        title: 'Back End Developer - PT XLSMART Telecom Sejahtera Tbk',
        period: 'Mar 2026 - Present',
        description:
            'Responsible for supporting the migration process from AWS to Tencent Cloud, including environment preparation, deployment support, and production promotion activities. Contributed to SIT and UAT processes to ensure system stability and functionality, while developing and maintaining backend services using Java Spring Boot and PostgreSQL.',
    },
    {
        title: 'Back End Developer - Lawencon Internasional',
        period: 'Mar 2026 - Present',
        description:
            'Responsible for supporting the migration process from AWS to Tencent Cloud, including environment preparation, deployment support, and production promotion activities. Contributed to SIT and UAT processes to ensure system stability and functionality, while developing and maintaining backend services using Java Spring Boot and PostgreSQL.',
    },
    {
        title: 'Back End Developer - CODE.ID',
        period: 'Nov 2025 - Mar 2026',
        description:
            'Responsible for developing and maintaining an Agent Management application within a microservices architecture, including agent status management, activity history, and audit trails. Developed backend services using Java Quarkus integrated with PostgreSQL and collaborated with NestJS-based services, while implementing event-driven notifications using Apache Kafka for automated push and email notifications.',
    },
    {
        title: 'Back End Developer - Prudential Indonesia (PT Prudential Life Assurance)',
        period: 'Nov 2025 - Mar 2026',
        description:
            'Responsible for developing and maintaining an Agent Management application within a microservices architecture, including agent status management, activity history, and audit trails. Developed backend services using Java Quarkus integrated with PostgreSQL and collaborated with NestJS-based services, while implementing event-driven notifications using Apache Kafka for automated push and email notifications.',
    },
    {
        title: 'Application Developer - PT. BANK NEGARA INDONESIA (Persero) Tbk',
        period: 'Feb 2023 - Oct 2025',
        description:
            'Responsible for testing and monitoring EDC, ATM, and CRM systems to ensure functionality, security, and operational reliability, while also contributing to the development of the Wonder and Wonder Merchant applications by building backend APIs, merchant registration features, QRIS payment processing, file transfer integrations (SFTP/FTP), and payment reconciliation features, as well as supporting SIT, UAT, production deployment, and technical documentation.',
    },
    {
        title: 'Application Developer Jr - Mitra Integrasi Informatika',
        period: 'Nov 2022 - Oct 2025',
        description:
            'Responsible for developing full-stack web applications using Java Spring Boot, Thymeleaf, SQL, HTML, CSS, and JavaScript, including backend service development, RESTful API integration, database management, and building responsive user-friendly interfaces to deliver functional and scalable web solutions.',
    },
];

const Experience = () => {
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);

                    if (entry.isIntersecting) {
                        entry.target.classList.add('experience-card-visible');
                    } else {
                        entry.target.classList.remove('experience-card-visible');
                    }
                });

                // Hitung card yang sedang visible
                const visibleCards = cardRefs.current.filter((card) =>
                    card?.classList.contains('experience-card-visible')
                );

                setActiveIndex(visibleCards.length);
            },
            {
                threshold: 0.3,
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section id="experience" className="experience">
            <div className="experience-inner">

                <div className="experience-header">
                    <h2>Experience</h2>
                    <p>
                        My professional experience in software development and system integration.
                    </p>
                </div>

                <div className="experience-list">
                    {experiences.map((item, index) => (
                        <article
                            key={index}
                            data-index={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="experience-card"
                            style={{
                                transitionDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="experience-card-top">
                                <h3>{item.title}</h3>
                                <span>{item.period}</span>
                            </div>

                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;