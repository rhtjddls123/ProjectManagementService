/*utils */
import Issue from '@/features/_mocks/issue.json';
import project from '@/features/_mocks/project.json';
import projectDetail from '@/features/_mocks/project_detail.json';
import user from '@/features/_mocks/user.json';

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
