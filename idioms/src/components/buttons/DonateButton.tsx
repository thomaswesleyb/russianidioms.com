import donateButtonImage from '../../img/donate.png';
import '../style/DonateButton.css';

const DonateButton = () => {
    return (
        <div className="donateButtonContainer">
            <div className="donateButton">
                <a href="https://www.razomforukraine.org/donate/" target="_blank" rel="noopener noreferrer">
                    <img
                        className="donateButton"
                        src={donateButtonImage}
                        alt="Donate"
                    />
                </a>
            </div>
        </div>
    );
};

export default DonateButton;