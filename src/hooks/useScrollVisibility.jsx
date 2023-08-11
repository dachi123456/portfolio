import { useState, useEffect } from 'react';

const useScrollVisibility = (targetId, threshold = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight * threshold;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll()
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [targetId, threshold]);

    return isVisible;
};

export default useScrollVisibility;