import React, { useState } from 'react';

const WaitlistForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Llamada a la API para enviar el correo electrónico
        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setEmail('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default WaitlistForm;
