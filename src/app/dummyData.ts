import { Project, TaskList } from "@/app/types";
// import * as constants from "./constants";

export const projects: Project[] = [
  {
    id: "1",
    title: "Project 1",
    description: "Description 1",
    startDate: "2024-05-01",
    deadline: "2024-05-31",
    status: "pending",
  },
  {
    id: "2",
    title: "Project 2",
    description: "Description 2",
    status: "active",
    startDate: "2024-05-25",
    deadline: "2024-05-31",
  },
];

export const taskLists: TaskList[] = [
  {
    id: "1",
    title: "Todos for V1",
    status: "active",
    taskItems: [
      {
        id: "232",
        title: "Build custom select component",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "mid",
        status: "paused",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "23003",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "active",
        startDate: null,
        taggedResources: [],
      },
    ],
  },
  {
    id: "2",
    title: "Feature requests",
    status: "pending",
    taskItems: [
      {
        id: "232",
        title: "Build custom select component",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "mid",
        status: "paused",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "23003",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "pending",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "22939",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "pending",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "20282",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "pending",
        startDate: null,
        taggedResources: [],
      },

      {
        id: "29s02",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "pending",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "lwlwlw9w0",
        title: "Integrate custom select component into codebase",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "high",
        status: "pending",
        startDate: null,
        taggedResources: [],
      },
      {
        id: "29022",
        title: "Build custom select component",
        tags: [],
        deadline: new Date("2024-05-31"),
        description: "",
        estimatedCompletionTime: "",
        priority: "mid",
        status: "paused",
        startDate: null,
        taggedResources: [],
      },
    ],
  },
  ,
];
