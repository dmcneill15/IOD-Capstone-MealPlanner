'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  return (
    <main>
      <section>
        <div className="title-container">
          <h1 className="page-title"> Welcome to your personlised meal planner!</h1>
          <p className="info-text">Type something here about the site and how to get started</p>
        </div>
      </section>
      <section>
        <div className="center mt-5 ">
          <a className="custom-btn btn btn-outline-light" href="#" role="button">Sign Up</a>
          <a className="custom-btn btn btn-outline-light" href="#" role="button">Login</a>
        </div>
      </section>
    </main>
  );
}
