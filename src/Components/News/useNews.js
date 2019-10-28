import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const posts = await api.getPosts();
            setIsLoading(false);
            setPosts(posts);
        })();
    }, []);


    return { posts, isLoading };
}