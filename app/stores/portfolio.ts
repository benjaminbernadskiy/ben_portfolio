import { defineStore } from "pinia";
import portfolioData from "../data/portfolio.json";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    personal: portfolioData.personal,
    experience: portfolioData.experience,
    projects: portfolioData.projects,
    githubRepos: portfolioData.github_repos,
  }),
  getters: {
    caseStudyProjects: (state) =>
      state.projects.filter((project) => project.caseStudy?.enabled),
    projectBySlug: (state) => (slug: string) =>
      state.projects.find((project) => project.slug === slug),
  },
});
