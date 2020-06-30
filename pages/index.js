import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <h1 style={{ fontSize: '4em', marginBottom: 0 }}>Bookii</h1>
    <p>An online platform for books!</p>
    <Link href='/support'>
      <a style={{ display: 'block' }}>Support</a>
    </Link>
    <Link href='/privacypolicy'>
      <a style={{ display: 'block' }}>Privacy policy</a>
    </Link>
  </Layout>
)
