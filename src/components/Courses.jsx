import { useLocation, useNavigate } from "react-router-dom"
import courses from "../data/courses"
import Cours from "./Cours"
import queryString from "query-string"
import { useEffect, useState } from "react"

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }

  sortedCourses.sort((a, b) => a[key] > b[key] ? 1 :  -1)
  return sortedCourses
}

function Courses() {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const [sortKey, setSortKey] = useState(query.sort)
    
    
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))


    useEffect(() => {
      if (!SORT_KEYS.includes(sortKey)){
        navigate('.')
        setSortKey()
      }
    }, [sortKey, navigate])
  
  

  return (
  
    <>
   <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
    {sortedCourses.map((cours) => {
      return <Cours key={cours.id} {...cours}/>
    })}
    
    </>
  )
}

export default Courses