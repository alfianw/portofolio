import React, { useEffect, useRef } from 'react';
import '../style/componentStyle/skills.css';
import reactIcon from '../assets/skills/react.svg';
import javaIcon from '../assets/skills/java.svg';
import postgresqlIcon from '../assets/skills/postgresql.svg';
import javascriptIcon from '../assets/skills/javascript.svg';
import html5Icon from '../assets/skills/html5.svg';
import css3Icon from '../assets/skills/css3.svg';
import gitIcon from '../assets/skills/git.svg';
import nodejsIcon from '../assets/skills/nodejs.svg';
import mysqlIcon from '../assets/skills/mysql.svg';
import oracleIcon from '../assets/skills/oracle.svg';
import softwareagIcon from '../assets/skills/softwareag.svg';
import tailwindcssIcon from '../assets/skills/tailwindcss.svg';
import quarkusIcon from '../assets/skills/quarkus.svg';
import kafkaIcon from '../assets/skills/kafka.svg';
import nestjsIcon from '../assets/skills/nestjs.svg';
import awsIcon from '../assets/skills/aws.svg';
import tencentcloudIcon from '../assets/skills/tencentcloud.png';

const skills = [
    {
        name: 'ReactJS',
        icon: reactIcon,
    },
    {
        name: 'Java',
        icon: javaIcon,
    },
    {
        name: 'PostgreSQL',
        icon: postgresqlIcon,
    },
    {
        name: 'JavaScript',
        icon: javascriptIcon,
    },
    {
        name: 'HTML5',
        icon: html5Icon,
    },
    {
        name: 'CSS3',
        icon: css3Icon,
    },
    {
        name: 'Git',
        icon: gitIcon,
    },
    {
        name: 'Node.js',
        icon: nodejsIcon,
    },
    {
        name: 'MySQL',
        icon: mysqlIcon,
    },
    {
        name: 'Oracle',
        icon: oracleIcon,
    },
    {
        name: 'Software AG webMethods',
        icon: softwareagIcon,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcssIcon,
    },
    {
        name: 'Quarkus',
        icon: quarkusIcon,
    },
    {
        name: 'Apache Kafka',
        icon: kafkaIcon,
    },
    {
        name: 'NestJS',
        icon: nestjsIcon,
    },
    {
        name: 'AWS',
        icon: awsIcon,
    },
    {
        name: 'Tencent Cloud',
        icon: tencentcloudIcon,
    },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const section = sectionRef.current;
        const grid = gridRef.current;
        if (!section || !grid) return;

        const scrollContainer = wrapper || window;

        const getScrollTop = () => {
            return wrapper ? wrapper.scrollTop : window.pageYOffset;
        };

        const getInnerHeight = () => {
            return wrapper ? wrapper.clientHeight : window.innerHeight;
        };

        const getMaxOffset = () => {
            return Math.max(grid.scrollWidth - section.clientWidth + 24, 0);
        };

        const updateScroll = (maxOffset) => {
            const sectionRect = section.getBoundingClientRect();
            const innerHeight = getInnerHeight();
            const startOffset = 80;
            const scrollRange = Math.max(sectionRect.height - innerHeight - startOffset, 1);
            const progress = Math.min(Math.max((-sectionRect.top + startOffset) / scrollRange, 0), 1);
            const offset = -progress * maxOffset;
            grid.style.transform = `translateX(${offset}px)`;
        };

        const updateLayout = () => {
            const maxOffset = getMaxOffset();
            if (window.innerWidth <= 980) {
                section.style.height = '3200px';
                grid.style.transform = 'translateX(0)';
                return;
            }

            section.style.height = `${getInnerHeight() + maxOffset + 240}px`;
            updateScroll(maxOffset);
        };

        updateLayout();

        const handleScroll = () => {
            if (window.innerWidth <= 980) return;
            updateScroll(getMaxOffset());
        };
        const handleResize = () => updateLayout();

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="skills" className="skills" ref={sectionRef}>
            <div className="skills-inner">
                <div className="skills-header">
                    <h2>Skills</h2>
                    <p>These are my core capabilities in application development and system integration.</p>
                </div>

                <div className="skills-grid" ref={gridRef}>
                    {skills.map((skill, index) => (
                        <div
                            className={`skill-card ${index < 9 ? 'top-row' : 'bottom-row'}`}
                            key={skill.name}
                        >
                            <div className="skill-icon">
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
