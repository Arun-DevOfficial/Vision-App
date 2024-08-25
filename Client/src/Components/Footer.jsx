
export default function Footer() {
  return (
    <footer className="bg-black text-white p-20 font-Inter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Services</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Blog Design
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Content Creation
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          {/* Recent Posts Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Recent Posts</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Growth
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Trends
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Tips
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          {/* Categories Section */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Categories</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Technology
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Health
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400 transition duration-300" href="#">
                  Travel
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
            <form>
              <fieldset className="flex flex-col md:flex-row items-center">
                <input
                  type="email"
                  placeholder="vision@gmail.com"
                  className="w-full md:w-2/3 mb-2 md:mb-0 md:mr-2 text-black placeholder:text-gray-400 py-3 px-4 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full md:w-1/3 bg-white text-neutral-900 font-Inter px-4 py-3 rounded-md"
                >
                  Subscribe
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="text-center mt-20">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
