import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type PostBodyProps = {
  children: string
}

const PostBody = ({children}: PostBodyProps) => {
  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </>
  );
};
  
export default PostBody;