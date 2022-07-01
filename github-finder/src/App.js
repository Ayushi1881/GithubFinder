import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './component/pages/Home';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import {AlertProvider} from './context/alert/AlertContext'
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
  <GithubProvider>
    <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between'>
        <Navbar />
      </div>
      <main className='container mx-auto pb-12 px-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/NotFound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </AlertProvider>
  </GithubProvider>
  );
}

export default App;
