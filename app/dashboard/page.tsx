import AcmeLogo from '@/app/ui/acme-logo';
import Link from "next/link";

export default function Page() {
  return (
      <div className='flex flex-col pl-5'>
        <Link href='/dashboard/customers' className='text-blue-400 underline'>customers</Link>
        <Link href='/dashboard/invoices' className='text-blue-400 underline'>invoices</Link>
      </div>
  );
}
