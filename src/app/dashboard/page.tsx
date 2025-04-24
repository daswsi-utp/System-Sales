import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: 'Dashboard | Main',
  description: 'On this page you can see a summary of your sales.',
};
export default function DashboardPage() {
  return (
    redirect('/dashboard/main')
  )
}
