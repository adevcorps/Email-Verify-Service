<template>
  <div class="w-full flex justify-between mb-9">
    <div class="w-4/12">
      <h1 class="text-[20px] font-bold text-[#344054] font-primary">Order List</h1>
      <p class="py-[9px] text-[16px] font-primary">Please check your odering history.</p>
    </div>
  </div>

  <div class="overflow-x-auto mb-5">
    <table
      class="w-full font-primary text-sm text-left text-gray-500 border-y border-gray-200 rounded-lg"
    >
      <thead class="text-sm text-[#475467]">
        <tr>
          <th scope="col" class="px-6 py-3">Order No</th>
          <th scope="col" class="px-6 py-3">Order Date</th>
          <th scope="col" class="px-6 py-3">Order Time</th>
          <th scope="col" class="px-6 py-3">Total Amount</th>
        </tr>
      </thead>
      <tbody class="text-sm text-[#475467]"></tbody>
    </table>
  </div>
  <div class="w-full border border-gray-200 rounded-lg p-6 space-x-5"></div>
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
