export interface Group {
  _id?: string
  GroupID: number
  GroupName: string
}

export interface Science {
  _id: string
  Group: number | Group
  ScienceID: number
  ScienceName: string
}

export interface Branch {
  _id: string
  Science: Science | number
  BranchID: number
  BranchName: string
  Desc: string
  Subjects?: Subject[]
}

export interface Subject {
  _id: string
  Science: number
  SubjectID: number
  SubjectName: string
  Formulas?: Formula[]
}

export interface Formula {
  Subject: string
  ID: number
  Name: string
  Content: string
  Difficulty: number
  Signs: string
  Unit?: Unit
  Quantities?: Unit | Unit[]
}

interface Unit {
  Symbol: string
  Content: string
}
