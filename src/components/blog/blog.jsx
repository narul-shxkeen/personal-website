import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import BlogCard from "../assets/blogCard.jsx";
import Particles from '../../particles.jsx';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const { data, error } = await supabase
          .from('Blog Posts') // Use double quotes for table name with spaces
          .select('*');
  
        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          // Sort posts by created_at in descending order
          const sortedPosts = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setPosts(sortedPosts);
        }
      };
  
      fetchPosts();
    }, []);

    const blogData = selectedPost ? selectedPost.blog_data.split('\n').map((paragraph, index) => (
      <p key={index} className='poppins-regular text-sm md:text-base text-[#574B60]'>
        {paragraph}
      </p>
    )) : null;

    return (
      <div className="mx-auto w-[95vw] p-4">
        <Particles addParticles={false}/>
        {selectedPost ? (
          <div className="mb-4 p-4 border rounded-xl shadow bg-slate-100 flex flex-col gap-2 overflow-hidden">
            <h2 className="text-2xl sm:text-4xl poppins-semibold text-[#574B60]">{selectedPost.title}</h2>
            <h4 className="text-lg sm:text-xl poppins-extralight text-[#574B60]">{selectedPost.subTitle}</h4>
            <p className="text-base sm:text-lg text-[#574B60] poppins-regular">{new Date(selectedPost.created_at).toLocaleString()}</p>
            <hr className="relative right-5 w-[110%] border-1 border-[#011627]"/>
            {blogData}
            <button onClick={() => setSelectedPost(null)} className="w-40 mt-4 p-2 bg-[#80a8bd] text-white rounded-lg">Back to Posts</button>
          </div>
        ) : (
          posts.map((post) => (
            <button key={post.id} onClick={() => setSelectedPost(post)} className="flex flex-col gap-2 w-full text-left mb-4 p-4 border rounded-xl shadow bg-slate-100">
              <h2 className="text-2xl sm:text-4xl poppins-semibold text-[#574B60]">{post.title}</h2>
              <h4 className="text-lg sm:text-xl poppins-extralight text-[#574B60]">{post.subTitle}</h4>
              <p className="text-sm sm:text-base text-[#574B60]">{new Date(post.created_at).toLocaleDateString()}</p>
            </button>
          ))
        )}
      </div>
    );
};

export default Blog;
