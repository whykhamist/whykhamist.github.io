<template>
  <div class="grid max-w-xs gap-5 rounded-lg px-3 py-2">
    <TInput
      label="Search"
      innerClass="!border-0 outline-transparent shadow-none "
    >
      <template #prepend>
        <TIcon
          name="search"
          class="transition-colors group-focus-within/inner:text-primary"
        />
      </template>
    </TInput>

    <TInput
      label="Search"
      class="box-border"
      innerClass="!border-x-0 !border-t-0 outline-transparent hover:border-gray-500/75 shadow-none rounded-none border-b-2 after:absolute after:pointer-events-none after:h-0.5 after:border-b-2 after:border-primary after:transition-all after:focus-within:scale-x-100 after:w-full after:scale-x-0 after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2"
    >
      <template #prepend>
        <TIcon
          name="search"
          class="transition-colors group-focus-within/inner:text-primary"
        />
      </template>
    </TInput>

    <TInput
      label="Search"
      innerClass="!border-x-0 !border-t-0 outline-transparent bg-gray-200 hover:border-gray-500/75 dark:bg-gray-700/25 rounded-none after:pointer-events-none border-b-2 after:absolute after:h-0.5 after:border-b-2 after:border-primary after:transition-all after:focus-within:scale-x-100 after:w-full after:scale-x-0 after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2"
    >
      <template #prepend>
        <TIcon
          name="search"
          class="transition-colors group-focus-within/inner:text-primary"
        />
      </template>
    </TInput>

    <TInput label="Search" innerClass="!rounded-full">
      <template #prepend>
        <TIcon
          name="search"
          class="transition-colors group-focus-within/inner:text-primary"
        />
      </template>
    </TInput>
  </div>
</template>
