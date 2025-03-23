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
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
  ChartPieIcon,
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

export const ALLOWED_USERS = [
  { 
    name: 'Adrian Stefan',
    email: 'adrian@mrfertility.co.za',
    password: 'secret123',
    initials: 'AS',
    facility: 'Cape Town Practice',
  },
  {
    name: 'Blake Robertson',
    email: 'blake@mrfertility.co.za',
    password: 'password',
    initials: 'BR',
    facility: 'Durban Practice',
  },
]

// Define a typed interface for each tech item
interface TechItem {
  name: string
  icon: React.ElementType
  description: string
  useCase: string
}

// We'll create a partial list of the main libs from package.json
// For simplicity, not every dev-dep is included here.
export const TECH_STACK: TechItem[] = [
  {
    name: 'Next.js 15',
    icon: RocketLaunchIcon,
    description:
      'A React framework for building performant, production-ready applications. Includes the new App Router for flexible routing.',
    useCase:
      'Core framework for SSR/SSG, routing, API routes, and overall project structure.',
  },
  {
    name: 'React 19',
    icon: CpuChipIcon,
    description:
      'A JavaScript library for building user interfaces, used in synergy with Next.js.',
    useCase:
      'Provides the component-based UI foundation and rendering logic.',
  },
  {
    name: 'TypeScript',
    icon: CodeBracketIcon,
    description:
      'A typed superset of JavaScript that helps catch errors during development and boosts maintainability.',
    useCase:
      'Used for static type-checking throughout the code, ensuring reliability.',
  },
  {
    name: 'Tailwind CSS',
    icon: PaintBrushIcon,
    description:
      'A utility-first CSS framework that accelerates styling with consistent design patterns.',
    useCase:
      'Enables rapid UI development with responsive breakpoints and design tokens.',
  },
  {
    name: 'Framer Motion',
    icon: CloudIcon,
    description:
      'A production-ready motion library for React, powering smooth animations and transitions.',
    useCase:
      'Adds subtle interactive animations to InfoCards, tables, modals, etc.',
  },
  {
    name: 'Chart.js + React-Chartjs-2',
    icon: ChartPieIcon,
    description:
      'Chart.js is a flexible charting library; React-Chartjs-2 integrates it into React.',
    useCase:
      'Visualize data in InfoChart components with doughnut charts and more.',
  },
  {
    name: 'React Hook Form + Zod',
    icon: BookOpenIcon,
    description:
      'Lightweight form handling with schema-based validation for robust, typed forms.',
    useCase:
      'Build and validate user inputs (login, settings) with minimal re-renders.',
  },
  {
    name: 'clsx',
    icon: AdjustmentsHorizontalIcon,
    description:
      'A tiny utility for constructing className strings conditionally.',
    useCase:
      'Keeps component markup clean when toggling classes in React elements.',
  },
]
