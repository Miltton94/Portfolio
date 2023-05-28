import { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech, Project, ProjectsPageInfo } from './projects'

export type Socials = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Socials[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
}

export type ProjectsPageData = {
  projects: ProjectsPageInfo[]
}

export type ProjectPageDetailsData = {
  project: Project
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}
