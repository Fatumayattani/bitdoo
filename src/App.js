import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { LoanRequest } from './components/LoanRequest';
import { LoanBrowse } from './components/LoanBrowse';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const renderPage = () => {
        switch (currentPage) {
            case 'borrow':
                return <LoanRequest onBack={() => setCurrentPage('home')}/>;
            case 'lend':
                return <LoanBrowse onBack={() => setCurrentPage('home')}/>;
            case 'dashboard':
                return <Dashboard onBack={() => setCurrentPage('home')}/>;
            default:
                return (<>
            <Hero onNavigate={setCurrentPage}/>
            <ProblemSolution />
            <HowItWorks />
          </>);
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage}/>
      {renderPage()}
      {currentPage === 'home' && <Footer />}
    </div>);
}
export default App;
