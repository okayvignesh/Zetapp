import React, { useState, useRef } from 'react';

const Card = ({ children, ...rest }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const requestRef = useRef();

    const handleMouseMove = (e) => {
        cancelAnimationFrame(requestRef.current);

        requestRef.current = requestAnimationFrame(() => {
            const card = e.target;
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const rotateX = Math.max(Math.min((e.clientY - centerY) / 50, 50), -50);
            const rotateY = Math.max(Math.min((e.clientX - centerX) / 50, 50), -50);

            setRotateX(rotateX);
            setRotateY(rotateY);
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            className={`movecard ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                willChange: 'transform',
                transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.1 : 1}, ${isHovered ? 1.1 : 1}, 1)`
            }}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Card;
