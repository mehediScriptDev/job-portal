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
      <div className=" min-h-screen">
        <div className=" ">
           
          <div className=" w-full bg-base-100  px-5 shadow-2xl">
           <h1 className="text-3xl w-full py-1 text-center font-bold">Apply job!</h1>
            <div className="w-full">
              <form onSubmit={submitForm} className="flex flex-col w-full">
                <label className="label">Linkedin URL</label>
                <input type="url" className="input w-full" name="linkedin" placeholder="Linkedin URL" />
                <label className="label">Github URL</label>
                <input type="url" className="input w-full" name="github" placeholder="Github URL" />
                <label className="label">Resume URL</label>
                <input type="url" className="input w-full" name="resume" placeholder="Resume URL" />
                
                
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
