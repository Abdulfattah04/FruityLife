import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>
        Learn from the best courses available online
      </h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Explore a wide range of courses designed to help you master new skills and advance your career. Whether you're looking to learn programming, design, marketing, or any other field, we have the right course for you. Join our community of learners and start your journey today!
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0, 4).map((course, index)=>  <CourseCard key={index} course={course} />)}
      </div>

      <Link 
        to={'/course-list'} 
        onClick={()=> scrollTo(0,0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection
