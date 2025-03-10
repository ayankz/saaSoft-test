import { defineStore } from "pinia";
import { ref } from "vue";
export interface Account {
  id: number;
  label: string;
  type: "LDAP" | "Локальная";
  login: string;
  password: string | null;
  isPasswordVisible: boolean;
}
export const useAccountsStore = defineStore("accounts", () => {
  const accounts = ref<Account[]>([
    { id: 1, label: "Рабочий", type: "LDAP", login: "ivan@email.com", password: null, isPasswordVisible: false },
    { id: 2, label: "Личный", type: "Локальная", login: "anna@email.com", password: "5678", isPasswordVisible: false },
    { id: 3, label: "Личный", type: "Локальная", login: "anna@email.com", password: "5678", isPasswordVisible: false },
  ]);

  const addAccount = (account: Account) => {
    accounts.value.push(account);
  };

  const removeAccount = (id: number) => {
    accounts.value = accounts.value.filter((acc) => acc.id !== id);
  };

  return { accounts, addAccount, removeAccount };
});
