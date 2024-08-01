import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts.js'

function Blog() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const posts = postsQuery.data ?? []

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}> ttitle: {post.title} </div>
      ))}
    </div>
  )
}

export default Blog
