/* eslint-disable */
export interface TopTechnoLabel {
  id: string,
  title: string
}

export interface Job {
  position: number,
  title: string,
  elorating: string,
  topTechnoLabel: TopTechnoLabel[],
  trend: string,
  changePercentage: string
}

export interface MainJobRatingProps {
  job: Job
}