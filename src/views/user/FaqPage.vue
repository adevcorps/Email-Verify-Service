<template>
  <header
    class="bg-[url('@/assets/images/contact/faq-header.png')] w-full bg-no-repeat bg-center bg-cover px-5 pt-16 pb-24 mb-36 max-md:px-5 max-md:pb-5"
  >
    <div class="w-1/2 mx-auto text-center">
      <img src="../../assets/images/contact/quotion.png" class="inline-block mb-16" />
      <p class="text-white font-primary text-[22px] leading-5 pb-1.5 mb-3">Support</p>
      <h1 class="text-white font-primary text-[48px] font-semibold mb-6">
        Everything you need to know
      </h1>
      <p class="text-white font-primary text-xl font-[400px] mb-10">
        Need something cleared up? Here are our most frequently asked questions.
      </p>
      <div class="relative w-7/12 mx-auto">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="w-full p-4 font-primary pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-[16px]"
          placeholder="Search"
          required
        />
      </div>
    </div>
  </header>
  <section>
    <div class="container mx-auto max-xl:max-w-[100%] max-xl:px-5">
      <div class="w-6/12 prose mx-auto text-center mb-44">
        <h3 class="font-primary text-primary text-4xl mt-0 mb-5">Frequently asked questions</h3>
        <p class="font-primary text-primary text-xl mb-16">Common questions about the Domain Search</p>
        <div class="w-full">
          <div class="flex justify-between mb-6">
            <div class="w-6/12 pr-4">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                First name
              </p>
              <input
                type="email"
                name="email"
                placeholder="First name"
                value=""
                class="flex py-2 px-3.5 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
            <div class="w-6/12 pl-4">
              <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
                Second name
              </p>
              <input
                type="text"
                name="second-name"
                placeholder="Second name"
                value=""
                class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
              />
            </div>
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Email
            </p>
            <input
              type="email"
              name="second-name"
              placeholder="You@company.com"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Password (8 to 30 characters)
            </p>
            <input
              type="password"
              name="password"
              placeholder="*************"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Confirm Password
            </p>
            <input
              type="password"
              name="password"
              placeholder="*************"
              value=""
              class="flex py-2 px-3.5 gap-2 self-stretch rounded-lg border border-[#D0D5DD] border-solid shadow-sm text-[#475467] font-primary text-[14px] font-semibold w-full"
            />
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Country
            </p>
            <select
              id="countries"
              class="bg-gray-50 border text-[#475467] font-primary text-[14px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Poland</option>
            </select>
          </div>
          <div class="w-full mb-6">
            <p class="text-[#344054] font-primary text-sm font-semibold my-1 text-left">
              Message
            </p>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm font-primary text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div class="w-full mb-6 flex flex-row items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none"
            />
            <p
              class="text-[#475467] font-primary text-[14px] font-semibold leading-5 pl-2 my-0"
            >
              Sign me up for news letter
            </p>
          </div>
          <div class="w-full mb-14 flex flex-row items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none"
            />
            <p
              class="text-[#475467] font-primary text-[14px] font-semibold leading-5 pl-2 my-0"
            >
              I have read, full understand, and accept the Terms of Service and the DPA.
            </p>
          </div>
          <button
            class="py-2.5 px-8 bg-[#2078BE] text-white rounded-md text-sm font-primary w-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
