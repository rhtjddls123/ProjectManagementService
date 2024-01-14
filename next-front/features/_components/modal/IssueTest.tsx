import { testIssue } from '@/features/_utils/util';
import React from 'react';
import IssueContent from './IssueContent';
import { IssueModalDemo } from './IssueModalDemo';

const IssueTest = () => {
  const testIssues = testIssue({ projectId: 1, userId: 1 });
  return (
    <>
      {testIssues.map((item) => (
        <IssueModalDemo key={item.id}>
          <IssueContent item={item}></IssueContent>
        </IssueModalDemo>
      ))}
    </>
  );
};

export default IssueTest;
