import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/Sidebar';
import JobTitle from '../components/JobTitle';
import JobSub from '../components/JobSub';
import JobBody from '../components/JobBody';
import JobFooter from '../components/JobFooter';

function Layout() {
  return (
    <div className='flex flex-col items-center bg-white border'>
        <Header />
        <SubHeader />
        <div className='flex flex-row'>
            <div className='flex flex-col items-center'>
                <JobTitle />
                <JobSub />
                <JobBody />
                <JobFooter />
            </div>
            <Sidebar />
        </div>
    </div>
  )
}

export default Layout;