import './globals.css'
import { ExperienceProvider } from '@/context/ExperienceContext';
import App from './App';

export const metadata = {
  title: "Hermes's Virtual Office",
  description: 'UX/Technical Artist | Professional Musician Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ExperienceProvider>
      <App>{children}</App>
    </ExperienceProvider>
  );
}
