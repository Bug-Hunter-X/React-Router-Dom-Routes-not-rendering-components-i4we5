import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// About.js
function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
//The bug is that the routes are not rendering when navigating, and the browser URL changes but the view doesn't update