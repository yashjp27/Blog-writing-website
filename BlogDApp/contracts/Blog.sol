// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blog {
    struct BlogPost {
        string author;
        string content;
        uint256 createdAt;
    }

    BlogPost[] public blogs;

    function createBlog(string memory _author, string memory _content) public {
        BlogPost memory newBlog = BlogPost({
            author: _author,
            content: _content,
            createdAt: block.timestamp
        });
        blogs.push(newBlog);
    }

    function getBlog(uint256 _index) public view returns (string memory, string memory, uint256) {
        require(_index < blogs.length, "Blog post does not exist.");
        BlogPost memory blog = blogs[_index];
        return (blog.author, blog.content, blog.createdAt);
    }

    function getBlogsCount() public view returns (uint256) {
        return blogs.length;
    }
}