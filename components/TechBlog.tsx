'use client'

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Define the types for the Dev.to article
interface Article {
    id: number;
    title: string;
    url: string;
    description: string;
    readable_publish_date: string;
    tag_list: string[];
    user: {
        name: string;
        username: string;
        profile_image: string;
    };
    body_markdown?: string; // Full content
}

const TechBlog: React.FC = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const articleId = 150589; // The ID of the article we want to fetch

    useEffect(() => {
        const fetchArticleById = async (id: number) => {
            try {
                const response = await fetch(`https://dev.to/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching article: ${response.statusText}`);
                }
                const data: Article = await response.json();
                setArticle(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticleById(articleId);
    }, [articleId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {article ? (
                <div>
                    <h1>{article.title}</h1>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read on Dev.to
                    </a>
                    <p>{article.description}</p>
                    {/* <p>Tags: {article.tag_list.join(', ')}</p> */}
                    <p>Published on: {article.readable_publish_date}</p>
                    <div>
                        <img src={article.user.profile_image} alt={article.user.name} width="50" />
                        <span>{article.user.name}</span>
                        <span>@{article.user.username}</span>
                    </div>
                    <div>
                        <h3>Content:</h3>
                        {article.body_markdown ? (
                            <ReactMarkdown>{article.body_markdown}</ReactMarkdown>
                        ) : (
                            <p>No content available.</p>
                        )}
                    </div>
                </div>
            ) : (
                <div>No article found.</div>
            )}
        </div>
    );
};

export default TechBlog;
