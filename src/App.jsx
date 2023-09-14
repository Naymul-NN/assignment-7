
import './App.css'
import AddCourse from './components/AddCourse'
import CourseList from './components/CourseList'

function App() {
  

  return (
    <>
      <h3 className='text-4xl text-center text-emerald-600 font-bold mb-11'>Your Courses</h3>
      <div className='flex '>
      <CourseList></CourseList>
      <AddCourse></AddCourse>
      </div>
      
    </>
  )
}

export default App
