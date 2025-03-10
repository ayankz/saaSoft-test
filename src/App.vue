<template>
  <div class="container flex flex-col gap-6 mx-auto p-4">
    <div class="flex gap-2 items-center">
      <div class="text-2xl font-bold">Мои проекты</div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border cursor-pointer border-blue-500 hover:border-transparent rounded">+</button>
    </div>
    <InfoBlock />
    <AccountList />
  </div>
</template>
<script setup>
  import InfoBlock from "@/components/InfoBlock.vue";
  import AccountList from "@/components/AccountList.vue";
</script>
