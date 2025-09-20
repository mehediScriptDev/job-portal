

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)
        // const {location,jobType,category, ...newjob} = initialData;
        // console.log(newjob)
    }
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-4xl py-5">Add jobs</h1>
      <div className="py-10">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto ">
          <fieldset className="fieldset">
            <label className="label">Title</label>
            <input
            name="title"
              type="text"
              className="input w-full"
              placeholder="Job title"
            />
            <label className="label">Location</label>
            <input
            name="location"
              type="text"
              className="input w-full"
              placeholder="Location"
            />
            <label className="label">Job-Type</label>
            <input
            name="jobType"
              type="text"
              className="input w-full"
              placeholder="Job type"
            />
            <label className="label">category</label>
            <input
            name="category"
              type="text"
              className="input w-full"
              placeholder="category"
            />
            <label className="label">Application Deadline</label>
            <input
            name="applicationDeadline"
              type="text"
              className="input w-full"
              placeholder="applicationDeadline"
            />
            <label className="label">description</label>
            <input
            name="description"
              type="text"
              className="input w-full"
              placeholder="description"
            />
            <label className="label">Company</label>
            <input type="text" name="company" className="input w-full" placeholder="Company" />
            <label className="label">status</label>
            <input type="text" className="input w-full" placeholder="status" />
            <label className="label">hr_email</label>
            <input
            name="hr_email"
              type="email"
              className="input w-full"
              placeholder="hr_email"
            />
            <label className="label">hr_name</label>
            <input type="text" className="input w-full" placeholder="hr_name" />
            <label className="label">company_logo_url</label>
            <input
            name="company_logo"
              type="url"
              className="input w-full"
              placeholder="company_logo"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
