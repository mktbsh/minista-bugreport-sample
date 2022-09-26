import type { MinistaLocation } from "minista"

import { Head } from "minista"
//import "highlight.js/styles/nord.css"
//import "highlight.js/styles/github-dark-dimmed.css"

import "./root.css"
import pjt from "../project.json"
import AppLayout from "./components/app-layout"

export type FrontmatterProps = {
  title?: string
  layout?: string
  noindex?: boolean
  draft?: boolean
}

type RootProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
  children: React.ReactNode
}

export type PageProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
}

const Root = ({ location, frontmatter, children }: RootProps) => {
  const site = pjt.site
  const siteTitle = site.title
  const siteDescription = site.description
  const siteUrl = site.url
  const title = frontmatter?.title
    ? `${frontmatter?.title} - ${siteTitle}`
    : siteTitle
  const ogUrl = `${siteUrl}${location.pathname}`
  const ogImage = siteUrl + "/assets/images/ogp.png"
  const ogType = location.pathname === "/" ? "website" : "article"
  const twitterCard = "summary_large_image"
  const twitterId = site.twitter?.id ? `@${site.twitter.id}` : ""
  const noindex = frontmatter?.noindex || false
  const appleTouchIcon = "/assets/images/apple-touch-icon.png"
  const favicon = "/assets/images/favicon.png"
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={ogType} />
        <meta name="twitter:card" content={twitterCard} />
        {twitterId && <meta name="twitter:creator" content={twitterId} />}
        {noindex && <meta name="robots" content="noindex" />}
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        <link rel="icon" href={favicon} />
      </Head>
      <AppLayout>{children}</AppLayout>
    </>
  )
}

export default Root
