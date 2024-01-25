/*types */

export type buttonStyleProps = {
  disabled?: boolean;
  opacity?: string;
  color?: string;
};

export type modalStyleProps = {
  visible?: boolean;
  width?: string;
  height?: string;
  bgColor?: string;
};

export type projectType = {
  project_no: number;
  project_title: string;
};

export type issueType = {
  id: number;
  projectId: number;
  userId: number;
  title: string;
  content: string;
  img?: string[];
  create_date: string;
  issue_experiation_date: string;
  issue_status: boolean;
};

export type todoType = {
  TODO_NO: number;
  PROJECT_NO: number;
  USER_NO: number;
  TITLE: string;
  CONTENT: string;
  STATUS: boolean;
  CREATE_DATE: string;
  START_DATE: string;
  GOAL_DATE: string;
  PROGRESS: number;
  COMPLETE_DATE: string | null;
};
