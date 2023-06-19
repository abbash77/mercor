import "./App.css";
import logo from './assets/avatar-bdb0d5e7.png'
import l1 from './assets/user5-00f9f7d0.png'
import l2 from './assets/user4-456b3247.png'
import l3 from './assets/user3-7735c71b.png'
import l4 from './assets/user2-19ac1dc4.png'
import l6 from './assets/l6.png'
import d1 from './assets/demo_1-6abf1080.png'
import d2 from './assets/demo_2-dd64a57e.png'
import d4 from './assets/demo_4-29fb84f6.png'
function App() {
  return (
    <div className="flex">
      <aside class="md:flex w-1/4 md:border-r hidden ">
        <section class=" sticky top-0 h-screen overflow-y-scroll [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  ">
          <div class=" sticky top-0 border-b bg-white ">
            <div class=" flex justify-between py-7 px-10 ">
              <div class=" flex items-center justify-between space-x-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity=".6"
                    d="M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z"
                    fill="#5030E5"
                  ></path>
                  <path
                    d="M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6Z"
                    fill="#5030E5"
                  ></path>
                  <path
                    opacity=".4"
                    d="M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z"
                    fill="#5030E5"
                  ></path>
                </svg>
                <h1 class=" xl:text-xl lg:text-base font-semibold ">
                  Project M.
                </h1>
              </div>
              <button class=" relative flex items-center justify-center ">
                <span class=" absolute -left-2 top-[6px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
                    ></path>
                  </svg>
                </span>
                <span class=" ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="  my-5 px-5 ">
            <div class=" ">
              <a
                class=" flex items-center space-x-4 py-3 text-grayColor px-5"
                href="/"
              >
                <span class=" font-medium ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class=" font-medium ">Home</span>
              </a>
            </div>
            <div class=" ">
              <a
                class=" flex items-center space-x-4 py-3 text-grayColor px-5"
                href="/"
              >
                <span class=" font-medium ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class=" font-medium ">Messages</span>
              </a>
            </div>
            <div class=" ">
              <a
                class=" flex items-center space-x-4 py-3 text-grayColor px-5"
                href="/"
              >
                <span class=" font-medium ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class=" font-medium ">Tasks</span>
              </a>
            </div>
            <div class=" ">
              <a
                class=" flex items-center space-x-4 py-3 text-grayColor px-5"
                href="/"
              >
                <span class=" font-medium ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class=" font-medium ">Members</span>
              </a>
            </div>
            <div class=" ">
              <a
                class=" flex items-center space-x-4 py-3 text-grayColor px-5"
                href="/"
              >
                <span class=" font-medium ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span class=" font-medium ">Settings</span>
              </a>
            </div>
          </div>
          <hr class="bg-[#DBDBDB] mx-5  " />
          <div class=" my-5 px-5 ">
            <div class=" flex items-center justify-between text-xs font-bold text-grayColor px-5 ">
              <p class=" uppercase ">My Projects</p>
              <button class="">
                <svg
                  class=" h-5 w-5 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="">
              <a
                aria-current="page"
                class="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5  active"
                href="/"
              >
                <span
                  class="h-2 w-2 rounded-full "
                  // style="background-color: rgb(122, 197, 85);"
                style={{backgroundColor:"rgb(122, 197, 85)"}}

                ></span>
                <p class=" capitalize">mobile app</p>
              </a>
              <a
                aria-current="page"
                class="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5  active"
                href="/"
              >
                <span
                  class="h-2 w-2 rounded-full "
                  // style="background-color: rgb(255, 165, 0);"
                style={{backgroundColor:"rgb(255, 165, 0)"}}

                ></span>
                <p class=" capitalize">website redesign</p>
              </a>
              <a
                aria-current="page"
                class="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5  active"
                href="/"
              >
                <span
                  class="h-2 w-2 rounded-full "
                  // style="background-color: rgb(228, 204, 253);"
                style={{backgroundColor:"rgb(228, 204, 253)"}}

                  
                ></span>
                <p class=" capitalize">design system</p>
              </a>
              <a
                aria-current="page"
                class="my-5 flex items-center space-x-4 rounded-md py-2 font-medium text-grayColor first:bg-[#5030E514] first:font-semibold first:text-[#0D062D] overflow-visible px-5  active"
                href="/"
              >
                <span
                  class="h-2 w-2 rounded-full "
                  // style="background-color: rgb(118, 165, 234);"
                style={{backgroundColor:"rgb(118, 165, 234)"}}

                ></span>
                <p class=" capitalize">wireframes</p>
              </a>
            </div>
          </div>
          <div class=" relative mt-20 rounded-2xl bg-[#5030E514] mx-5  ">
            <div class=" absolute inset-x-0 -top-12 flex items-center justify-center ">
              <div class=" flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
                <div class=" bg-[#FCD64AB2] rounded-full w-10 h-10 ">
                  <div class=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity=".4"
                        d="M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Z"
                        fill="#FBCB18"
                      ></path>
                      <path
                        d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z"
                        fill="#FBCB18"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class=" flex flex-col items-center justify-center space-y-5 px-10 lg:px-5 py-5 mb-20 ">
              <p class=" mt-3 font-medium text-black ">Thoughts Time</p>
              <p class=" text-center text-xs text-grayColor ">
                We don't have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button class=" rounded bg-white px-6 lg:px-3 py-3 text-center text-sm font-medium text-black  ">
                Write a message
              </button>
            </div>
          </div>
        </section>
      </aside>
      <section class="mb-20 w-full">
        <nav class="flex flex-col sticky top-0 md:px-10 px-2 bg-white md:flex-row md:items-center justify-between border-b border-b-[#DBDBDB] py-5 z-50 ">
          <form action="" class=" w-1/3 hidden md:block ">
            <div class=" relative flex items-center ">
              <svg
                class="pointer-events-none absolute ml-4 text-grayColor "
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <input
                type="text"
                class=" w-full rounded-md border-none bg-[#F5F5F5] py-3 pl-14 pr-3 text-sm outline-none ring-0 placeholder:text-grayColor  focus:border-none focus:ring-0"
                placeholder="Search for anything..."
              />
            </div>
          </form>
          <div class=" flex md:items-center md:justify-center justify-between md:space-x-10 ">
            <div class=" flex items-center justify-center space-x-5 text-grayColor ">
              <button class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 18.43h-4l-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 11.36v-.21c0-.68.42-1.04.84-1.33.41-.28.82-.64.82-1.3 0-.92-.74-1.66-1.66-1.66-.92 0-1.66.74-1.66 1.66M11.995 13.75h.01"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <button class="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
                <span class=" absolute right-[2px] top-[1px] h-2 w-2 rounded-full bg-[#D8727D] "></span>
              </button>
            </div>
            <div class=" flex items-center justify-center space-x-5  ">
              <div class="">
                <p class=" text-black ">Anima Agarwal</p>
                <p class=" text-right text-sm text-grayColor ">U.P, India</p>
              </div>
              <div class=" flex items-center justify-center space-x-3 ">
                <img
                  class=" h-12 w-12 rounded-full object-cover  object-top "
                  src={logo}
                  alt=""
                />
                <svg
                  class=" text-[#292D32] "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <section class=" my-10 md:px-10 px-2 ">
          <div class=" flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0 ">
            <div class=" flex justify-start  space-x-5  ">
              <h2 class=" md:text-5xl text-4xl font-semibold ">Mobile App</h2>
              <div class=" flex items-center justify-center space-x-5 ">
                <button class=" rounded-md bg-[#5030E533] p-1 ">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.13749 1.80001L2.64998 8.28751C2.39998 8.53751 2.16249 9.02501 2.11249 9.37501L1.76249 11.85C1.63749 12.75 2.26249 13.375 3.16249 13.25L5.63746 12.9C5.98746 12.85 6.475 12.6125 6.725 12.3625L13.2125 5.87501C14.325 4.76251 14.8625 3.46251 13.2125 1.81251C11.5625 0.150005 10.2625 0.675007 9.13749 1.80001Z"
                      stroke="#5030E5"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <button class=" rounded-md bg-[#5030E533] p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.498 18.25h-1.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.51c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-1.5a.749.749 0 1 1 0-1.5h1.5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25ZM9 18.25H7.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                      fill="#5030E5"
                    ></path>
                    <path
                      d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                      fill="#5030E5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between md:justify-center md:space-x-5 ">
              <button class=" flex items-center justify-center space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
                    fill="#5030E5"
                  ></path>
                  <path
                    d="M16 11.25h-3.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.25H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25V16c0 .41.34.75.75.75s.75-.34.75-.75v-3.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
                    fill="#5030E5"
                  ></path>
                </svg>
                <span class=" font-medium text-[#5030E5] ">Invite</span>
              </button>
              <div class="flex -space-x-2 overflow-hidden ">
                <img
                  class="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                  src={l1}
                  alt="{user.handle}"
                />
                <img
                  class="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                  src={l2}
                  alt="{user.handle}"
                />
                <img
                  class="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                  src={l3}
                  alt="{user.handle}"
                />
                <img
                  class="inline-block md:h-10 md:w-10 h-8  w-8  rounded-full ring-2 ring-white"
                  src={l4}
                  alt="{user.handle}"
                />
                <div class=" flex md:h-10 md:w-10 h-8 w-8 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
                  <span class=" font-medium text-[#D25B68] ">+2</span>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 flex items-center justify-between font-medium text-grayColor ">
            <div class="flex items-center justify-center gap-5  ">
              <button class="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.87 17.12l-1-1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Filter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                  ></path>
                </svg>
              </button>
              <button class=" flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 md:py-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 2v3M16 2v3M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8ZM20.75 17.6H3.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 8.25c-1.23 0-2.27.67-2.27 1.97 0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62.45-.31.73-.77.73-1.39 0-1.3-1.03-1.97-2.26-1.97Zm0 2.84c-.52 0-.9-.31-.9-.8 0-.5.38-.79.9-.79s.9.29.9.79c0 .49-.38.8-.9.8ZM12 14c-.66 0-1.14-.33-1.14-.93 0-.6.48-.92 1.14-.92.66 0 1.14.33 1.14.92 0 .6-.48.93-1.14.93Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Today</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                  ></path>
                </svg>
              </button>
            </div>
            <div class=" md:flex items-center justify-center space-x-5 hidden ">
              <button class="flex items-center justify-center space-x-2 rounded-md border border-grayColor px-3 py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Share</span>
              </button>
              <hr class=" h-7 border-[1px] border-grayColor " />
              <div class=" flex h-10 w-10 justify-center rounded-md bg-[#5030E5] ">
                <button class="">
                  <svg
                    class=" rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
              <button class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM17.54 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
                    stroke="#787486"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section class="grid lg:grid-cols-3 gap-5 mt-10 md:px-10 px-2 ">
          <div class="rounded-2xl bg-[#F5F5F5] p-5">
            <div class="flex items-center space-x-2">
              <span
                class="h-2 w-2 rounded-full "
                style={{backgroundColor:"rgb(80, 48, 229)"}}
              ></span>
              <p class="font-medium capitalize text-blackColor">to do</p>
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                3
              </span>
            </div>
            <hr
              class="mt-5 border-2 border-[##5030E5]"
              // style="border-color: rgb(80, 48, 229);"
            />
            <section
              data-rbd-droppable-id="0"
              data-rbd-droppable-context-id="0"
            >
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="31"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="31"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">
                    low
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Brainstorming
                </h3>
                <p class="mt-2 text-grayColor">
                  Brainstorming brings team members' diverse experience into
                  play.{" "}
                </p>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l1}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">12 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">0 files</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="32"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="32"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize false bg-[#D8727D1A] text-[#D8727D]   false">
                    high
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Research
                </h3>
                <p class="mt-2 text-grayColor">
                  User research helps you to create an optimal product for
                  users.{" "}
                </p>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l2}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l6}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">10 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">3 files</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="33"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="33"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize false bg-[#D8727D1A] text-[#D8727D]   false">
                    high
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Wireframes
                </h3>
                <p class="mt-2 text-grayColor">
                  Low fidelity wireframes include the most basic content and
                  visuals..{" "}
                </p>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l1}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">12 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">13 files</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div class="rounded-2xl bg-[#F5F5F5] p-5">
            <div class="flex items-center space-x-2">
              <span
                class="h-2 w-2 rounded-full"
                // style="background-color: rgb(255, 165, 0);"
                style={{backgroundColor:"rgb(255, 165, 0)"}}


              ></span>
              <p class="font-medium capitalize text-blackColor">on progress</p>
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                3
              </span>
            </div>
            <hr
              class="mt-5 border-2 border-[##FFA500]"
              // style="border-color: rgb(255, 165, 0);"
            />
            <section
              data-rbd-droppable-id="1"
              data-rbd-droppable-context-id="0"
            >
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="45"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="45"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">
                    low
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Onboarding Illustrations{" "}
                </h3>
                <div class="mt-5">
                  <img
                    src={d1}
                    alt=""
                    class="h-40 w-full object-cover false"
                  />
                </div>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l1}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">14 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">15 files</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="46"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="46"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize bg-[#DFA87433] text-[#D58D49] false  false">
                    low
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Moodboard
                </h3>
                <div class="mt-5">
                  <img
                    src={d4}
                    alt=""
                    class="h-40 w-full object-cover false"
                  />
                </div>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">9 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">10 files</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="47"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="47"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize false bg-[#D8727D1A] text-[#D8727D]   false">
                    high
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Onboarding Illustrations{" "}
                </h3>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l1}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">14 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">15 files</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div class="rounded-2xl bg-[#F5F5F5] p-5">
            <div class="flex items-center space-x-2">
              <span
                class="h-2 w-2 rounded-full"
                // style="background-color: rgb(139, 196, 138);"
                style={{backgroundColor:"rgb(139, 196, 138)"}}
              ></span>
              <p class="font-medium capitalize text-blackColor">done</p>
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                2
              </span>
            </div>
            <hr
              class="mt-5 border-2 border-[##8BC48A]"
              // style="border-color: rgb(139, 196, 138);"
            />
            <section
              data-rbd-droppable-id="2"
              data-rbd-droppable-context-id="0"
            >
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="73"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="73"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize false false  bg-[#83C29D33] text-[#68B266]">
                    completed
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Mobile App Design
                </h3>
                <div class="mt-5">
                  <img
                    src={d2}
                    alt=""
                    class="h-40 w-full object-cover h-64 object-top"
                  />
                </div>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l6}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">12 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">15 files</span>
                    </div>
                  </div>
                </div>
              </article>
              <article
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="74"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="74"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="my-5 rounded-2xl bg-white md:p-8 p-5   "
              >
                <div class="flex items-center justify-between ">
                  <span class="rounded px-2 py-1 text-xs font-medium capitalize false false  bg-[#83C29D33] text-[#68B266]">
                    completed
                  </span>
                  <button class="text-2xl">...</button>
                </div>
                <h3 class="mt-2 text-lg font-semibold text-blackColor">
                  Design System
                </h3>
                <p class="mt-2 text-[#0D062D">
                  It just needs to adapt the UI from what you did before{" "}
                </p>
                <div class="mt-10 flex items-center justify-between">
                  <div class="flex -space-x-2 overflow-hidden">
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l1}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l4}
                      alt="profile"
                    />
                    <img
                      class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src={l3}
                      alt="profile"
                    />
                  </div>
                  <div class="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span class="">12 comments</span>
                    </div>
                    <div class="flex items-center justify-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 14.55h-5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        ></path>
                      </svg>
                      <span class="">15 files</span>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
