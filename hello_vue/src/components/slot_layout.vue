<template>
  <div class="p-4 flex flex-col justify-center items-center">
    <header class="text-2xl font-medium text-green-400">
      <slot name="header"></slot>
    </header>
    <main class="mt-8 text-xl font-medium text-green-600">
      <slot></slot>
    </main>
    <footer class="mt-8 text-md font-medium text-green-800">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
