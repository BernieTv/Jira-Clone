import { redirect } from 'next/navigation';

import { getCurrent } from '@/features/auth/queries';
import { TaskIdClient } from './client';

const TaskIdPage = async () => {
  const current = await getCurrent();

  if (!current) redirect('/sign-in');

  return <TaskIdClient />;
};

export default TaskIdPage;
