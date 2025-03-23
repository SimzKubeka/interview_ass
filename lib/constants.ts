import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  DocumentIcon,
  LightBulbIcon,
  HeartIcon,
  BuildingOffice2Icon,
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
  facility: 'Cape Town Practice',
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

export const DASHBOARD_CARDS = [
  { title: 'Total Practices', value: 11, percentage: '+15%', icon: BuildingOffice2Icon },
  { title: 'Total Subscribers', value: 261, percentage: '+15%', icon: UserGroupIcon },
  { title: 'Total Treatments', value: 135, percentage: '+15%', icon: HeartIcon },
  { title: 'Total Consents', value: 135, percentage: '+15%', icon: DocumentIcon },
  { title: 'Total Consents Signed', value: 2159, percentage: '+15%', icon: ClipboardDocumentCheckIcon },
  { title: 'Total Fact Sheets Read', value: 2159, percentage: '+15%', icon: LightBulbIcon },
]

export const DASHBOARD_CHARTS = [
  { label: 'Pending', value: 24, color: '#FB923C' },
  { label: 'Registered', value: 56, color: '#22C55E' },
  { label: 'Post Treatment', value: 20, color: '#3B82F6' },
]

export const DASHBOARD_TABLE = [
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '04/10/2021',
    status: true,
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '05/10/2021',
    status: true,
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    created: '06/10/2021',
    status: false,
  },
]

export const FACILITIES = [
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    manager: 'Adrian Stefan',
    created: '06/10/2021',
    status: false,
  },
  {
    name: 'Cape Town Practice',
    tel: '+21 123 4567',
    email: 'info@capetownpractice.co.za',
    manager: 'Blake Robertson',
    created: '01/11/2021',
    status: true,
  },
  {
    name: 'Durban Practice',
    tel: '+21 987 6543',
    email: 'info@durbanpractice.co.za',
    manager: '',
    created: '02/11/2021',
    status: true,
  },
  {
    name: 'Sandton Fertility Center',
    tel: '+21 111 2222',
    email: 'info@sandtonfertility.co.za',
    manager: '',
    created: '03/11/2021',
    status: false,
  },
  {
    name: 'Pretoria Women’s Clinic',
    tel: '+21 222 3333',
    email: 'info@pretoriawomens.co.za',
    manager: 'Steve Jobbs',
    created: '04/11/2021',
    status: true,
  },
]

