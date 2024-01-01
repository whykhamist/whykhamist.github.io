<template>
  <div class="max-w-xs">
    <TInput
      v-model="editor.name.value"
      :label="editor.name.name"
      :error="editor.name.error"
      :errorMessage="editor.name.errorMessage"
      innerClass="bg-light text-dark"
      @keyup.enter="validate"
    />
    <TInput
      v-model="editor.age.value"
      :label="editor.age.name"
      :error="editor.age.error"
      :errorMessage="editor.age.errorMessage"
      type="number"
      :min="0"
      :max="1000"
      hide-number-buttons
      innerClass="bg-light text-dark"
      @keyup.enter="validate"
    />
    <TInput
      v-model="editor.email.value"
      :label="editor.email.name"
      :error="editor.email.error"
      :errorMessage="editor.email.errorMessage"
      innerClass="bg-light text-dark"
      @keyup.enter="validate"
    />
    <div class="flex items-center justify-center gap-2">
      <TButton
        label="Validate"
        class="rounded-lg border border-primary bg-primary/25 px-3 py-1"
        @click="validate"
      />
      <TButton
        label="Reset"
        class="rounded-lg border border-warning bg-warning/25 px-3 py-1"
        @click="reset"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { InputField } from "@/scripts";

const editor = ref({
  name: new InputField().setName("Your Name").setRules("required|minLength:3"),
  age: new InputField().setName("Age").setRules("number|min:1|max:99"),
  email: new InputField().setName("Email Address").setRules("email"),
});

const validate = () => {
  Object.keys(editor.value).forEach((fieldName) => {
    editor.value[fieldName].validate();
  });

  return !Object.values(editor.value).some((field) => field.error);
};

const reset = () => {
  Object.values(editor.value).forEach((field) => field.reset());
};
</script>
