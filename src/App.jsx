import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashBoard from './pages/TeacherDashBoard';
import { InfoProvider } from './components/UseAuth';



const App = () => {
  return (

  <InfoProvider>

    <Routes>
      <Route path="/" element={<LoginForm />} /> 
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/student_Dashboard" element={<StudentDashboard />} />
      <Route path="/teacherDashBoard" element={<TeacherDashBoard />} />
      
    </Routes>
  </InfoProvider>

  );
};

export default App;
