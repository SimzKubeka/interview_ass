import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

export const APP_NAME = 'My Fertility Journey'

export const NAV_LINKS = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: HomeIcon,
  },
  {
    href: '/user-settings',
    label: 'My Profile',
    icon: UserIcon,
  },
  {
    href: '/manage-facilities',
    label: 'Manage Practises',
    icon: BriefcaseIcon,
  },
  {
    href: '/notes',
    label: 'Logs',
    icon: DocumentTextIcon,
  },
]

export const USER = {
  name: 'Adrian Stefan',
  email: 'adrian@mrfertility.co.za',
  initials: 'AS',
}

export const NOTIFICATIONS = [
  {
    title: 'New Registration',
    user: 'Alex Fredricks',
    date: '07 Oct 2022',
    avatar: '/images/avatar1.png',
  },
  {
    title: 'New Consent Added',
    user: 'Blake Robertson',
    date: '07 Oct 2022',
    avatar: '/images/avatar1.png',
  },
]
