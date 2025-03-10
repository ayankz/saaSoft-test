<template>
  <div class="container flex flex-col gap-6 mx-auto p-4">
    <div class="flex gap-2 items-center">
      <div class="text-2xl font-bold">Учетные записи</div>
      <AddIcon />
    </div>
    <InfoBlock />
    <AccountList />
  </div>
</template>
<script setup>
  import InfoBlock from "@/components/InfoBlock.vue";
  import AccountList from "@/components/AccountList.vue";
  import AddIcon from "./components/icons/AddIcon.vue";
</script>
