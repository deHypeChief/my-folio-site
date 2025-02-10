import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Eye() {
    useEffect(() => {
        const blink = () => {
            gsap.to('.eye__ball', { scaleY: 0.1, duration: 0.1, yoyo: true, repeat: 1, repeatDelay: 0.2 });
        };

        const interval = setInterval(blink, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="eye">
            <div className="eye__ball"></div>
            <div className="eye__ball"></div>
        </div>
    );
}
