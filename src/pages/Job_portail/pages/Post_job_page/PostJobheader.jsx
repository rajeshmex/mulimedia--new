import React from "react";
import { useLocation } from "react-router-dom";

function PostJobheader() {
  const Location = useLocation();

  console.log(location.pathname);

  return (
    <ol class="items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28">
      <li class="flex items-center text-primary dark:text-primary space-x-2.5">
        <span class="flex items-center justify-center w-8 h-8 border border-primary rounded-full shrink-0 dark:border-blue-500">
          1
        </span>
        <span>
          <h3 class="font-medium leading-tight">User info</h3>
          <p class="text-sm">Step details here</p>
        </span>
      </li>
      <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          2
        </span>
        <span>
          <h3 class="font-medium leading-tight">Payment info</h3>
          <p class="text-sm">Step details here</p>
        </span>
      </li>
      <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
          3
        </span>
        <span>
          <h3 class="font-medium leading-tight">Success</h3>
          <p class="text-sm">Step details here</p>
        </span>
      </li>
    </ol>
  );
}

export default PostJobheader;
