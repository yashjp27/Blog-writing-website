import React, { useState } from 'react';
import Web3 from 'web3';
import Blog from '../contracts/Blog.json';

const BlogForm = ({ onBlogAdded }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Blog.networks[networkId];
        const contract = new web3.eth.Contract(
            Blog.abi,
            deployedNetwork && deployedNetwork.address,
        );

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        await contract.methods.createBlog(author, content).send({ from: accounts[0] });
        onBlogAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <textarea
                    className="form-control"
                    placeholder="Blog Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Create Blog</button>
        </form>
    );
};

export default BlogForm;
