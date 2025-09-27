import useLocalStorage from './useLocalStorage'
import './theme.css'
function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme','dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark':'light')
    }

    console.log(theme)
    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World</p>
                <button onClick={handleToggleTheme}>Change Team</button>
            </div>
        </div>
    );
}

export default LightDarkMode