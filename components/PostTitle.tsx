type PostTitleProps = {
  title: string,
  author: string
}

const PostTitle = ({title, author}: PostTitleProps) => (
    <>
      <h1 className="post-title">{title}</h1>
      <p className="post-author">Written by {author}. Started on 24 Aug. Updated on 26 Aug</p>
    </>
  );
  
export default PostTitle;