import { redirect } from 'next/navigation';

import { getCurrent } from '@/features/auth/queries';
import { WorkspaceIdClient } from './client';

const WorkspaceIdPage = async () => {
  const current = await getCurrent();

  if (!current) redirect('/sign-in');

  return <WorkspaceIdClient />;
};

export default WorkspaceIdPage;
