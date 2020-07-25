import React, {Component} from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)

        this.state = {
            posts : [],
            errorMessage : ""
        }
    }

// Executed only one time in components lifetime - in the beginning 
componentDidMount(){
    // endpoint of data
   // axios.get("https://jsonplaceholder.typicode.com/posts_")
   axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response)
        this.setState({
            posts : response.data
        })
    })
    .catch(error => {
        console.log(error);

        this.setState({
            errorMessage: "Error in retriving data GET data !!"
        })
    })
}

    render(){
        const {posts, errorMessage} = this.state
        return( <div>
            List of posts
            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>) :
                null
            }
            {

            errorMessage? <div>{errorMessage}</div> : null
            }
        </div>
        )
    }
}

export default PostList