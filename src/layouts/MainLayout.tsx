import { Outlet, Link } from 'react-router-dom'
// import { useAppSelector } from '../app/hooks'
import MainHeader from '../components/MainHeader'
import Sidebar from '../components/Sidebar'
// import styles from './MainLayout.module.css'

export default function MainLayout() {
  
  return (
    <div className=".main-app-container container-fluid p-0">
        <MainHeader />
        <div className='w-100 d-flex'>
            <Sidebar />
            <main className={`container pt-5`}>
                <Outlet />
            </main>
        </div>
    </div>
  )
}
