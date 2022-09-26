import type { FrontmatterProps, PageProps } from "../root"

import SectionHero from "../components/section-hero"
import SectionBasic from "../components/section-basic"
import BlockFeatureGrid from "../components/block-feature-grid"
import BlockSearch from "../components/block-search?ph"

export const frontmatter: FrontmatterProps = {
  title: "Home",
}

const PageHome = (props: PageProps) => {
  return (
    <>
      <SectionBasic id="feature" heading="Feature">
        <BlockFeatureGrid>
          <a href="/test/pokemon">pokemon</a>
          <BlockSearch />
        </BlockFeatureGrid>
      </SectionBasic>
    </>
  )
}

export default PageHome
