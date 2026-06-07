import React, { useEffect, useRef, useState } from "react";
import "../style/componentStyle/portfolio.css";
import nftImage from "../assets/nft.png";
import baydulsImage from "../assets/bayduls.png";
import movieKuyImage from "../assets/movieKuy.png";
import spaceImage from "../assets/space.png";
import todoImage from "../assets/Todo-App.png";
import urlShorteningImage from "../assets/url-shortening.png";
import roomHomepageImage from "../assets/room-homepage.png";
import emailSubscriptionImage from "../assets/emailSubscriptionPage.png";
import ecommerceProductImage from "../assets/ecommerce-product-page-main.png";
import bandarPlastikImage from "../assets/bandarplastik.png";
import bookshelfImage from "../assets/book.png";

const portfolioProjects = [
    {
        title: "NFT Thermos",
        image: nftImage,
        link: "https://alfianw.github.io/NFTThermos/",
    },
    {
        title: "bayduls",
        image: baydulsImage,
        link: "https://alfianw.github.io/BayDuls/",
    },
    {
        title: "Move kuy!",
        image: movieKuyImage,
        link: "https://alfianw.github.io/MovieKuy/",
    },
    {
        title: "Space Tourism",
        image: spaceImage,
        link: "https://alfianw.github.io/SpaceTourism/",
    },
    {
        title: "todo app",
        image: todoImage,
        link: "https://alfianw.github.io/Todo-App/all",
    },
    {
        title: "url shortening",
        image: urlShorteningImage,
        link: "https://alfianw.github.io/url-shortening/",
    },
    {
        title: "room home page",
        image: roomHomepageImage,
        link: "https://alfianw.github.io/room-homepage",
    },
    {
        title: "Email Subscription Page",
        image: emailSubscriptionImage,
        link: "https://alfianw.github.io/emailSubscriptionPage/index.html",
    },
    {
        title: "ecommerce product page",
        image: ecommerceProductImage,
        link: "https://alfianw.github.io/ecommerce-product-page-main/",
    },
    {
        title: "bandarp lastik indonesia",
        image: bandarPlastikImage,
        link: "https://alfianw.github.io/bandarplastikindonesia.github.io/",
    },
    {
        title: "bookshelf",
        image: bookshelfImage,
        link: "https://alfianw.github.io/bookshelf/",
    },
];

const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const updateMobile = () => setIsMobile(window.innerWidth <= 980);
        updateMobile();
        window.addEventListener("resize", updateMobile);
        return () => window.removeEventListener("resize", updateMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            cardsRef.current.forEach((card) => {
                if (!card) return;
                card.style.transform = "none";
                card.style.zIndex = "auto";
                card.style.opacity = 1;
            });
            return;
        }

        const wrapper = document.querySelector(".wrapper");

        if (!wrapper || !sectionRef.current) return;

        let ticking = false;

        const lerp = (a, b, t) => {
            return a + (b - a) * t;
        };

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {
                const section = sectionRef.current;

                const rect = section.getBoundingClientRect();

                const totalScroll =
                    section.offsetHeight -
                    wrapper.clientHeight;

                const progress = Math.min(
                    Math.max(-rect.top / totalScroll, 0),
                    1
                );

                const totalCards =
                    portfolioProjects.length;

                cardsRef.current.forEach((card, index) => {
                    if (!card) return;

                    const step = 1 / totalCards;

                    const start = index * step;

                    const middle = start + step * 0.5;

                    const end = start + step;

                    const rightStackX = 420;
                    const rightStackY =
                        40 + (totalCards - index) * 6;
                    const centerX = 0;
                    const leftStackX = -420;
                    const finishedIndex = index;
                    const leftStackY =
                        40 + finishedIndex * 6;

                    let x = rightStackX;
                    let y = rightStackY;

                    if (
                        progress >= start &&
                        progress <= middle
                    ) {
                        const p =
                            (progress - start) /
                            (middle - start);

                        x = lerp(
                            rightStackX,
                            centerX,
                            p
                        );

                        y = lerp(
                            rightStackY,
                            -20,
                            p
                        );
                    } else if (
                        progress > middle &&
                        progress <= end
                    ) {
                        const p =
                            (progress - middle) /
                            (end - middle);

                        x = lerp(
                            centerX,
                            leftStackX,
                            p
                        );

                        y = lerp(
                            -20,
                            leftStackY,
                            p
                        );
                    } else if (progress > end) {
                        x = leftStackX;
                        y = leftStackY;
                    }

                    let zIndex =
                        totalCards - index;

                    if (
                        progress >= start &&
                        progress <= end
                    ) {
                        zIndex = 999;
                    }

                    if (progress > end) {
                        zIndex = finishedIndex;
                    }

                    const isActive =
                        progress >= start &&
                        progress <= end;

                    if (isActive) {
                        card.classList.add(
                            "active-card"
                        );
                    } else {
                        card.classList.remove(
                            "active-card"
                        );
                    }

                    const transformValue = `
                        translate(${x}px, ${y}px)
                        rotate(-4deg)
                        scale(0.94)
                    `;

                    card.style.transform =
                        transformValue;

                    card.style.setProperty(
                        "--card-transform",
                        transformValue
                    );

                    card.style.zIndex = zIndex;
                    card.style.opacity = 1;
                });

                ticking = false;
            });
        };

        handleScroll();

        wrapper.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            wrapper.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [isMobile]);

    const sectionHeight = 100 + portfolioProjects.length * 50;

    return (
        <section
            id="portfolio"
            className="portfolio"
            ref={sectionRef}
            style={{ height: `${sectionHeight}vh` }}
        >
            <div className="portfolio-sticky">

                <div className="portfolio-intro">
                    <h2>Portfolio</h2>

                    <p>
                        A selection of projects I have completed in
                        application development,
                        system integration, and
                        financial technology.
                    </p>
                </div>

                <div className="portfolio-stack">
                    {portfolioProjects.map(
                        (project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio-card"
                                ref={(el) =>
                                    (cardsRef.current[
                                        index
                                    ] = el)
                                }
                            >
                                <div className="project-image">
                                    <img
                                        src={
                                            project.image
                                        }
                                        alt={
                                            project.title
                                        }
                                    />
                                </div>

                                <div className="project-info">
                                    <h3>
                                        {
                                            project.title
                                        }
                                    </h3>
                                </div>
                            </a>
                        )
                    )}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;