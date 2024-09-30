import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './add.css';

const CriarPost = () => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        content: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://forum-igris.onrender.com/post', post);
            navigate('/post');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Post</h2>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Título:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o título do post"
                                name="title"
                                value={post.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Autor:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o nome do autor"
                                name="author"
                                value={post.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Texto:</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Digite o texto do post"
                                name="content"
                                value={post.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Cadastrar
                        </button>
                        <br />
                        <button className='bt'>
                        <Link to="/post">LISTA DE POSTS</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CriarPost;
