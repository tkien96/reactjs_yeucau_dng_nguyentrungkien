
function PostDetailRichText({
  text
}){
  return (
    <div className="rte" dangerouslySetInnerHTML={{__html: text}}></div>
  )
}

export default PostDetailRichText