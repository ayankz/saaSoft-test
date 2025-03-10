<template>
  <div class="flex items-center justify-between gap-4 p-2 w-full text-gray-500">
    <span>Метки</span>
    <span>Тип записи</span>
    <span>Логин</span>
    <span>Пароль</span>
    <span></span>
  </div>
  <div class="flex items-center gap-4 p-2 w-full" v-for="account in accounts" :key="account.id">
    <input @blur="validate($event, account)" type="text" :value="account.labels.map((label) => label.text).join('; ')" class="border border-gray-300 rounded p-2 min-w-0" />
    <select class="border border-gray-300 rounded p-2 min-w-0" name="type" v-model="account.type">
      <option value="LDAP">LDAP</option>
      <option value="Локальная">Локальная</option>
    </select>
    <input type="text" :class="{ 'flex-1': account.password, 'flex-[2]': !account.password }" :value="account.login" class="border border-gray-300 rounded p-2 min-w-0" />
    <div v-if="account.type !== 'LDAP'" class="relative flex-1 min-w-0">
      <input :type="account.isPasswordVisible ? 'text' : 'password'" :value="account.password" class="w-full border border-gray-300 rounded p-2 pr-10" />
      <button @click="togglePassword(account)" type="button" class="absolute inset-y-0 right-2 flex items-center px-2 text-gray-500">
        <OpenEyeIcon v-if="account.isPasswordVisible" class="w-5 h-5 cursor-pointer" />
        <CloseEye v-else class="w-5 h-5 cursor-pointer" />
      </button>
    </div>
    <div class="flex justify-end flex-none w-10">
      <BasketIcon @click="removeAccount(account)" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import BasketIcon from "@/components/icons/BaksetIcon.vue";
  import OpenEyeIcon from "../components/icons/OpenEyeIcon.vue";
  import CloseEye from "../components/icons/CloseEye.vue";
  import { storeToRefs } from "pinia";
  import { useAccountsStore, type Account } from "@/stores/accounts";
  import { watch } from "vue";

  const accountsStore = useAccountsStore();
  const { accounts } = storeToRefs(accountsStore);
  const togglePassword = (account: Account) => {
    account.isPasswordVisible = !account.isPasswordVisible;
  };
  const validate = (event: Event, account: Account) => {
    const input = event.target as HTMLInputElement;
    const accountLabelText = account.labels.map((label) => label.text).join("; ");

    if (accountLabelText != input.value) {
      const newLabels = input.value
        .split("; ")
        .filter((text) => text.trim())
        .map((text) => ({ text }));
      accountsStore.updateAccount({ ...account, labels: newLabels });
    }
    const newLabels = input.value
      .split("; ")
      .filter((text) => text.trim())
      .map((text) => ({ text }));
    if (JSON.stringify(newLabels) !== JSON.stringify(account.labels)) {
      accountsStore.updateAccount({ ...account, labels: newLabels });
    }
  };
  const removeAccount = (account: Account) => accountsStore.removeAccount(account.id);
</script>
