<template>
  <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen bg-black">
    <div class="col-span-1">
      <div class="flex flex-col items-center justify-center space-y-6">
        <div class="h-52"></div>
        <a class="text-9xl font-bold text-white block transition-all ease-in-out duration-75 transform hover:translate-x-6" href="">Home</a>
        <a class="text-9xl font-bold text-red-600 block transition-all ease-in-out duration-75 transform hover:translate-x-6" href="">About</a>
        <nuxt-link class="text-9xl font-bold text-red-600 block pr-28 transition-all ease-in-out duration-75 transform hover:translate-x-6" to="/blog">Blog</nuxt-link>
      </div>
    </div>
    <div class="col-span-2 flex justify-end">
      <img class="h-2/4" src="~/assets/images/mahdi.png" alt="">
    </div>
  </div>
</template>












// <div class="bg-black min-h-screen">
//     <div class="">
//       <a class="text-6xl text-white block" href="">Home</a>
//       <a class="text-6xl text-white block" href="">About</a>
//       <a class="text-6xl text-white block" href="">Blog</a>
//     </div>
//     <div class="flex justify-end">
//       <img class="h-3/4 w-2/3" src="~assets/images/mahdi.png" alt="">
//     </div>
//   </div>