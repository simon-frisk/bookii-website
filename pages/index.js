import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <h1 style={{ fontSize: '4em', marginBottom: 0 }}>Bookii</h1>
    <p>An online platform for finding, sharing and reading books!</p>
    <Link href='/privacypolicy'>Privacy policy</Link>
  </Layout>
)
