export default function Tabs() {
  return (
    <>
      <div>
        <div>
          <div className="border-b border-gray-200 dark:border-neutral-700 font-Inter font-medium">
            <nav
              className="flex gap-x-1"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="horizontal"
            >
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-neutral-600 focus:outline-none focus:text-neutral-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-500 active"
                id="tabs-with-badges-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-badges-1"
                aria-controls="tabs-with-badges-1"
                role="tab"
              >
                All
                <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-neutral-900 text-white dark:bg-neutral-700 dark:text-neutral-300">
                  99+
                </span>
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-neutral-600 focus:outline-none focus:text-neutral-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-500 active"
                id="tabs-with-badges-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-badges-2"
                aria-controls="tabs-with-badges-2"
                role="tab"
              >
                Tech
                <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-neutral-900 text-white  dark:bg-neutral-700 dark:text-neutral-300">
                  32+
                </span>
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-neutral-600 focus:outline-none focus:text-neutral-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-500 active"
                id="tabs-with-badges-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-badges-3"
                aria-controls="tabs-with-badges-3"
                role="tab"
              >
                Sports
                <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-neutral-900 text-white  dark:bg-neutral-700 dark:text-neutral-300">
                  60+
                </span>
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-neutral-600 focus:outline-none focus:text-neutral-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-neutral-500 active"
                id="tabs-with-badges-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-badges-3"
                aria-controls="tabs-with-badges-3"
                role="tab"
              >
                Music
                <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 dark:hs-tab-active:bg-blue-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-neutral-900 text-white dark:bg-neutral-700 dark:text-neutral-300">
                  11+
                </span>
              </button>
            </nav>
          </div>
          {/* Tab Body */}
        </div>
      </div>
    </>
  );
}
