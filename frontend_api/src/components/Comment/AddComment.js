import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddComment = () => {
    const { postId } = useParams(); // Obtendo o postId da URL
    const [comment, setComment] = useState({
        content: '',
        author: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://backend-elite-bwe7czaja7aadrfr.eastus-01.azurewebsites.net/comment/${postId}/comments`, {
                postId: postId, // Passando o postId junto com o novo comentário
                content: comment.content,
                author: comment.author
            });
            navigate(`/post/${postId}`); // Navegar de volta para a página de visualização do post
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Comentário</h2>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Conteúdo:</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Digite o conteúdo do comentário"
                                name="content"
                                value={comment.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Autor:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o nome do autor"
                                name="author"
                                value={comment.author}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Adicionar Comentário
                        </button>
                        <br />
                        <Link to={`/post/${postId}`}>Voltar para o Post</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddComment;

