import React from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

const App = () => {
    const [refresh, setRefresh] = React.useState(false);

    const handleBlogAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div className="container">
            <h1 className="mt-5">Blog DApp</h1>
            <BlogForm onBlogAdded={handleBlogAdded} />
            <BlogList key={refresh} />
        </div>
    );
};

export default App;
