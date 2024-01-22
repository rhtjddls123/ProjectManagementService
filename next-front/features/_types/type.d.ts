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
  USER_ID: number;
  title: string;
  content: string;
  status: boolean;
  create_date: string;
  start_date: string;
  goal_date: string;
  progress: number;
  complete_date: string | null;
};
