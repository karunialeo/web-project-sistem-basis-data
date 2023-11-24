import { lazy } from 'react';

import StudentPage from '../pages/Student';
import TeacherPage from '../pages/Teacher';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/student-list',
    title: 'Daftar Siswa',
    component: StudentPage,
  },
  {
    path: '/teacher-list',
    title: 'Daftar Guru',
    component: TeacherPage,
  },
  {
    path: '/class-schedule',
    title: 'Jadwal Pelajaran',
    component: TeacherPage,
  },
  {
    path: '/class-attendance',
    title: 'Kehadiran Siswa/Guru',
    component: TeacherPage,
  },
  {
    path: '/student-marks',
    title: 'Nilai Siswa',
    component: TeacherPage,
  },
  {
    path: '/inventory-list',
    title: 'Daftar Inventaris',
    component: TeacherPage,
  },
  {
    path: '/classrooms',
    title: 'Ruangan Kelas',
    component: TeacherPage,
  },
  {
    path: '/resource-borrowing',
    title: 'Peminjaman Alat/Barang',
    component: TeacherPage,
  },
  {
    path: '/user-list',
    title: 'Daftar Pengguna',
    component: TeacherPage,
  },

  // unused
  // unused
  // unused

  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
