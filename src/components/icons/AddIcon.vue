<template>
  <button @click="addAccount" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border cursor-pointer border-blue-500 hover:border-transparent rounded">
    +
  </button>
</template>
<script setup lang="ts">
  import { useAccountsStore, type Account } from "../../stores/accounts";

  const accountsStore = useAccountsStore();
  const addAccount = () => {
    const account: Account = {
      id: Date.now(),
      labels: [{ text: "" }],
      type: "Локальная",
      login: "",
      password: "",
      isPasswordVisible: false,
    };
    accountsStore.addAccount(account);
  };
</script>
