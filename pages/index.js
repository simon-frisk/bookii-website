import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Button from '../components/Button'

export default () => (
  <Layout>
    <h1 style={{ fontSize: '4em', marginBottom: 0 }}>Bookii</h1>
    <a
      href='https://apps.apple.com/us/app/bookii/id1519841472?mt=8'
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        background:
          'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2020-07-14&kind=iossoftware&bubble=ios_apps) no-repeat',
        width: 135,
        height: 40,
      }}
    />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href='/support'>
        <Button>Support</Button>
      </Link>

      <Link href='/privacypolicy'>
        <Button>Privacy policy</Button>
      </Link>
    </div>
  </Layout>
)
