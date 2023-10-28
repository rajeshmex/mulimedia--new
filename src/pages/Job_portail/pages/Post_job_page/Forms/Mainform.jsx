import React, { useContext } from "react";
// import { MyContext } from "../../../../Context/createcontext";
import cities from "../../../../../Data/cities.json";
import { Link } from "react-router-dom";

function Main() {
  // const { user } = useContext(MyContext);
  return (
    <>
      <div class="main bg-white px-6 md:px-16 py-6 mt-16">
        <div class="w-full max-w-xl mx-auto">
          <form action="" method="post">
            <h1 class="text-2xl mb-2">Post new job</h1>

            <div class="job-info border-b-2 py-2 mb-5">
              {/* <!--    Title      --> */}
              <div class="mb-4">
                <label class="block text-gray-700 text-sm mb-2" for="job-title">
                  Title
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  type="email"
                  id="job-title"
                  name="job-title"
                  placeholder="Frontend Developer"
                  autofocus
                />
              </div>

              {/* <!--     Link to apply     --> */}
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm mb-2"
                  for="apply-link"
                >
                  Link to apply
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  type="email"
                  id="apply-link"
                  name="apply-link"
                  placeholder="https://www.djangoproject.com/apply"
                />
              </div>

              <div class="md:flex md:justify-between gap-5">
                {/* <!--      Job Type      --> */}
                <div class="w-full md:w-3/12 mb-4 md:mb-0">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="job-type"
                  >
                    Job Type
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      name="job-type"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Freelance</option>
                      <option>Contract</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!--     Location       --> */}
                <div class="w-full md:w-3/12 mb-4 md:mb-0">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="job-type"
                  >
                    City
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      name="job-type"
                    >
                      {cities.cities.map((item) => (
                        <option>{item.City}</option>
                      ))}
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-3/12 mb-4 md:mb-0">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="job-type"
                  >
                    State
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      name="job-type"
                    >
                      {cities.cities.map((item) => (
                        <option>{item.State}</option>
                      ))}
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-3/12 mb-4 md:mb-0">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    for="job-type"
                  >
                    Distice
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      name="job-type"
                    >
                      {cities.cities.map((item) => (
                        <option>{item.District}</option>
                      ))}
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mt-6">
                {/* <!--     Company       --> */}
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label for="company" class="block text-gray-700 text-sm mb-2">
                    Select
                  </label>
                  <select
                    class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                    id="job-type"
                    name="job-type"
                  >
                    <option>Personal</option>
                    <option>Company</option>
                    <option>Freelance</option>
                    <option>other</option>
                  </select>
                </div>

                {/* <!--      Company Website      --> */}
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label for="company" class="block text-gray-700 text-sm mb-2">
                    Proof Documents
                  </label>
                  <input
                    type="file"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    id="company"
                    name="company"
                    placeholder="https://www.djangoproject.com/"
                  />
                </div>
              </div>
              {/* <!-- end group --> */}

              {/* <!--    Description      --> */}
              <div>
                <label
                  for="description"
                  class="block text-gray-700 text-sm mb-2"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="60"
                  rows="3"
                  placeholder="job Description"
                  className="p-10 border-dark border-dotted"
                ></textarea>
              </div>

              <div class="flex flex-wrap -mx-3">
                {/* <!--     Company       --> */}
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label for="company" class="block text-gray-700 text-sm mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    id="company"
                    name="company"
                    placeholder="Company"
                  />
                </div>

                {/* <!--      Company Website      --> */}
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label for="company" class="block text-gray-700 text-sm mb-2">
                    Company Website
                  </label>
                  <input
                    type="text"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    id="company"
                    name="company"
                    placeholder="https://www.djangoproject.com/"
                  />
                </div>
              </div>
              {/* <!-- end group --> */}

              {/* <!--      Company Website      --> */}
              <div class="mb-4 md:mb-0">
                <label
                  for="company-logo"
                  class="block text-gray-700 text-sm mb-2"
                >
                  Logo Image
                </label>
                <input
                  type="file"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company-logo"
                  name="company-logo"
                />
              </div>
            </div>
            {/* <!-- end job-info --> */}

            {/* <!--     Submit     --> */}
            <div>
              <Link to={"/post/payment"}>
                <button
                  class="bg-primary hover:bg-secondary text-white py-2 px-3 rounded"
                  type="submit"
                >
                  Create job
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
