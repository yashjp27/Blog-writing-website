// import React, { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     creatorName: '',
//     dateTime: new Date().toISOString().slice(0, 16),
//   });
  
//   // Define posts and setPosts to hold the list of blog posts
//   const [posts, setPosts] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { title, description, creatorName, dateTime } = formData;

//     if (title && description && creatorName && dateTime) {
//       const newPost = {
//         title,
//         description,
//         creatorName,
//         createdAt: dateTime,
//       };
      
//       // Append the new post to posts
//       setPosts((prevPosts) => [...prevPosts, newPost]);
      
//       // Clear the form
//       setFormData({
//         title: '',
//         description: '',
//         creatorName: '',
//         dateTime: new Date().toISOString().slice(0, 16),
//       });
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.formContainer}>
//       <h2 style={styles.heading}>Create Blog Post</h2>
//       <div style={styles.inputGroup}>
//         <label htmlFor="title" style={styles.label}>Blog Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label htmlFor="description" style={styles.label}>Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           rows="5"
//           required
//           style={styles.textarea}
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label htmlFor="creatorName" style={styles.label}>Creator's Name</label>
//         <input
//           type="text"
//           id="creatorName"
//           name="creatorName"
//           value={formData.creatorName}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>
//       <div style={styles.inputGroup}>
//         <label htmlFor="dateTime" style={styles.label}>Creation Date & Time</label>
//         <input
//           type="datetime-local"
//           id="dateTime"
//           name="dateTime"
//           value={formData.dateTime}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//       </div>
//       <button type="submit" style={styles.button}>Submit Blog</button>
//     </form>
//   );
// }

// // Styles as provided before
// const styles = {
//   formContainer: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   inputGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '16px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '16px',
//     resize: 'vertical',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#4CAF50',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default App;
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    creatorName: '',
    dateTime: new Date().toISOString().slice(0, 16),
  });

  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, creatorName, dateTime } = formData;

    if (title && description && creatorName && dateTime) {
      const newPost = {
        title,
        description,
        creatorName,
        createdAt: dateTime,
      };

      setPosts((prevPosts) => [...prevPosts, newPost]);

      setFormData({
        title: '',
        description: '',
        creatorName: '',
        dateTime: new Date().toISOString().slice(0, 16),
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.appContainer}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <h2 style={styles.heading}>Create Blog Post</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="creatorName" style={styles.label}>Creator's Name</label>
          <input
            type="text"
            id="creatorName"
            name="creatorName"
            value={formData.creatorName}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="dateTime" style={styles.label}>Creation Date & Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit Blog</button>
      </form>

      {/* Display the list of posts */}
      <BlogList posts={posts} />
    </div>
  );
}

// Component to display list of blog posts
function BlogList({ posts }) {
  return (
    <div style={styles.listContainer}>
      <h2 style={styles.listHeading}>Blog Posts</h2>
      {posts.length === 0 ? (
        <p style={styles.noPostsMessage}>No blog posts yet.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} style={styles.postCard}>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postDescription}>{post.description}</p>
            <p style={styles.postMeta}>
              <strong>Creator:</strong> {post.creatorName} | <strong>Created at:</strong> {post.createdAt}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

// Styles
const styles = {
  appContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  formContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    resize: 'vertical',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  listContainer: {
    maxWidth: '600px',
    margin: '20px auto',
  },
  listHeading: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  noPostsMessage: {
    textAlign: 'center',
    color: '#777',
  },
  postCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  postTitle: {
    fontSize: '20px',
    color: '#4CAF50',
  },
  postDescription: {
    fontSize: '16px',
    color: '#555',
    marginTop: '8px',
    marginBottom: '8px',
  },
  postMeta: {
    fontSize: '14px',
    color: '#777',
  },
};

export default App;
