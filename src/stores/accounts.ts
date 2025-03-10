import { defineStore } from "pinia";
import { ref } from "vue";
export interface Account {
  id: number;
  labels: { text: string }[];
  type: "LDAP" | "Локальная";
  login: string;
  password: string | null;
  isPasswordVisible: boolean;
}
export const useAccountsStore = defineStore(
  "accounts",
  () => {
    const accounts = ref<Account[]>([
      // { id: 1, labels: [{ text: "XXX" }, { text: "MMMMM" }], type: "LDAP", login: "ivan@email.com", password: null, isPasswordVisible: false },
      // { id: 2, labels: [{ text: "XXX" }], type: "Локальная", login: "anna@email.com", password: "5678", isPasswordVisible: false },
      // { id: 3, labels: [{ text: "YYYYY" }], type: "Локальная", login: "anna@email.com", password: "5678", isPasswordVisible: false },
    ]);

    const addAccount = (account: Account) => {
      accounts.value.push(account);
    };

    const removeAccount = (id: number) => {
      accounts.value = accounts.value.filter((acc) => acc.id !== id);
    };
    const updateAccount = (updatedAccount: Account) => {
      const index = accounts.value.findIndex((acc) => acc.id === updatedAccount.id);
      if (index !== -1) {
        accounts.value[index] = updatedAccount;
      }
    };

    return { accounts, addAccount, removeAccount, updateAccount };
  },
  { persist: true },
);
