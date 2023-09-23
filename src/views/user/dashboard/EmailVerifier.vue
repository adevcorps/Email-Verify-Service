<template>
  <div>
    <h1 class="text-[20px] font-bold text-[#344054] font-primary">Email Verifier</h1>
    <p class="py-[9px] text-[16px] font-primary">
      File upload / Paste Email List / Signle Email
    </p>
    <div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 1 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(1)"
        >
          File Upload
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 2 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(2)"
        >
          Paste Email List
        </button>
        <button
          type="button"
          class="px-4 py-2.5 font-primary text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg flex items-center"
          :class="tab === 3 ? 'bg-[#E24949] text-white' : 'text-primary'"
          @click="changeTab(3)"
        >
          Single Email
        </button>
      </div>
    </div>
    <div v-show="tab === 1">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">Bulk Validator</p>
          <p class="font-primary text-[14px] text-[#344054]">Bulk email validation</p>
        </div>
        <div class="w-9/12 pr-12">
          <div class="border rounded-lg border-[#eaecf0] p-6">
            <div class="flex py-6">
              <div class="flex flex-col w-full">
                <p class="font-primary text-[14px] pb-2 font-medium text-[#344054]"></p>
              </div>
            </div>
            <div class="flex">
              <div
                class="w-full p-6 rounded-lg border border-gray-300 cursor-pointer"
                v-on:click="$refs.avatar.click()"
              >
                <input
                  type="file"
                  ref="avatar"
                  name="avatar"
                  class="hidden"
                  id="avatar"
                  v-on:change="fileChange"
                />
                <div class="w-full text-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto"
                  >
                    <g id="upload-cloud-02">
                      <path
                        id="Icon"
                        d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                        stroke="#475467"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <span class="text-base text-[#E24949] font-bold font-primary leading-5"
                    >Click to upload</span
                  >
                  <span
                    class="text-base text-[#475467] font-primary font-semibold leading-5"
                  >
                    or drage and drop</span
                  >
                  <p class="mt-1">
                    <span
                      class="text-base text-[#475467] font-primary font-semibold leading-5"
                      >SVG, PNG, JPG or GIF (max. 800 *400px)</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <div></div>
              <button
                class="py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[18px] font-semibold"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mt-5">
        <div class="flex justify-between space-x-2">
          <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
            <div class="w-full flex justify-between">
              <div class="w-10/12">
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  email_list_2934354.csv
                </p>
                <p>Uploading now &nbsp; &nbsp; <span>id:</span> 3245345345</p>
              </div>
              <div class="w-2/12 flex">
                <img src="../../../assets/images/dashboard/pause.png" class="mr-2" />
                <img src="../../../assets/images/dashboard/stop.png" />
              </div>
            </div>
            <div class="w-6/12 mx-auto p-5">
              <Progress
                labelProgress="true"
                labelPosition="inside"
                color="red"
                size="lg"
                progress="45"
                class="text-white mb-3 rounded-full"
              ></Progress>
              <p class="font-primary font-semibold text-primary text-[17.32px] mb-3">
                In Progress...
              </p>
              <p class="font-primary font-semibold text-[#23B1A5] text-[17.32px]">
                15min left
              </p>
            </div>
            <div class="w-10/12">
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                In progress
              </p>
              <p>15min left</p>
              <div class="w-full flex justify-between">
                <div class="w-6/12 flex items-center">
                  <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                  <div>
                    <span class="mb-5">11</span>
                    <p
                      class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                    >
                      Email Verified
                    </p>
                  </div>
                </div>
                <div class="w-6/12 flex items-center">
                  <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                  <div>
                    <span>0</span>
                    <p
                      class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                    >
                      Email Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
            <div class="w-full flex justify-between mb-5">
              <div class="w-10/12">
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  email_list_2934354.csv
                </p>
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
                </p>
              </div>
              <div class="w-2/12 flex">
                <img
                  src="../../../assets/images/dashboard/recycle_bin.png"
                  class="mr-2 cursor-pointer"
                />
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#23B1A5'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div
                class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
              >
                <p
                  class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
                >
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
                </p>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#F2C94C'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                    <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      class="w-10/12"
                      :fill-color="'#E24949'"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
      <div class="w-full mt-5">
        <div class="flex justify-between space-x-2">
          <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
            <div class="w-full flex justify-between mb-5">
              <div class="w-10/12">
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  email_list_2934354.csv
                </p>
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
                </p>
              </div>
              <div class="w-2/12 flex">
                <img
                  src="../../../assets/images/dashboard/recycle_bin.png"
                  class="mr-2 cursor-pointer"
                />
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#23B1A5'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div
                class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
              >
                <p
                  class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
                >
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
                </p>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#F2C94C'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                    <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      class="w-10/12"
                      :fill-color="'#E24949'"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
              Download Report
            </button>
          </div>
          <div class="w-6/12 border rounded-lg border-gray-200 py-7 px-5">
            <div class="w-full flex justify-between mb-5">
              <div class="w-10/12">
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  email_list_2934354.csv
                </p>
                <p
                  class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                >
                  23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
                </p>
              </div>
              <div class="w-2/12 flex">
                <img
                  src="../../../assets/images/dashboard/recycle_bin.png"
                  class="mr-2 cursor-pointer"
                />
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#23B1A5'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div
                class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
              >
                <p
                  class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
                >
                  Good emails are valid, existing emails, it is safe to send emails to
                  them
                </p>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-5 mb-5">
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      :fill-color="'#F2C94C'"
                      class="w-10/12"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                    <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
              <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
                <div class="flex justify-between">
                  <div class="w-6/12 p-2">
                    <CircleProgress
                      :percent="percent"
                      :viewport="true"
                      :show-percent="true"
                      :size="130"
                      class="w-10/12"
                      :fill-color="'#E24949'"
                    />
                  </div>
                  <div class="w-6/12">
                    <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                    <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                    <p class="font-primary text-[16px] text-primary font-bold">5</p>
                  </div>
                </div>
                <div>
                  <div class="w-full">
                    <p>Risky emails may exist or not Learn more when to use them</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tab === 2">
      <div class="w-full flex pt-14 pb-2 border-y border-gray-200">
        <div class="w-3/12 mr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">Bulk Validator</p>
          <p class="font-primary text-[14px] text-[#344054]">Bulk email validation</p>
        </div>
        <div class="w-9/12 pr-12">
          <p class="font-primary text-primary text-[12px] font-[400] leading-[18px]">
            Enter an email address and hit coma, Enter or Return . Once you entered all
            emails, you want to verify, click ‘Start Verification’
          </p>
          <div class="border rounded-lg border-[#eaecf0] p-6 flex">
            <div class="w-6/12">
              <div
                class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write your mails here..."
                    v-on:keyup.enter="getEmailList"
                    v-model="textAreaValue"
                  ></textarea>
                </div>
                <div class="w-full px-3 py-2 border-t dark:border-gray-600">
                  <div class="w-full">
                    <span
                      class="inline-flex items-center gap-1.5 py-1.5 pl-3 pr-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      v-for="tag in tagArray"
                    >
                      {{ tag }}
                      <button
                        type="button"
                        class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-200 focus:text-blue-500"
                      >
                        <span class="sr-only">Remove badge</span>
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          @click="removeItem(tag)"
                        >
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <button
                    class="w-full py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
                  >
                    Start verification
                  </button>
                </div>
              </div>
            </div>
            <div class="w-6/12"></div>
          </div>
        </div>
      </div>
      <div class="w-6/12 mx-auto">
        <div class="w-full border rounded-lg border-gray-200 py-7 px-5 mt-7">
          <div class="w-6/12 mx-auto p-5">
            <CircleProgress
              :percent="percent"
              :viewport="true"
              :size="240"
              :fill-color="'#E24949'"
              class="w-10/12"
            />
          </div>
          <div class="w-10/12">
            <p class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3">
              In progress
            </p>
            <p>15min left</p>
            <div class="w-full flex justify-between">
              <div class="w-6/12 flex items-center">
                <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                <div>
                  <span class="mb-5">11</span>
                  <p
                    class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                  >
                    Email Verified
                  </p>
                </div>
              </div>
              <div class="w-6/12 flex items-center">
                <img src="../../../assets/images/dashboard/mail_box.png" class="m-5" />
                <div>
                  <span>0</span>
                  <p
                    class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
                  >
                    Email Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full border rounded-lg border-gray-200 py-7 px-5 mt-7">
          <div class="w-full flex justify-between mb-5">
            <div class="w-10/12">
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                email_list_2934354.csv
              </p>
              <p
                class="text-sm font-primary text-[#475467] font-bold leading-[20px] mb-3"
              >
                23-08-29 09:05:07 &nbsp; &nbsp; <span>id:</span> 3245345345
              </p>
            </div>
            <div class="w-2/12 flex">
              <img
                src="../../../assets/images/dashboard/recycle_bin.png"
                class="mr-2 cursor-pointer"
              />
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#23B1A5'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#23B1A5] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#23B1A5] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div
              class="w-6/12 flex justify-between border rounded-lg border-gray-200 py-4 px-6"
            >
              <p
                class="font-primary text-[#475467] font-[500] leading-[16px] text-[12px]"
              >
                Good emails are valid, existing emails, it is safe to send emails to them
              </p>
            </div>
          </div>
          <div class="w-full flex justify-between space-x-5 mb-5">
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    :fill-color="'#F2C94C'"
                    class="w-10/12"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#F2C94C] font-bold">Risky</p>
                  <p class="font-primary text-[16px] text-[#F2C94C] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
            <div class="w-6/12 border rounded-lg border-gray-200 py-4 px-6">
              <div class="flex justify-between">
                <div class="w-6/12 p-2">
                  <CircleProgress
                    :percent="percent"
                    :viewport="true"
                    :show-percent="true"
                    :size="130"
                    class="w-10/12"
                    :fill-color="'#E24949'"
                  />
                </div>
                <div class="w-6/12">
                  <p class="font-primary text-lg text-[#E24949] font-bold">Good</p>
                  <p class="font-primary text-[16px] text-[#E24949] font-bold">75%</p>
                  <p class="font-primary text-[16px] text-primary font-bold">5</p>
                </div>
              </div>
              <div>
                <div class="w-full">
                  <p>Risky emails may exist or not Learn more when to use them</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="bg-[#23B1A51C] text-[#23B1A5] text-[14px] font-[600] rounded-lg font-primary py-2 sm:py-5 w-full mb-12"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
    <div v-show="tab === 3">
      <div class="w-full flex pt-14 pb-2">
        <div class="w-5/12 mr-8 pr-8">
          <p class="font-primary text-lg text-[#344054] font-bold">
            Single Email Validator
          </p>
          <p class="font-primary text-[14px] text-[#344054]">Single email validation</p>

          <input
            type="text"
            name="Password"
            placeholder="Enter your password"
            value="asdfasdf"
            class="flex py-2.5 px-3.5 self-stretch rounded-lg border border-gray-300 font-primary text-[16px] w-full"
          />
          <button
            class="w-full py-2.5 mt-5 px-8 bg-[#E24949] text-white rounded-lg text-[14px] font-semibold"
          >
            Verify
          </button>
        </div>
        <div class="w-5/12 pr-12 relative px-16 py-8">
          <img
            src="../../../assets/images/dashboard/Rectangle 4455.png"
            class="absolute right-0 top-0 w-full -z-1"
          />
          <div class="flex items-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <g id="Email" clip-path="url(#clip0_1_17287)">
                <path
                  id="Vector"
                  d="M0.286167 17.9298L22.9335 0.566895L45.5808 17.9298V43.5968H0.286167V17.9298Z"
                  fill="#006DFF"
                />
                <path
                  id="Vector_2"
                  d="M4.58917 7.36133H41.2778V40.4264H4.58917V7.36133Z"
                  fill="#F0F7FC"
                />
                <path
                  id="Vector_3"
                  d="M15.0065 13.7021H30.8596V15.061H15.0065V13.7021Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_4"
                  d="M10.7035 18.2319H35.1626V19.8172H10.7035V18.2319Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_5"
                  d="M10.7035 22.7612H35.1626V24.3465H10.7035V22.7612Z"
                  fill="#7BC4FF"
                />
                <path
                  id="Vector_6"
                  d="M0.285923 43.5967V17.9297L22.9332 35.2926L45.5806 17.9297V43.5967H0.285923Z"
                  fill="url(#paint0_linear_1_17287)"
                />
                <path
                  id="Vector_7"
                  d="M22.9332 26.2339L0.285923 43.5968H45.5806L22.9332 26.2339Z"
                  fill="#008DFF"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_17287"
                  x1="22.9332"
                  y1="17.9293"
                  x2="22.9332"
                  y2="43.5967"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2ABDFE" />
                  <stop offset="1" stop-color="#1A90FD" />
                </linearGradient>
                <clipPath id="clip0_1_17287">
                  <rect
                    width="45.2946"
                    height="45.2946"
                    fill="white"
                    transform="matrix(-1 0 0 1 45.5808 0.566895)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p class="font-primary font-bold text-[23.839px]">Good</p>
          </div>
          <button
            class="mb-2 py-2.5 mt-5 px-8 bg-none text-primary border border-[#FFF] rounded-full text-[18px] font-semibold"
          >
            Jacksmith@exampletest.one
          </button>
          <p class="font-primary font-bold text-[23.839px] mb-2">Ok</p>
          <p class="font-primary text-[16px] mb-2">
            Good emails are valid existing emails. It is safe to send emails to them
          </p>
          <a class="font-primary font-bold cursor-pointer">Learn more >></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const countryCode = [
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "United States",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];

const tab = ref(1);
const tagArray = ref([]);
const fill = { gradient: ["green"] };
const textAreaValue = ref("");

const changeTab = (_id) => {
  tab.value = _id;
};
const openFileDialog = () => {};
const fileChange = (e) => {
  console.log(e);
};
const getEmailList = (e) => {
  textAreaValue.value = "";
  var value = e.target.value.trim();
  value = value.split("," || "`\n`");
  var tmpArray = [];
  for (var i = 0; i < value.length; i++) {
    if (value[i] != "") tmpArray.push(value[i]);
  }
  tagArray.value = tmpArray;
};

const removeItem = (_key) => {
  var tmpArray = [];
  for (var i = 0; i < tagArray.value.length; i++) {
    if (tagArray.value[i] != _key) {
      tmpArray.push(tagArray.value[i]);
    }
  }
  tagArray.value = tmpArray;
};
</script>
