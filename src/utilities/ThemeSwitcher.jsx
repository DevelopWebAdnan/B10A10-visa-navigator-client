import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    // useEffect(() => {
    // const isDarkMode = localStorage.getItem('darkMode') === 'true';
    // setDarkMode(isDarkMode);
    // }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        // const isDarkMode = localStorage.getItem('darkMode') === 'true';
        // setDarkMode(isDarkMode);
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Fade cascade damping={0.3}>
        <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'
                } ${darkMode ? 'text-gray-900' : 'text-white'
                } transition-colors duration-300`}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        </Fade>
    );
};

export default ThemeSwitcher;