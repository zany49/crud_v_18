export interface user {
    userName?: string
    password?: string
    email?:string
    role?: string
    gender?:string,
    // term?:boolean
}

export interface Roles {
    value: string,
    viewValue: string
}

export interface Login {
    email:string,
    password:string
}

export interface TaskStatus {
    value: string;
    viewValue: string;
  }
export  interface TaskObject {
    id:number;
    taskName: string;
    taskDescription: string;
    customerAssing:string
    taskStatus:string
  }