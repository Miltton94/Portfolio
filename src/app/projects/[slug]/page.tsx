import ProjectDetails from '@/components/pages/project/Project-details'
import ProjectSections from '@/components/pages/project/Project-sections'
import {
  ProjectPageDetailsData,
  ProjectsPageStaticData,
} from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'
import { Metadata } from 'next'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (
  slug: string,
): Promise<ProjectPageDetailsData> => {
  const query = `
    query ProjectsQuery() {
      project(where: {slug: "${slug}"}) {
        title
        description {
          raw
          text
        }
        liveProjectUrl
        githubUrl
        sections {
          title
          image {
            url
          }
        }
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    } 
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 1days
  )
}

const Project = async ({ params: { slug } }: ProjectProps) => {
  const { project } = await getProjectDetails(slug)

  console.log(slug)

  return (
    <>
      <ProjectDetails projectInfo={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export default Project

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
