import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './list.css';

const ListarPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://forum-igris.onrender.com/post/');
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h2 className="w-100 d-flex justify-content-center p-3">Lista de Posts</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                {posts.map((post) => (
                                    <li key={post.id} className="list-group-item">
                                        <Link to={`/post/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end p-3">
                        <Link to="/addpost" className="btn btn-primary">
                            Adicionar Post
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ListarPosts;
