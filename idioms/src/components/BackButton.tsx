import { useNavigate } from 'react-router-dom';
import backButton from '../img/back.png';
import './style/BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <img
            className="backButton"
            src={backButton}
            alt="Back"
            onClick={() => navigate(-1)}
        />
    );
};

export default BackButton;