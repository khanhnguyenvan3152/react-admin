import { useContext } from 'react';
import './App.css';
import { AuthenticationLayout } from './common/Layout/Authentication/AuthenticationLayout';
import { DashboardLayout } from './common/Layout/Dashboard/DashboardLayout';
import { AuthContext } from './features/authentication/context/AuthProvider';


function App() {
  const { auth } = useContext(AuthContext)
  if (auth) {
    return (
      <div>
        <DashboardLayout></DashboardLayout>
      </div>
    )
  }
  return (
    <div className="App">
      <AuthenticationLayout>
      </AuthenticationLayout>
    </div>
  );
}

export default App;
