import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Gallery from './pages/Gallery.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
