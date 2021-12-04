import React from 'react'
import Head from 'next/head'

import PostTitle from '../../components/PostTitle'
import PostBody from '../../components/PostBody'
import Post from '../../components/Post'

import { GetStaticProps, GetStaticPaths } from 'next'

function Seed({data, content}: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post>
          <PostTitle title={data.title} author="Bogdan Covrig"/>
          <PostBody>{content}</PostBody>
      </Post>

    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const seeds = await fetch(`${process.env.STRAPI_URL}/api/seeds/`)
  const data = await seeds.json()

  return {
    paths: data.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const seed = await fetch(`${process.env.STRAPI_URL}/api/seeds?filters[slug][$eq]=${params?.slug}`)
  const data = await seed.json()
  // const categories = await fetchAPI("/categories")

  return {
    props: { 
      data: {
        ...data.data[0].attributes
      },
      content: data.data[0].attributes.body
    },
    revalidate: 1,
  }
}

export default Seed
