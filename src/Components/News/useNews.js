import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { lastUpdate, response } = localStorage;

        if (lastUpdate && response) {
            const currentTime = new Date().getTime();
            const diff = new Date(currentTime) - new Date(+lastUpdate);
            const diffMinutes = diff / (1000 * 60);
            const minimumDiff = 10;

            if (diffMinutes <= minimumDiff) {
                setPosts(JSON.parse(response));
            } else {
                getPostsAndSave();
            }
        } else {
            getPostsAndSave();
        }
    }, []);

    const getPostsAndSave = () => {
        (async() => {
            const posts = await api.getPosts();
          
            setIsLoading(false);
            localStorage.clear();
            localStorage.setItem('lastUpdate', new Date().getTime());
            localStorage.setItem('response', JSON.stringify(posts));
            setPosts(posts);
        })();
    }


    return { posts, isLoading };
}