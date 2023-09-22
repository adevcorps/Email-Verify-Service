<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Payment method</h1>
      <p class="py-[9px] text-[16px] font-primary">Pay using saved biilling address.</p>
    </div>
  </div>
  <div class="w-full flex space-x-5">
    <div class="w-3/12">
      <div class="w-full mb-2">
        <p class="font-primary text-[#344054] text-[14px] font-semibold">Card details</p>
        <p class="font-primary text-[#344054] text-[14px]">
          Select default payment method.
        </p>
      </div>
    </div>
    <div class="w-4/12">
      <div
        class="w-full border-2 border-[#7F56D9] rounded-lg p-4 flex justify-between bg-[#F9F5FF] cursor-pointer mb-1"
      >
        <div class="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="32"
            viewBox="0 0 46 32"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3336 21.1444H11.5872L9.52784 13.0565C9.43009 12.6845 9.22255 12.3556 8.91725 12.2006C8.15535 11.811 7.31579 11.501 6.3999 11.3446V11.0332H10.824C11.4346 11.0332 11.8925 11.501 11.9689 12.0442L13.0374 17.8782L15.7824 11.0332H18.4524L14.3336 21.1444ZM19.9789 21.1444H17.3852L19.5209 11.0332H22.1146L19.9789 21.1444ZM25.4702 13.8343C25.5465 13.2898 26.0044 12.9784 26.5387 12.9784C27.3783 12.9002 28.2928 13.0566 29.0561 13.4448L29.514 11.2678C28.7508 10.9564 27.9112 10.8 27.1493 10.8C24.6319 10.8 22.8002 12.2006 22.8002 14.1444C22.8002 15.6231 24.0977 16.3995 25.0136 16.8673C26.0044 17.3337 26.3861 17.6451 26.3097 18.1114C26.3097 18.811 25.5465 19.1224 24.7846 19.1224C23.8687 19.1224 22.9528 18.8892 22.1146 18.4997L21.6567 20.678C22.5725 21.0662 23.5634 21.2226 24.4793 21.2226C27.3019 21.2994 29.0561 19.9002 29.0561 17.8001C29.0561 15.1553 25.4702 15.0003 25.4702 13.8343ZM38.1332 21.1444L36.0738 11.0332H33.8618C33.4038 11.0332 32.9459 11.3446 32.7932 11.811L28.9797 21.1444H31.6497L32.1826 19.667H35.4632L35.7685 21.1444H38.1332ZM34.2434 13.7562L35.0053 17.5669H32.8696L34.2434 13.7562Z"
              fill="#172B85"
            />
            <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7" />
          </svg>
        </div>
        <div class="w-8/12">
          <p
            class="text-[#53389E] font-primary text-[14px] font-semibold leading-[20px] mb-1"
          >
            Visa ending in 1234
          </p>
          <p class="text-[#53389E] font-primary text-[14px] leading-[20px] mb-1">
            Expiry 06/2024
          </p>
          <p class="text-[#53389E] font-primary text-[14px] leading-[20px] mb-1">
            Set as default <a>Edit</a>
          </p>
        </div>
        <div class="w-1/12">
          <div
            class="bg-[#7F56D9] w-[16px] h-[16px] rounded-full flex justify-center items-center"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="check">
                <path
                  id="Icon"
                  d="M8.33341 2.5L3.75008 7.08333L1.66675 5"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dataArray = ref([]);
const tmpArray = [
  {
    id: 0,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 1,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 2,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 3,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 4,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 5,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin risus dignissim erat congue lectus mauris accumsan tortor. Enim feugiat viverra auctor mi sit. Diam pretium fermentum ornare elementum. Amet imperdiet risus amet ridiculus feugiat. Lectus non amet eu nunc neque in vel. Aliquet consectetur",
    price: 78.99,
    quantity: 9,
  },
];
dataArray.value = tmpArray;

dataArray.value = tmpArray;
</script>
