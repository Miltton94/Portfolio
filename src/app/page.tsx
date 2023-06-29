import HeroSection from '@/components/pages/home/Hero-section'
import HighlightedProjects from '@/components/pages/home/Highlighted-projects'
import KnownTechs from '@/components/pages/home/Known-techs'
import { HomePageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

export const metadata = {
  title: 'Dev Milton',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        iconSvg
        url
      } 
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        pageThumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        description {
          raw
        }
        githubUrl
        liveProjectUrl
        technologies {
          name
        }
      }
     
    }
  }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 1 day
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
    </>
  )
}
