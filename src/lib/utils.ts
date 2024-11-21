import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateInviteCode = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let inviteCode = '';

  for (let i = 0; i < length; i++) {
    inviteCode += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return inviteCode;
};

export const INVITE_CODE_LENGTH = 6;

export const snakeCaseToTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};
