
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link'
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';

  import Image from 'next/image';
  import {poppins} from '@/app/fonts/fonts'


  import TasksIcon from  '@/app/public/tasks-icon.svg';
  import CallNotesIcon from  '@/app/public/call-notes-icon.svg';
  import EmailsIcon from  '@/app/public/email-icon.svg';
  import ReportingIcon from  '@/app/public/reporting-icon.svg';
  
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    
    { name: 'Stride | Overview', href: '/dashboard', icon: HomeIcon },
    { name: 'Tasks', href: '/dashboard/tasks', icon: TasksIcon},
    { name: 'Call Notes', href: '/dashboard/callnotes', icon: CallNotesIcon},
    { name: 'Emails', href: '/dashboard/emails', icon: EmailsIcon },
    { name: 'Reporting', href: '/dashboard/reporting', icon: ReportingIcon },

  ];
  
  export default function NavLinks() {
  
    const pathname = usePathname();
  
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          const name = link.name


        if (name === 'Stride | Overview') {
        return (
          <div className='flex items-center justify-center' >
            {/* <div className='bg-bgColor1 rounded-full w-2.5 h-2.5'></div> */}
            <Link  
                key={link.name}
                href={link.href}
                className='flex h-[48px] grow items-center justify-center gap-2 text-black text-sm font-normal md:flex-none md:justify-start md:p-2 md:px-3 '
                >
                   <div className='bg-bgColor1 rounded-full w-2.5 h-2.5'></div>
                  <p className={`${poppins.className} antialiased hidden md:block`}>{link.name}</p>
                </Link>
          </div>
    
          
        );
        }

          return (

            
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[29px] grow items-center justify-center gap-1 p-4  text-sm font-normal md:flex-none md:justify-start md:p-2 md:px-3 ',
              {
                'bg-[#f0f0f0]': pathname === link.href,
              },
            )}
            >
              <div className='rounded-full w-5 h-2.5'></div>
              <Image src={LinkIcon} width={16} height={16} alt="logo"  />
              <p className={`${poppins.className} antialiased hidden md:block`}>{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  