import { Link } from "react-router-dom"
import moonLogo from "/Moon.png"


const Header = () => {
    return (
        <div>
            <Link to="/">
                <img src={moonLogo} className="top-left-icon" alt="Joy's Logo" />
            </Link>
        </div>
    )
}

export default Header