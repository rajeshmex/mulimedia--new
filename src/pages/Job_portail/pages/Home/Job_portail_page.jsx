import React, { useContext } from "react";
import { MyContext } from "../../../../Context/createcontext";

function Jobportailpage() {
  const { id, password } = useContext(MyContext);
  console.log(id);
  return (
    <>
      <section>
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-12">
          {/* ============ image ============== */}

          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>

          {/* ====== end ====== */}

          {/* ======= text ============= */}
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h1 className=" mb-5 font-sans text-1xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none">
                Login Portal
              </h1>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                Everything you
                <br className="hidden md:block" />
                can imagine{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  is real
                </span>
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Find the job as your need you requriment our solution here is
                job portal
              </p>

              <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="job_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="job_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="job_name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="Location"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="Location"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Location"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* ===== end====== */}
        </div>

        <div className="flex justify-end gap-5 p-4 py-10">
          <div class="relative h-[400px] w-[300px] rounded-md">
            <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="AirMax Pro"
              class="z-0 h-full w-full rounded-md object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
              <h1 class="text-lg font-semibold text-white">Delba</h1>
              <p class="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
              </button>
            </div>
          </div>
          <div class="relative h-[400px] w-[300px] rounded-md">
            <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="AirMax Pro"
              class="z-0 h-full w-full rounded-md object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
              <h1 class="text-lg font-semibold text-white">Delba</h1>
              <p class="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobportailpage;
