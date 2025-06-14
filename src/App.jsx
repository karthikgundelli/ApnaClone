import React from 'react';
import Navbar from './components/Navbar';
import JobIntro from './components/JobIntro';
import JobDetails from './components/JobDetails';
import RatingsReviews from './components/RatingsReviews';
import PersonalisedCalls from './components/PersonalisedCalls';
import InterviewPrep from './components/InterviewPrep';
import AfterInterview from './components/AfterInterview';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <JobIntro />
      <JobDetails />
      <RatingsReviews />
      <PersonalisedCalls />
      <InterviewPrep />
      <AfterInterview />
      <Footer />
    </>
  );
}

export default App;
