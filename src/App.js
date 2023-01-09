import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import DatacentreList from './components/DatacentreList.js';
import ServerList from './components/ServerList.js';
import ServerTypeList from './components/ServerTypeList.js';


export default function App() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="datacentres" element={<Datacentres />} />
          <Route path="servers" element={<Servers />} />
          <Route path="servertypes" element={<ServerTypes />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul class="navbar">
          <li class="navbar left">
            <Link to="/">Home</Link>
          </li>
          <li class="navbar right" >
            <Link to="/about">About</Link>
          </li>
          <li class="navbar left">
            <Link to="/datacentres">Data Centres</Link>
          </li>
          <li class="navbar left">
            <Link to="/servers">Servers</Link>
          </li>
          <li class="navbar left">
            <Link to="/servertypes">Server Types</Link>
          </li>
          {/* <li class="navbar left">
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      This sample application presents the idea of a dashboard to show how the placement of out IT hardware into different types of datacentre affects our green credentials.
    </div>
  );
}

function Datacentres() {
  return (
    <div>
      <h2>Datacentres</h2>
      <DatacentreList />
    </div>
  );
}

function Servers() {
  return (
    <div>
      <h2>Servers</h2>
      <ServerList />
    </div>
  );
}

function ServerTypes() {
  return (
    <div>
      <h2>Server Types</h2>
      <ServerTypeList />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// import React from 'react';
// import './App.css';
// import DatacentreList from './components/DatacentreList.js';

// function App() {
//   return (
//     <div ClassName="App">
//       <DatacentreList />
//     </div>
//   )
// }

// export default App;


