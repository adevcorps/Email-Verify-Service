<template>
  <div>
    <div class="xl:pl-60 pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <nav class="top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800 xl:pl-60">
        <img src="@/assets/images/home/clarifio.png" class="max-md:w-12" />
      </nav>
      <aside class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden -left-60 lg:left-0 lg:hidden xl:flex"></aside>
      <section class="p-6 xl:max-w-6xl xl:mx-auto">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>
