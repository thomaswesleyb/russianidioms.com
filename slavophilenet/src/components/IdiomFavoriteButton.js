import React, { Component } from 'react';
import './style/IdiomFavoriteButton.css';

class IdiomFavoriteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: null,
        };
    }

    handleFavorite = async () => {
        const { userId, idiomId } = this.props;

        try {
            // Make a POST request to your Netlify function
            const response = await fetch('/.netlify/functions/firestore-save-idiom-handler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId, // The Auth0 user ID
                    idiom_id: idiomId, // The ID of the idiom being favorited
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Update state to reflect success
                this.setState({ success: true, error: null });
            } else {
                // Handle any errors
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            // Set error state if request fails
            this.setState({ error: error.message, success: false });
        }
    };

    render() {
        const { success, error } = this.state;

        return (
            <div>
                <button onClick={this.handleFavorite} className="favorite-button">
                    Favorite Idiom
                </button>
                {success && <p>Idiom favorited successfully!</p>}
                {error && <script>{`alert('${error}')`}</script>}
            </div>
        );
    }
}

export default IdiomFavoriteButton;
