import React, { useState } from 'react';
import "./WaitlistForm.css";

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
        <form className="form-waitlist" onSubmit={handleSubmit}>
            <h2>Waitlist</h2>
            <p>If your company is interested in our solution, enter your email bellow to receive further information on the launch</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Join</button>
        </form>
    );
};

export default WaitlistForm;