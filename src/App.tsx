import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import BookPage from './components/BookPage';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/book/:id" element={<BookPage />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
