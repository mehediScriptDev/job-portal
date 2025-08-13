import { easeIn, easeInOut, motion as Motion } from "motion/react"

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
              <Motion.h1 animate={{x:50}}
              transition={{duration:3, delay:1, ease:easeInOut, repeat:Infinity}} className="text-5xl font-bold">Job portal <Motion.span
              animate={{color:["#ff0000", "#ffff00", "#00ff00"]}}
              transition={{duration:2,repeat:Infinity,ease:easeIn}}
              >website</Motion.span> offer you best jobs!</Motion.h1>
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
