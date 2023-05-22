import { Post } from '../interfaces'
interface Props{
    post:Post
}
const placeholderImg='https://placehold.co/600x400?text=No+Image'
const Card = ({post}:Props) => {
  return (
    <article className="article" key={post.title}>
                <a href={post.link} target="_blank">
            <figure className="article-figure">
                <img src={post.image_url ? post.image_url : placeholderImg} alt={post.title} className="article-img"/>
            </figure>
            <div className="article-info">
                <h3 className="article-category">{post.category[0]}</h3>
                <h2 className="article-title">{post.title}</h2>
                <p className="article-creator">{post.creator ? `por: ${post.creator}` : null}</p>
            </div>
            </a>
        </article>
  )
}

export default Card