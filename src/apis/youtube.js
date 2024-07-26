import axios from 'axios';

const KEY = 'AIzaSyC1kOEWZIAPch-yOGapN41wpQ6mYCH0bH8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults:15,
        key: KEY

    }
})