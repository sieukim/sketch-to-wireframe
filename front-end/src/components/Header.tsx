import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export const Header = () => {
    return (
        <header>
            <p className="header-title">Sketch to Wireframe</p>
            <div className="header-icons">
                <a href="mailto:watasieun@gmail.com"><EmailIcon/></a>
                <a href="https://www.github.com/sieukim"><GitHubIcon/></a>
            </div>
        </header>
    )
}