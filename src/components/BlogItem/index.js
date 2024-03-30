// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id,title, imageUrl, avatarUrl, topic, author} = eachBlog
  return (
    <Link to={`/blogs/${id}`}>
    <li className="list-item">
      <img className="item-image" src={imageUrl} alt={title} />
      <div className="item-content">
        <p className="sub-title">{topic}</p>
        <h1 className="title">{title}</h1>
        <div className="avatar-content">
          <img className="avatar-icon" src={avatarUrl} alt="avatar" />
          <p className="sub-title">{author}</p>
        </div>
      </div>
    </li>
    </Link>
  )
}

export default BlogItem
