import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
