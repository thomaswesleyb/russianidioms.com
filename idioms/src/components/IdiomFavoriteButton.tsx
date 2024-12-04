import { Component } from 'react';
import './style/IdiomFavoriteButton.css';

interface IdiomFavoriteButtonProps {
    userId: string | undefined;
    idiomId: string | undefined;
}

interface IdiomFavoriteButtonState {
    success: boolean;
    error: string | null;
}

class IdiomFavoriteButton extends Component<IdiomFavoriteButtonProps, IdiomFavoriteButtonState> {
    constructor(props: IdiomFavoriteButtonProps) {
        super(props);
        this.state = {
            success: false,
            error: null,
        };
    }

    handleFavorite = async () => {
        const { userId, idiomId } = this.props;

        try {
            const response = await fetch('/.netlify/functions/firestore-save-idiom-handler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                    idiom_id: idiomId,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                this.setState({ success: true, error: null });
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                this.setState({ error: error.message, success: false });
            } else {
                this.setState({ error: 'An unknown error occurred', success: false });
            }
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