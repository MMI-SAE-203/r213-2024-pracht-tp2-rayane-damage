<script setup lang="ts">
import type { MaisonRecord } from '@/types'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props: MaisonRecord = defineProps< MaisonRecord >()
</script>

<template>
  <div
  class="flex flex-col justify-start items-start flex-grow relative rounded-lg bg-white border-[1.5px] border-indigo-100"
>
  <div class="self-stretch flex-grow-0 flex-shrink-0 h-[200px]">
    <div
      class="w-[394.67px] h-[200px] absolute left-[-0.5px] top-[-0.5px] rounded-tl-lg rounded-tr-lg bg-gray-500"
    ></div>
    <img
      class="w-[394.67px] h-[235px] absolute left-[-0.5px] top-[-24.5px] object-cover"
    />
  </div>
  <div
    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[15px] px-5 py-[30px]"
  >
    <div class="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
      <div class="flex-grow-0 flex-shrink-0 w-[249px] h-[75px]">
        <div class="flex justify-start items-end w-[164.11px] absolute left-0 top-0 gap-0.5">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-indigo-500">
            £{{ prix }}
          </p>
        </div>
        <p
          class="w-[249px] absolute left-0 top-[43px] text-2xl font-semibold text-left text-gray-900"
        >
          {{ nomMaison }}
        </p>
      </div>
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-grow-0 flex-shrink-0 w-12 h-12"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="24.6666"
          cy="24"
          r="23.25"
          fill="white"
          stroke="#E0E7FF"
          stroke-width="1.5"
        ></circle>
        <path
          d="M16.9847 18.318C16.5668 18.7359 16.2353 19.232 16.0092 19.778C15.783 20.3239 15.6666 20.9091 15.6666 21.5C15.6666 22.091 15.783 22.6762 16.0092 23.2221C16.2353 23.7681 16.5668 24.2642 16.9847 24.682L24.6667 32.364L32.3487 24.682C33.1926 23.8381 33.6667 22.6935 33.6667 21.5C33.6667 20.3066 33.1926 19.162 32.3487 18.318C31.5047 17.4741 30.3601 17 29.1667 17C27.9732 17 26.8286 17.4741 25.9847 18.318L24.6667 19.636L23.3487 18.318C22.9308 17.9002 22.4347 17.5687 21.8888 17.3425C21.3428 17.1164 20.7576 17 20.1667 17C19.5757 17 18.9905 17.1164 18.4446 17.3425C17.8986 17.5687 17.4025 17.9002 16.9847 18.318V18.318Z"
          stroke="#6366F1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <p
      class="self-stretch flex-grow-0 flex-shrink-0 w-[354.67px] text-base text-left text-gray-500"
    >
      {{adresse}}
    </p>
    <svg
      width="355"
      height="2"
      viewBox="0 0 355 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.25" x2="354.667" y2="1.25" stroke="#E0E7FF" stroke-width="1.5"></line>
    </svg>
    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
      <div class="flex justify-start items-center flex-grow relative gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M15 9.375H3.75V5.3125C3.75124 4.89848 3.91625 4.50177 4.20901 4.20901C4.50177 3.91625 4.89848 3.75124 5.3125 3.75H14.6875C15.1015 3.75124 15.4982 3.91625 15.791 4.20901C16.0837 4.50177 16.2488 4.89848 16.25 5.3125V9.375H15Z"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.875 16.25V11.875C1.87696 11.2126 2.14098 10.5778 2.6094 10.1094C3.07781 9.64098 3.71256 9.37696 4.375 9.375H15.625C16.2874 9.37696 16.9222 9.64098 17.3906 10.1094C17.859 10.5778 18.123 11.2126 18.125 11.875V16.25"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1.875 16.25V15.9375C1.87572 15.6891 1.97473 15.451 2.15038 15.2754C2.32604 15.0997 2.56408 15.0007 2.8125 15H17.1875C17.4359 15.0007 17.674 15.0997 17.8496 15.2754C18.0253 15.451 18.1243 15.6891 18.125 15.9375V16.25"
            stroke="#6366F1"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{nbChambres}}</p>
      </div>
      <div class="flex justify-center items-center flex-grow relative gap-2">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <g clip-path="url(#clip0_32922_1307)">
            <path
              d="M4.16659 10H17.4999C17.7209 10 17.9329 10.0878 18.0892 10.2441C18.2455 10.4004 18.3333 10.6123 18.3333 10.8333V13.3333C18.3333 14.2174 17.9821 15.0652 17.3569 15.6904C16.7318 16.3155 15.884 16.6667 14.9999 16.6667H6.66659C5.78253 16.6667 4.93468 16.3155 4.30956 15.6904C3.68444 15.0652 3.33325 14.2174 3.33325 13.3333V10.8333C3.33325 10.6123 3.42105 10.4004 3.57733 10.2441C3.73361 10.0878 3.94557 10 4.16659 10V10Z"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.83325 10V4.16667C5.83325 3.72464 6.00885 3.30072 6.32141 2.98816C6.63397 2.67559 7.05789 2.5 7.49992 2.5H9.99992V4.375"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.16663 17.5L4.99996 16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17.5 17.5L16.6666 16.25"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_32922_1307">
              <rect width="20" height="20" fill="white" transform="translate(0.833252)"></rect>
            </clipPath>
          </defs>
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{nbSdb}}</p>
      </div>
      <div class="flex justify-end items-center flex-grow relative gap-2">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_32922_1315)">
            <path
              d="M9.49823 15.5436L4.12305 10.1684C3.51465 9.56002 3.51465 8.4398 4.12305 7.83139L9.49823 2.45621C10.1066 1.84781 11.2269 1.84781 11.8353 2.45621L17.2104 7.83139C17.8189 8.4398 17.8189 9.56002 17.2104 10.1684L11.8353 15.5436C11.2269 16.152 10.1066 16.152 9.49823 15.5436V15.5436Z"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2.6665 13.1716L7.03022 17.5353"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.3027 17.5353L18.6664 13.1716"
              stroke="#6366F1"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_32922_1315">
              <rect width="20" height="20" fill="white" transform="translate(0.666626)"></rect>
            </clipPath>
          </defs>
        </svg>
        <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-gray-600">{{surface}} m²</p>
      </div>
    </div>
  </div>
</div>
</template>
