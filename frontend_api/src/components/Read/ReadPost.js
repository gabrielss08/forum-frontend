import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './read.css';

const ReadPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const navigate = useNavigate();

    const fetchComments = () => {
        axios.get(`https://backend-elite-bwe7czaja7aadrfr.eastus-01.azurewebsites.net/comment/${id}/comments`) 
            .then(res => {
                setComments(res.data);
            })
            .catch(err => console.log(err));
    };
    
    useEffect(() => {
        axios.get(`https://backend-elite-bwe7czaja7aadrfr.eastus-01.azurewebsites.net/post/${id}`)
            .then(res => {
                setPost(res.data);
                fetchComments();
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleAddComment = () => {
        navigate(`/comment/${id}/comments`);
    };

    const handleDeletePost = () => {
        axios.delete(`https://backend-elite-bwe7czaja7aadrfr.eastus-01.azurewebsites.net/post/${id}`)
            .then(() => {
                navigate(`/post/`);
            })
            .catch(err => console.log(err));
    };

    const handleDeleteComment = (commentId) => {
        axios.delete(`https://backend-elite-bwe7czaja7aadrfr.eastus-01.azurewebsites.net/comment/${commentId}`)
            .then(() => {
                fetchComments(); // Atualiza os comentários após a exclusão
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h2 className="w-100 d-flex justify-content-center p-3">{post.title}</h2>
                    <div className="post-meta">
                        <span className="author">Autor: {post.author}</span>
                        <span className="date">Data de Criação: {post.createdAt}</span>
                    </div>
                    <div className="row">
                        <div className="col-md-12 post-content">
                            <p>{post.content}</p>
                            <Link to={`/updatepost/${post.id}`} className="btn btn-info mx-2">Editar</Link>
                            <button onClick={handleAddComment} className="btn btn-primary mx-2">Adicionar Comentário</button>
                            <button onClick={handleDeletePost} className="btn btn-danger mx-2">Apagar</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <h3>Comentários</h3>
                            <ul>
                                {comments.map(comment => (
                                    <li key={comment.id}>
                                        <p>Autor: {comment.author}</p>
                                        <p>Data de Criação: {comment.createdAt}</p>
                                        <p>{comment.content}</p>
                                        <button 
                                            onClick={() => handleDeleteComment(comment.id)} 
                                            className='btn btn-danger mx-2'>
                                            Apagar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {/* Botão para voltar para a rota /post */}
            <div className="container">
                <Link to="/post" className="btn btn-secondary mt-3">
                    Voltar para Lista de Posts
                </Link>
            </div>
        </div>
    );
};

export default ReadPost;
