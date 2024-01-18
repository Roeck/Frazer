import PageHeaders from "@/components/PageHeaders";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <PageHeaders h1Text={"PRICING"} h2Text={"(feature on progress!)"} />
      <div class="p-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-indigo-900 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Standard plan
          </h5>
          <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">10</span>
            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                5 videos per day
              </span>
            </li>
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                AI subtitle tips
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Add watermarks
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Add filters
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Advanced effects
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Video compression
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
        <div class="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-indigo-800 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Extra plan
          </h5>
          <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">39</span>
            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Unlimited videos
              </span>
            </li>
            <li class="flex">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                AI subtitle tips
              </span>
            </li>
            <li class="flex decoration-gray-400">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-400 ms-3">
                Add watermarks
              </span>
            </li>
            <li class="flex  decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-400 ms-3">
                Add filters
              </span>
            </li>
            <li class="flex decoration-gray-500">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-400 ms-3">
                Advanced effects
              </span>
            </li>
            <li class="flex decoration-gray-400">
              <svg
                class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="text-base font-normal leading-tight text-gray-400 ms-3">
                Video compression
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "7.5rem" }}>
        <Footer />
      </div>
    </>
  );
}
