<template>
  <div class="container flex flex-col gap-6 mx-auto p-4">
    <div class="flex gap-2 items-center">
      <div class="text-2xl font-bold">Мои проекты</div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border cursor-pointer border-blue-500 hover:border-transparent rounded">+</button>
    </div>
    <InfoBlock />
    <div class="grid grid-cols-5 gap-4 p-2 text-gray-500">
      <span>Метки</span>
      <span>Тип записи</span>
      <span>Логин</span>
      <span>Пароль</span>
      <span></span>
    </div>
    <div class="grid grid-cols-5 gap-4 p-2">
      <input type="text" class="border border-gray-300 rounded p-2" />
      <select class="border border-gray-300 rounded p-2" name="type" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input type="text" class="border border-gray-300 rounded p-2" />
      <input type="password" class="border border-gray-300 rounded p-2" />
      <BasketIcon />
    </div>
    <div class="grid grid-cols-5 gap-4 p-2">
      <input type="text" class="border border-gray-300 rounded p-2" />
      <select class="border border-gray-300 rounded p-2" name="type" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input type="text" class="border border-gray-300 rounded p-2" />
      <input type="password" class="border border-gray-300 rounded p-2" />
      <BasketIcon />
    </div>
    <div class="grid grid-cols-5 gap-4 p-2">
      <input type="text" class="border border-gray-300 rounded p-2" />
      <select class="border border-gray-300 rounded p-2" name="type" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input type="text" class="border border-gray-300 rounded p-2 col-span-2" />
      <BasketIcon />
    </div>
    <div class="grid grid-cols-5 gap-4 p-2">
      <input type="text" class="border border-gray-300 rounded p-2" />
      <select class="border border-gray-300 rounded p-2" name="type" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input type="text" class="border border-gray-300 rounded p-2 col-span-2" />
      <BasketIcon />
    </div>
  </div>
</template>
<script setup>
  import BasketIcon from "@/components/icons/BaksetIcon.vue";
  import InfoBlock from "@/components/InfoBlock.vue";
</script>
