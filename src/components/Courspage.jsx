import { useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import courses from "../data/courses";




function Courspage() {
   const params = useParams()
   const navigate = useNavigate()
   
   const course = courses.find((course) => course.slug === params.slug)

  useEffect(() => {
    if(!course){
        navigate('..', {relative: 'path'})
      }
    
  }, [course, navigate])

  return (
    <>
    
    <h1>{course?.title}</h1>
    <h2>{course?.slug}</h2>
    <h3>{course?.id}</h3>
    <Link to='..' relative="path">All courses</Link>
    </>
  )
}

export default Courspage