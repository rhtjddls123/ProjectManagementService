import IssueTest from '@/features/_components/modal/Issue/IssueTest';
import TodoPopover from '@/features/_components/popover/todo/TodoPopover';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('api/auth/signin');
  }
  return (
    <>
      <IssueTest></IssueTest>
      <TodoPopover></TodoPopover>
    </>
  );
}
