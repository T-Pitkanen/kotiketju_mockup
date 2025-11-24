import { redirect } from 'next/navigation';

// Dashboard tours disabled in showcase mode
export default async function DashboardToursPage() {
redirect('/');
}
