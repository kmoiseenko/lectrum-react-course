import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const { lastUpdate, response } = localStorage;

        lastUpdate && response ? calcDiff(lastUpdate, response) : getPostsAndSave();
    }, []);

    const calcDiff = (lastUpdate, response) => {
        const currentTime = new Date().getTime();
        const diff = new Date(currentTime) - new Date(parseInt(lastUpdate));
        const diffMinutes = diff / (1000 * 60);
        const minimumDiff = 10;

        if (diffMinutes <= minimumDiff) {
            setPosts(JSON.parse(response));
            setLoading(false);
        } else {
            getPostsAndSave();
        }
    }

    const getPostsAndSave = () => {
        (async () => {
            const posts = await api.getPosts();

            setLoading(false);
            localStorage.setItem('lastUpdate', Date.now());
            localStorage.setItem('response', JSON.stringify(posts));
            setPosts(posts);
        })();
    }


    return { posts, isLoading };
}