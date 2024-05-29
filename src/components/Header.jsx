import "../styles/Header.css";
import Dropdown from "./Dropdown";

export default function(){
    
    return (
        <header>

            <link 
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" 
                rel="stylesheet"
                />

            {/* MockLogo. Will change to exmaple image */}
            <div id="mockLogo">
                MockLogo
            </div>
            <div>
                <Dropdown />
            </div>
        </header>
    )
}
