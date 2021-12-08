import { ReactChild } from "react";

type PostProps = {
  children: ReactChild | ReactChild []
}

const Post = ({children}: PostProps) => {
  return (
    <>
      <main className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <article className="prose sm:prose-lg lg:prose-xl xl:prose-xl 2xl:prose-2xl mx-auto">
          {children}
        </article>
      </main>
    </>
  );
};
  
export default Post;