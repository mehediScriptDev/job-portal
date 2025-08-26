const ApplyJob = () => {

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedin,github,resume)
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={submitForm} className="fieldset">
                <label className="label">Linkedin URL</label>
                <input type="url" className="input" name="linkedin" placeholder="Linkedin URL" />
                <label className="label">Github URL</label>
                <input type="url" className="input" name="github" placeholder="Github URL" />
                <label className="label">Resume URL</label>
                <input type="url" className="input" name="resume" placeholder="Resume URL" />
                
                
                <button className="btn btn-primary mt-4">Apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
