export function InquiryForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            id="firstName"
            placeholder="First Name*"
            className="bg-transparent border-0 border-b  focus:border-b-2 focus:border-primary focus:outline-none  border-gray-600 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-2"
          />
        </div>
        <div className="relative">
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            id="lastName"
            placeholder="Last Name*"
            className="bg-transparent border-0 border-b  focus:border-b-2 focus:border-primary focus:outline-none  border-gray-600 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-2"
          />
        </div>
      </div>
      <div className="relative">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email*"
          className="bg-transparent border-0 border-b  focus:border-b-2 focus:border-primary focus:outline-none  border-gray-600 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-2"
        />
      </div>
      <div className="relative">
        <label htmlFor="serviceAddress" className="sr-only">
          Service Address
        </label>
        <input
          id="serviceAddress"
          placeholder="Service Address*"
          className="bg-transparent border-0 border-b  focus:border-b-2 focus:border-primary focus:outline-none  border-gray-600 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-2"
        />
      </div>
      <div className="relative">
        <label htmlFor="comments" className="sr-only">
          Comments
        </label>
        <textarea
          id="comments"
          placeholder="Comments"
          className="bg-transparent border-b border-gray-600 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 py-2 min-h-[100px] resize-y pr-6"
        />

        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gray-600 transform rotate-45 translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </div>
      <button className="w-full sm:w-auto btn  btn-outline ">Submit</button>
    </form>
  );
}
