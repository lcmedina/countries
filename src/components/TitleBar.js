import { useTheme, UpdateTheme } from "../Theme";
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const TitleBar = () => {
    const darkTheme = useTheme();
    const toggleTheme = UpdateTheme();
    const themeStyles = {
        backgroundColor: darkTheme ?  'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : ' hsl(200, 15%, 8%)'
    }

    return ( 
        <div className="title" style={themeStyles}>
            <h2>Where in the world?</h2>
            <Button onClick={toggleTheme} style={themeStyles}>{darkTheme ? <Brightness7Icon/> : <Brightness4Icon/>}</Button>
        </div>
     );
}
 
export default TitleBar;