<template>
  <div>
    <h1 class="text-[20px] font-bold text-[#344054] font-primary">User Profile</h1>
    <p class="py-[9px] text-[16px] font-primary">Verification / Account</p>
    <div class="flex justify-between pr-8">
      <p class="text-[18px]">Subusers</p>

      <button
        class="bg-[#E24949] text-white text-[14px] rounded-lg font-primary px-2 py-[12px]"
      >
        + Add New Users
      </button>
    </div>
    <div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          class="bg-[#E24949] text-white px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M9.5 10C12.1127 10 14.25 7.86245 14.25 5.25C14.25 2.63755 12.1127 0.5 9.5 0.5C6.88725 0.5 4.75 2.63755 4.75 5.25C4.75 7.86245 6.88725 10 9.5 10ZM9.5 12.375C6.35322 12.375 0 13.9782 0 17.125V19.5H19V17.125C19 13.9782 12.6468 12.375 9.5 12.375Z"
              fill="white"
            />
          </svg>
          Account
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center"
        >
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M13.4406 8.92008V5.60391C13.4406 2.53895 10.9786 0.0518213 7.91361 0.00157613C4.72304 -0.0737915 2.13542 2.56408 2.13542 5.7044V7.262C2.13542 7.43785 2.28615 7.61371 2.48713 7.61371H4.17034C4.37133 7.61371 4.52206 7.46298 4.52206 7.262V5.7044C4.52206 3.94582 5.9038 2.43846 7.66238 2.38822C9.52145 2.31285 11.0539 3.79508 11.0539 5.62903V8.92008H2.23591C1.0049 8.92008 0 9.92499 0 11.156V19.2957C0 20.5267 1.0049 21.5316 2.23591 21.5316H13.3401C14.5711 21.5316 15.576 20.5267 15.576 19.2957V11.156C15.576 9.95011 14.6213 8.97033 13.4406 8.92008Z"
              fill="#1A1A1A"
            />
          </svg>

          Password
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center"
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <g clip-path="url(#clip0_1_16817)">
              <path
                d="M15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM3.79346 4.97168V18.4258H25.437V4.97168H3.79346ZM12.8604 15.267H11.6904V13.1026H10.0525V15.267H8.88263V10.1778C8.88263 9.06641 9.76007 8.18897 10.8715 8.18897C11.9829 8.18897 12.8604 9.06641 12.8604 10.1778V15.267ZM15.9022 12.3422H15.2002V15.267H14.0303V8.18897H15.9607C17.0721 8.18897 18.008 9.12491 18.008 10.2948C18.008 11.4063 17.0721 12.3422 15.9022 12.3422ZM20.3479 15.267H19.1779V8.24746H20.3479V15.267ZM15.9022 9.35889H15.2002V11.1723H15.9607C16.4286 11.1723 16.8381 10.7628 16.8381 10.2948C16.8381 9.76836 16.4286 9.35889 15.9022 9.35889ZM10.8715 9.35889C10.4035 9.35889 10.0525 9.70987 10.0525 10.1778V11.9327H11.6904V10.1778C11.6904 9.70987 11.281 9.35889 10.8715 9.35889ZM27.3089 23.1055H1.92158L0.576172 19.6542H28.6543L27.3089 23.1055Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_16817">
                <rect
                  width="28.0782"
                  height="28.0782"
                  fill="white"
                  transform="translate(0.576172)"
                />
              </clipPath>
            </defs>
          </svg>

          API
        </button>
      </div>
    </div>
    <div class="w-full flex pt-14">
      <div class="w-3/12 mr-8">
        <p class="font-primary text-[14px] font-medium text-[#344054]">Personal info</p>
        <p class="font-primary text-[14px] text-[#344054]">
          Update your photo and personal details
        </p>
      </div>
      <div class="w-9/12 pr-12">
        <div class="border rounded-lg border-[#eaecf0] p-6">
          <div class="flex">
            <div class="flex flex-col w-full">
              <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                First name
              </p>
              <input
                type="text"
                name="Password"
                placeholder="Enter your password"
                value="asdfasdf"
                class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
              />
            </div>
            <div class="flex flex-col w-full pl-6">
              <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                Last name
              </p>
              <input
                type="text"
                name="Password"
                placeholder="Enter your password"
                value="asdfasdf"
                class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
              />
            </div>
          </div>
          <div class="flex py-6">
            <div class="flex flex-col w-full">
              <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]">
                Email address
              </p>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="mail-01">
                      <path
                        id="Icon"
                        d="M1.6665 5.8335L8.4706 10.5964C9.02158 10.982 9.29707 11.1749 9.59672 11.2496C9.86142 11.3156 10.1383 11.3156 10.403 11.2496C10.7026 11.1749 10.9781 10.982 11.5291 10.5964L18.3332 5.8335M5.6665 16.6668H14.3332C15.7333 16.6668 16.4334 16.6668 16.9681 16.3943C17.4386 16.1547 17.821 15.7722 18.0607 15.3018C18.3332 14.767 18.3332 14.067 18.3332 12.6668V7.3335C18.3332 5.93336 18.3332 5.2333 18.0607 4.69852C17.821 4.22811 17.4386 3.84566 16.9681 3.60598C16.4334 3.3335 15.7333 3.3335 14.3332 3.3335H5.6665C4.26637 3.3335 3.56631 3.3335 3.03153 3.60598C2.56112 3.84566 2.17867 4.22811 1.93899 4.69852C1.6665 5.2333 1.6665 5.93336 1.6665 7.3335V12.6668C1.6665 14.067 1.6665 14.767 1.93899 15.3018C2.17867 15.7722 2.56112 16.1547 3.03153 16.3943C3.56631 16.6668 4.26637 16.6668 5.6665 16.6668Z"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px]"
                  placeholder="olivia@untitledui.com"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex">
            <img src="@/assets/images/users/female-64.png" alt="female" class="pr-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
