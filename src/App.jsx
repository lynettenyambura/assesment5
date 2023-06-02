
// import React from 'react';
import LoginForm from './component/LoginForm';
import { ThemeProvider } from './component/ThemeContext';

// import './LoginForm.css';
const theme = {
    backgroundColor: '#f5f5f5',
    color: '#333',
};

const App = () => {
    return (
        <ThemeProvider theme={theme} >
            <LoginForm />
        </ThemeProvider>
    );
};

export default App;
