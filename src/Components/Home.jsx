import { easeIn, easeInOut, motion as Motion } from "motion/react"
import programmer from '../images/programmer.jpg'


const Home = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex-1">
              <Motion.img
              animate={{y:[0,30,0]}}
              transition={{duration:10,repeat:Infinity}}
              src={programmer}
              className="max-w-sm rounded-br-4xl rounded-t-4xl border-b-4 border-l-4 border-l-blue-400 border-b-yellow-600"
            />
            </div>
            <div className="flex-1">
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
