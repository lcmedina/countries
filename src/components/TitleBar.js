import { useTheme, UpdateTheme } from "../Theme";

const TitleBar = () => {
    const darkTheme = useTheme();
    const toggleTheme = UpdateTheme();
    const themeStyles = {
        backgroundColor: darkTheme ?  'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)'
    }

    return ( 
        <div className="title" style={themeStyles}>
            <h2>Where in the world?</h2>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
     );
}
 
export default TitleBar;