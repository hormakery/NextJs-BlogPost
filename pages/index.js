import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import Post from '../components/post/Post'


export default function Home({ posts }){
  return (
    <div>
      <Head>
      <title>My Blog</title>
     </Head>

     <div className="posts">
      {posts.map((post, index)=>(
       <Post key={index} post={post} />
      ))}
     </div>

    </div>
  )
}

export async function getStaticProps() {
  // this gets files from the post directory

  const files= fs.readdirSync (path.join("posts"))
  // console.log(files)

  // get slug and frontmatter from post

  const posts = files.map(filename=>{
    // create slug
    const slug = filename.replace('.md', ' ')
    // get frontmatter
    const markdownWithMeta= fs.readFileSync(path.join('posts',filename), 'utf-8')
    
    const {data: frontmatter}= matter(markdownWithMeta)
  
    return{
      slug,
      frontmatter,
    }
  })
  console.log(posts)


  return{
  
    props:{
       posts: posts.sort(sortByDate)
    }
  }

}
 
