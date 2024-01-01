<script setup>
import { ref } from "vue";
import { InputField } from "@/scripts";

const editor = ref({
  /**
   * set field's name to "First Name" and rules to required with minimum character length of 3.
   */
  firstName: new InputField()
    .setName("First Name")
    .setRules("required|minlength:3"),

  /**
   * middle name has no rules so validation will always return true.
   */
  middleName: new InputField().setName("Middle Name"),

  /**
   * Same with firstname, rules are set to required with a minimum of 3 characters long.
   */
  lastName: new InputField()
    .setName("Last Name")
    .setRules("required|minlength:3"),
});

/**
 * Basic validation function
 * This function should return true if all validation is successful.
 * 1. validate each field by calling the validate() function.
 * 2. check the "error" property if validation is successful.
 * 3. return the result;
 */
const validate = () => {
  editor.value.firstName.validate();
  editor.value.middleName.validate();
  editor.value.lastName.validate();

  return !(
    editor.value.firstName.error ||
    editor.value.middleName.error ||
    editor.value.lastName.error
  );
};

/**
 * Here's another way to validate each field without manually calling validate() on every item.
 * This function should return true if all validation is successful.
 */
const validateAuto = () => {
  /**
   * Validate Each Field
   * 1. Iterate each field by extracting keys using Object.keys. This creates an array of key names.
   * 2. Loop through the array with foreach.
   * 3. Then access the field from the editor object using the "fieldName" as key and call the validate() function.
   */
  Object.keys(editor.value).forEach((fieldName) => {
    editor.value[fieldName].validate();
  });

  /**
   * Return The Result
   * 1. Iterate each field with Object.values.
   * 2. Check if any of the field has an error using the "some" function.
   * 3. If any of the field has an error, the function will return true.
   * 4. We then invert the result with an "!" and return it.
   */
  return !Object.values(editor.value).some((field) => field.error);
};
</script>
