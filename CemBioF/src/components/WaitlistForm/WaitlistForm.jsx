import React, { useState } from 'react';
import "./WaitlistForm.css";

const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Obtener la URL del backend desde la variable de entorno
        const backendURL = process.env.VITE_BACKEND_URL;

        // Llamada a la API para enviar el correo electrónico
        fetch(`${backendURL}/api/subscribe`, {
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
            setMessage(data.message); // Establecer el mensaje del servidor
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessage('An unexpected error occurred. Please try again later.'); // Establecer un mensaje de error genérico
        });
    };

    return (
        <form className="form-waitlist" onSubmit={handleSubmit}>
            <h2>Waitlist</h2>
            <p>If your company is interested in our solution, enter your email below to receive further information on the launch</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Join</button>
            {message && <p className={message.startsWith('Error') ? 'error' : 'success'}>{message}</p>}
        </form>
    );
};

export default WaitlistForm;
