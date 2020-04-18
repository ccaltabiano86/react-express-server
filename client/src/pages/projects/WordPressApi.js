import React, { useEffect, useState } from 'react';
    
export default function WordPressApi() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://obeliskdigital.com.au/client_preview/wordpress/wp-json/wp/v2/posts?per_page=100');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, [])

   const articleStyle = {
       marginBottom: '50px' 
   }

  return (
    <section>
        <div className='col-md-12'>
            <h1>WordPress API Project</h1>
            <p>The data below is fetched from <code>https://obeliskdigital.com.au/client_preview/wordpress/</code> using the WordPress RESTful API.</p>
            {posts.map((post, index) => (
                <article key={index} style={articleStyle}>
                    <h3 dangerouslySetInnerHTML={ {__html:post.title.rendered}}/>
                    {/*<div dangerouslySetInnerHTML={ {__html:post.content.rendered}}/>*/}
                    <div dangerouslySetInnerHTML={ {__html:post.excerpt.rendered}}/>
                    <p>URL: <a href={post.link}>{post.link}</a></p>
                </article>
            ))}
        </div>
     </section>
 );
}