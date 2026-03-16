import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <a href="/" style={{ textDecoration: "none" }}>
              <span className="logo">Zongyao Mao</span>
            </a>
          </div>
          <nav className="nav-links">
            <a href="/#about">About</a>
            <a href="/#skills">Skills</a>
            <a href="/#experience">Experience</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="page-content">{children}</main>

      <footer className="footer">
        <div className="nav-inner">
          <span>© {new Date().getFullYear()} Zongyao Mao</span>
        </div>
      </footer>
    </>
  );
};

export default Layout;
