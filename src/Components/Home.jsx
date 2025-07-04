import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://www.webnox.in/wp-content/uploads/2022/10/Job-Portal-Software.png"
              className="max-w-sm rounded-lg animate-pulse"
            />
            <div>
              <h1 className="text-5xl font-bold">Job portal website!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
