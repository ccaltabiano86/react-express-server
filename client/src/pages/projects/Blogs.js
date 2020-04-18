import React, { Component } from 'react';

class Blogs extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      blogs: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getBlogs();
  }

  // Retrieves the data from db (Remember to run async!)
  getBlogs = async () => {
    //fetch('/api/getBlogs')
    fetch('/api/getBlogs')
    .then(res => res.json())
    .then(blogs => this.setState({ blogs }))
  }

  render() {
    const { blogs } = this.state;

    return (
      <section>
        <div className='col-md-12'>
            <h1>MySQL Blogs Project</h1>
            <p>The list below is fetched from a local MySQL database</p>
            {/* Check to see if any items are found*/}
            {blogs.length ? (
            <div>
                <ul>
                    {/* Render the list of items */}
                    {blogs.map((blog, key) => {
                    return(
                        <li key={key} className="list-group-item align-items-center">
                            <a href={blog.path}>{blog.title}</a>
                            <span className="badge badge-success badge-pill float-right m-1">Path: {blog.path}</span>
                            <span className="badge badge-info badge-pill float-right m-1">ID: {blog.id}</span>
                        </li>
                    );
                    })}
                </ul>
            </div>
            ) : (
            <div>
                <p>No Blogs Found</p>
            </div>
            )
        }
        </div>
      </section>
    );
  }
}

export default Blogs;