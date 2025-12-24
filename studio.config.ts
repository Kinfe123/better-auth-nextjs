import type { StudioConfig } from 'better-auth-studio';
import { auth } from '@/lib/auth';

const config: StudioConfig = {
  auth,
  basePath: '/api/studio',
  metadata: {
    title: 'Admin Dashboard',
    theme: 'dark',
  },
  access: {
    sessionDuration: 60 * 60 * 24 * 30, // 30 days
    allowEmails: ['kinfetare83@gmail.com'],
    roles: ['admin'],
  }
};

export default config;
