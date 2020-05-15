import fetch from 'node-fetch'
import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <div>{post.title}</div>
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await res.json()

  // // Get the paths we want to pre-render based on posts
  // const paths = posts.map(post => `/posts/${post.id}`)
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()
  

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post;
