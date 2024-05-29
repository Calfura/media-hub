import "../styles/Footer.css";

export default function(){
    
    return (
        // General footer located at the bottem of the page.
        <footer>

            {/* Having a copyright and social media side section to the bottem left */}
            <div id="socialMedia">
                <h6>Copyright (C) 2024 Calfura</h6>
                <h6><a href="calfura@example-email.com"><b>Contact us!</b></a></h6>
            </div>

            {/* Have fake app install buttons, that if worked would redirect to the app store to install */}
            <div id="appInstall">

            </div>


        </footer>
    )
}