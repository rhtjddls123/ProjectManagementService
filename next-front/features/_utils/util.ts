/*utils */
import Issue from '@/features/_mocks/issue.json';
import project from '@/features/_mocks/project.json';
import projectDetail from '@/features/_mocks/project_detail.json';
import todo from '@/features/_mocks/todo.json';
import user from '@/features/_mocks/user.json';
import { todoType } from '../_types/type';

export const getProjectList = () => {
  return project;
};
export const getProjectDetail = () => {
  return projectDetail;
};

export const getUserList = () => {
  return user;
};

export const getIssueList = () => {
  return Issue;
};

export const getTodoList = () => {
  return todo;
};

export const testProjectList = (userId: number) => {
  const project = getProjectList().Project;
  const projectDetail = getProjectDetail().PROJECT_DETAIL;
  const myprojectNo = projectDetail
    .filter((item) => item.USER_ID === userId)
    .map((item) => item.PROJECT_NO);
  const myproject = project.filter((item) => item.project_no in myprojectNo);
  return myproject;
};

export const testProfile = (userId: number) => {
  const user = getUserList().USER.filter((item) => +item.user_no === userId);
  return user;
};

type testIssueProps = {
  projectId: number;
  userId: number;
};

export const testIssue = ({ projectId, userId }: testIssueProps) => {
  const Issue = getIssueList().issue.filter(
    (item) => item.projectId === projectId && item.userId === userId
  );
  return Issue;
};

type testTodoProps = {
  PROJECT_NO: number;
  USER_ID: number;
};

export const testTodo = ({
  PROJECT_NO,
  USER_ID,
}: testTodoProps): todoType[] => {
  const Todo = getTodoList().TODO.filter(
    (item) => item.PROJECT_NO === PROJECT_NO && item.USER_ID === USER_ID
  );
  return Todo;
};

// eslint-disable-next-line
export const debounce = <T extends (...args: any[]) => void>(
  cb: T,
  delay: number
) => {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};
