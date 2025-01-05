import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Blog from '../contracts/Blog.json';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    const loadBlogs = async () => {
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Blog.networks[networkId];
        const contract = new web3.eth.Contract(
            Blog.abi,
            deployedNetwork && deployedNetwork.address,
        );

        const count = await contract.methods.getBlogsCount().call();
        const blogPosts = [];
        for (let i = 0; i < count; i++) {
            const blog = await contract.methods.getBlog(i).call();
            blogPosts.push(blog);
        }
        setBlogs(blogPosts);
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
            <div className="list-group">
                {blogs.map((blog, index) => (
                    <div key={index} className="list-group-item">
                        <h5>{blog[0]}</h5>
                        <p>{blog[1]}</p>
                        <small>Date: {new Date(blog[2] * 1000).toLocaleString()}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
