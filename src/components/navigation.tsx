'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, UsersIcon } from 'lucide-react';
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from 'react-icons/go';

import { cn } from '@/lib/utils';
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';

const router = [
  {
    label: 'Home',
    href: '',
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: 'My Tasks',
    href: '/tasks',
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
    activeIcon: Settings,
  },
  {
    label: 'Members',
    href: '/members',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {router.map(({ activeIcon, href, icon, label }) => {
        const absoluteHref = `/workspaces/${workspaceId}${href}`;
        const isActive = pathname === absoluteHref;
        const Icon = isActive ? activeIcon : icon;

        return (
          <Link key={href} href={absoluteHref}>
            <div
              className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
                isActive && 'bg-white shadow-sm hover:opacity-100 text-primary',
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
