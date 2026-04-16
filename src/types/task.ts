export type PriorityType = 1 | 2 | 3 | 4 | 5

export interface PriorityItem {
   priority: PriorityType
   color: string
}
export type ProjectType = string | null

export interface ITask {
   name: string
   description: string | null
   completed: boolean
   project: ProjectType
   priority: PriorityType
   scheduledFor: number | null // timestamp
   createdAt: number
   completedAt: number | null
}

export type TaskProps = Omit<ITask, "createdAt" | "completedAt">
export type TaskView = "crossed" | "showed" | "hidden"

export interface IScheduledFor {
   date: Date | null
   hours: number
   minutes: number
}
