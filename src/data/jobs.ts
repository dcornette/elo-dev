import { Job } from "../interfaces/rating";

export const JOBS: Job[] = [
    {
        position: 1,
        title: "Développeur Back-end",
        elorating: "2324",
        topTechnoLabel: [
            {
                id: "012c27db-e84e-4b40-b419-fd46ee5f1b31",
                title: "Java"
            },
            {
                id: "7728fff5-56d1-40ab-8977-9a7784dc84ee",
                title: "Node.js"
            },
            {
                id: "f4d7852e-dabb-4265-98d6-229c7bada6f8",
                title: "NestJS"
            },
        ],
        trend: "up",
        changePercentage: "+41"
    },
    {
        position: 2,
        title: "Développeur FullStack",
        elorating: "2248",
        topTechnoLabel: [
            {
                id: "7b00e3fe-16ba-4a27-9f7d-9e443c7b3f97",
                title: "React"
            },
            {
                id: "b3db6eb1-c677-4304-b697-ee64a043ce20",
                title: "Node.js"
            },
            {
                id: "440c5d07-dc4c-4fe9-b12c-fce3c0180296",
                title: "NestJS"
            },
        ],
        trend: "up",
        changePercentage: "+58"
    },
    {
        position: 3,
        title: "Développeur Front-end",
        elorating: "2231",
        topTechnoLabel: [
            {
                id: "4ea3af21-cda6-467c-922c-5daaf229a86e",
                title: "React"
            },
            {
                id: "c822d12d-3b05-4f95-acbc-d0f387232429",
                title: "Vue.js"
            },
            {
                id: "cb8d5f0a-2e70-405a-bf2f-5833e30abaa8",
                title: "Angular"
            },
        ],
        trend: "down",
        changePercentage: "-23"
    },
    {
        position: 4,
        title: "Data Engineer",
        elorating: "2187",
        topTechnoLabel: [
            {
                id: "76512009-c34a-4d0a-8c16-9eba8dea367d",
                title: "Python"
            },
            {
                id: "7cc7fb1e-3344-4cdb-99ad-47b1c1a01a18",
                title: "PowerBI"
            },
            {
                id: "4a13426e-4003-496e-99fd-6029427a0cf2",
                title: "Databricks"
            },
        ],
        trend: "up",
        changePercentage: "+78"
    },
    {
        position: 5,
        title: "DevOps",
        elorating: "2111",
        topTechnoLabel: [
            {
                id: "04b217a8-d239-4ce1-b97d-2a414949dd8b",
                title: "AWS Cloud"
            },
            {
                id: "7ad0e056-a072-4e58-821b-2a339f58179a",
                title: "Kubernetes"
            },
            {
                id: "d65509be-fd69-44a9-84b6-37463bb07d7f",
                title: "Docker"
            },
        ],
        trend: "down",
        changePercentage: "-87"
    }
];