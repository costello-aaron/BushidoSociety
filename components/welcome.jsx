import React, { useState, useEffect } from "react";

export default function WelcomeMessage() {
    const messages = [
        "Welcome to Bushido Society"
    ];
    
    const [text, setText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (charIndex < messages[messageIndex].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + messages[messageIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            setFinished(true); // Mark as finished so it stops
        }
    }, [charIndex, messageIndex]);

    return (
        <div className="text-white text-3xl font-bold text-center">
            {text}
            {!finished && <span className="animate-blink">|</span>}
        </div>
    );
}
