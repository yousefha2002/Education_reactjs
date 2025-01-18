import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Groups from './pages/groups/Groups';
import CategoryGroups from './pages/groups/CategoryGroups';
import SingleGroup from './pages/groups/SingleGroup';
import Courses from './pages/courses/Courses';
import SingleCourse from './pages/courses/SingleCourse';
import CategoryCourses from './pages/courses/CategoryCourses';
import Lessons from './pages/lessons/Lessons';
import CategoryLessons from './pages/lessons/CategoryLessons';
import SingleLesson from './pages/lessons/SingleLesson';
import NotFound from './components/reusableUi/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Layout>
          <Routes>
            <Route element={<Home/>} path=''/>
            <Route element={<Groups/>} path='groups'/>
            <Route element={<CategoryGroups/>} path='/groups/:id'/>
            <Route element={<SingleGroup/>} path='/group/:id'/>

            <Route element={<Courses/>} path='courses'/>
            <Route element={<CategoryCourses/>} path='/courses/:id'/>
            <Route element={<SingleCourse/>} path='/course/:id'/>

            <Route element={<Lessons/>} path='lessons'/>
            <Route element={<CategoryLessons/>} path='/lessons/:id'/>
            <Route element={<SingleLesson/>} path='/lesson/:id'/>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>

            <Route path="*" element={<NotFound/>} />

          </Routes>
      </Layout>
    </div>
  );
}

export default App;
