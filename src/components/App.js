import React from 'react';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onVideoSelect = (video) => {
        this.setState ({selectedVideo:video})
    }
    

    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect ={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;