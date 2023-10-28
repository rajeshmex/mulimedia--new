import React from "react";
import { Link } from "react-router-dom";

function Paymentform() {
  return (
    <div>
      <div class="flex justify-center items-center min-h-screen mt-7">
        <div class="h-auto w-80 bg-white p-3 rounded-lg shadow-2xl">
          <p class="text-xl font-semibold">Payment Details</p>
          <div class="input_text mt-6 relative">
            {" "}
            <input
              type="text"
              class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
              placeholder="John Row"
            />{" "}
            <span class="absolute left-0 text-sm -top-4">Cardholder Name</span>{" "}
            <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i>{" "}
          </div>
          <div class="input_text mt-8 relative">
            {" "}
            <input
              type="text"
              class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
              placeholder="0000 0000 0000 0000"
              data-slots="0"
              data-accept="\d"
              size="19"
            />{" "}
            <span class="absolute left-0 text-sm -top-4">Card Number</span>{" "}
            <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i>{" "}
          </div>
          <div class="mt-8 flex gap-5 ">
            <div class="input_text relative w-full">
              {" "}
              <input
                type="text"
                class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="mm/yyyy"
                data-slots="my"
              />{" "}
              <span class="absolute left-0 text-sm -top-4">Expiry</span>{" "}
              <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i>{" "}
            </div>
            <div class="input_text relative w-full">
              {" "}
              <input
                type="text"
                class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b "
                placeholder="000"
                data-slots="0"
                data-accept="\d"
                size="3"
              />{" "}
              <span class="absolute left-0 text-sm -top-4">CVV</span>{" "}
              <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i>{" "}
            </div>
          </div>
          <p class="text-lg text-center mt-4 text-gray-600 font-semibold">
            Payment amount:$12.98
          </p>
          <div class="flex justify-center mt-4">
            {" "}
            <button class="outline-none pay h-12 bg-orange-600 text-white mb-3 hover:bg-orange-700 rounded-lg w-1/2 cursor-pointer transition-all">
              <Link to={"/post/success"}>Pay</Link>
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paymentform;
