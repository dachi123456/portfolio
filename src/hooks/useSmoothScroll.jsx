import { useCallback } from 'react';

const useSmoothScroll = () => {
    const smoothScrollToSection = useCallback((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            section.style.opacity = '1';
        }, 500);
    }, []);

    return smoothScrollToSection;
};

export default useSmoothScroll;