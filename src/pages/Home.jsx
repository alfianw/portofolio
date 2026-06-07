import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ParallaxHeader from "../components/ParallaxHeader";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state?.scrollTo) {
            return;
        }

        const wrapper = document.querySelector('.wrapper');
        const target = location.state.scrollTo;

        if (target === 'home') {
            if (wrapper) {
                wrapper.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            const targetEl = document.getElementById(target);
            if (targetEl) {
                const isMobile = window.innerWidth <= 980;
                if (wrapper && isMobile) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (wrapper) {
                    const offset = target === 'about' ? 340 : 90;
                    const wrapperRect = wrapper.getBoundingClientRect();
                    const elementRect = targetEl.getBoundingClientRect();
                    const top = wrapper.scrollTop + (elementRect.top - wrapperRect.top) - offset;
                    wrapper.scrollTo({ top, behavior: 'smooth' });
                } else {
                    const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            } else if (wrapper) {
                wrapper.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        navigate(location.pathname, { replace: true, state: null });
    }, [location, navigate]);

    return (
        <div className="home" id="home">
            <ParallaxHeader />
        </div>
    );
};

export default Home;