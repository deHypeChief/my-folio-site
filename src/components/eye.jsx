import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Eye({ height = 20, raduis = 6 }) { // Default height is 100px
    useEffect(() => {
        const blinkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });

        // Three quick blinks in a row
        blinkTimeline
            .fromTo('.eye__ball', { scaleY: 1 }, { scaleY: 0.1, duration: 0.1, yoyo: true, repeat: 1 })
            .fromTo('.eye__ball', { scaleY: 1 }, { scaleY: 0.1, duration: 0.1, yoyo: true, repeat: 1, delay: 0.2 })
    }, []);

    return (
        <div className="eye">
            <div className="eye__ball" style={{ height: `${height}px`, width: `${height}px`, borderRadius: `${raduis}px` }}></div>
            <div className="eye__ball" style={{ height: `${height}px`, width: `${height}px`, borderRadius: `${raduis}px` }}></div>
        </div>
    );
}
