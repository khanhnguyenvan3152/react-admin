import { useState } from 'react';
import './App.css';
import { AppCard } from './common/components/Card/AppCard';
import { AuthenticationLayout } from './common/components/Layout/Authentication/AuthenticationLayout';
import { DashboardLayout } from './common/components/Layout/Dashboard/DashboardLayout';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(true)
  if (isAuthenticated) {
    return (
      <div>
        <DashboardLayout></DashboardLayout>
      </div>
    )
  }
  return (
    <div className="App">
      <AuthenticationLayout>
        <AppCard title={"Alo"}></AppCard>
      </AuthenticationLayout>
    </div>
  );
}

export default App;
