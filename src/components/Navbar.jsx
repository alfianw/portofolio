import React, { useState, useEffect } from "react";
import '../style/componentStyle/navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Me', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Contact', target: 'contact' },
];

const Navbar = () => {
    const [observedSection, setObservedSection] = useState('home');
    const [manualTarget, setManualTarget] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

const scrollToSection = (target) => {
    const wrapper = document.querySelector('.wrapper');
    const isMobile = window.innerWidth <= 980;

    if (target === 'home') {
        if (wrapper && wrapper.scrollHeight > wrapper.clientHeight) {
            wrapper.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
    }

    const element = document.getElementById(target);
    if (!element) return;

    if (isMobile && wrapper) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    const useWrapper = wrapper && wrapper.scrollHeight > wrapper.clientHeight;
    const extraOffset = target === 'about' ? element.offsetHeight * 0.25 : 0;

    if (useWrapper) {
        const wrapperRect = wrapper.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        const targetTop =
            wrapper.scrollTop +
            (elementRect.top - wrapperRect.top) +
            extraOffset;

        wrapper.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    } else {
        const targetTop =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            extraOffset;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    }
};

    const handleNavClick = (target) => {
        setMenuOpen(false);
        setManualTarget(target);
        setObservedSection(target);

        if (location.pathname === '/') {
            scrollToSection(target);
            return;
        }

        navigate('/', { state: { scrollTo: target } });
    };

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        if (location.pathname !== '/') {
            return;
        }

        const wrapper = document.querySelector('.wrapper');
        const sections = navItems
            .filter((item) => item.target !== 'home')
            .map((item) => ({
                id: item.target,
                el: document.getElementById(item.target),
            }))
            .filter((section) => section.el);

        if (!wrapper || !sections.length) {
            return;
        }

        const updateObserved = () => {
            const wrapperRect = wrapper.getBoundingClientRect();
            const wrapperTop = wrapperRect.top;
            const wrapperBottom = wrapperRect.bottom;

            let current = 'home';
            let bestDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.el.getBoundingClientRect();
                const distance = Math.abs(rect.top - wrapperTop);

                if (rect.bottom > wrapperTop && rect.top < wrapperBottom && distance < bestDistance) {
                    bestDistance = distance;
                    current = section.id;
                }
            });

            if (wrapper.scrollTop <= 20) {
                current = 'home';
            }

            if (manualTarget && current === manualTarget) {
                setManualTarget(null);
            }

            setObservedSection(current);
        };

        updateObserved();
        wrapper.addEventListener('scroll', updateObserved, { passive: true });
        window.addEventListener('resize', updateObserved);

        return () => {
            wrapper.removeEventListener('scroll', updateObserved);
            window.removeEventListener('resize', updateObserved);
        };
    }, [location.pathname, manualTarget]);

    const displayedSection = location.pathname === '/' ? (manualTarget || observedSection) : null;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <p>YAN</p>
            </div>

            <button
                type="button"
                className={`hamburger-button ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`container_button ${menuOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <button
                        key={item.target}
                        type="button"
                        className={`nav-link-button ${displayedSection === item.target ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.target)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {menuOpen && <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;
