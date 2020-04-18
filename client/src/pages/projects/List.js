import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <section>
        <div className='col-md-12'>
          <h1>Express API Project</h1>
          <p>The lsit of items below is fetched from the <code>express</code> server running on port 5000. This is a simple list located in the <code>index.js</code> file to demonstrate the fetch function.</p>
          {/* Check to see if any items are found*/}
          {list.length ? (
            <div>
              {/* Render the list of items */}
              {list.map((item, key) => {
                return(
                  <div key={key}>
                    {item}
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p>No List Items Found</p>
            </div>
          )
        }
        </div>
      </section>
    );
  }
}

export default List;