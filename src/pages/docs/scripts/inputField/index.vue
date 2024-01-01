<template>
  <PageBlock title="Input Field" :dir="dirs">
    <template #intro>
      <div class="">
        A Class helper that is mainly used for input field validation.
      </div>

      <div class="flex items-center gap-2 px-3 py-1">
        <CompLink label="TInput" :to="{ name: 'input', hash: '#validation' }" />
      </div>
    </template>
    <div class="grid gap-5">
      <div class="text-3xl font-bold">API</div>

      <div id="properties" class="rounded-lg border border-foreground/25 p-1">
        <table class="w-full">
          <caption class="px-3 text-start">
            <div class="text-3xl font-bold">Properties</div>
          </caption>
          <thead>
            <tr
              class="divide-x divide-foreground/25 border-b border-foreground/25 text-xl [&>th]:px-2 [&>th]:py-1 [&>th]:text-start"
            >
              <th class="w-32">Name</th>
              <th class="w-44">Type</th>
              <th class="">Description</th>
            </tr>
          </thead>
          <tbody
            class="divide-y divide-foreground/25 [&>tr>td:nth-child(2)]:font-mono [&>tr>td:nth-child(2)]:text-xs [&>tr>td:nth-child(2)]:font-semibold [&>tr>td:nth-child(2)]:text-blue-600 dark:[&>tr>td:nth-child(2)]:text-blue-300 [&>tr>td]:px-2 [&>tr>td]:py-1 first:[&>tr>td]:font-bold last:[&>tr>td]:leading-tight [&>tr]:divide-x [&>tr]:divide-foreground/25 odd:[&>tr]:bg-foreground/10"
          >
            <tr>
              <td>name</td>
              <td>String</td>
              <td>
                The name of the input field. This is also used in generating the
                error message.
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>Any</td>
              <td>The value of the input field.</td>
            </tr>
            <tr v-if="false">
              <td>Initial</td>
              <td>Any</td>
              <td>The initial value when class is first initialized.</td>
            </tr>
            <tr v-if="false">
              <td>id</td>
              <td>String</td>
              <td>Unique id for the input field</td>
            </tr>
            <tr>
              <td>rules</td>
              <td>String | Array</td>
              <td>Rules to use for validation.</td>
            </tr>
            <tr>
              <td>error</td>
              <td>Boolean</td>
              <td>Used to check if input has error.</td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>String</td>
              <td>The error message when validation fails.</td>
            </tr>
            <tr v-if="false">
              <td>type</td>
              <td>String</td>
              <td>The type of input field used.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="functions" class="rounded-lg border border-foreground/25 p-1">
        <table class="w-full">
          <caption class="px-3 text-start">
            <div class="text-3xl font-bold">Functions</div>
          </caption>
          <thead>
            <tr
              class="divide-x divide-foreground/25 border-b border-foreground/25 text-xl [&>th]:px-2 [&>th]:py-1 [&>th]:text-start"
            >
              <th class="w-32">Name</th>
              <th>Params</th>
              <th class="w-44">Returns</th>
              <th class="w-64">Description</th>
            </tr>
          </thead>
          <tbody
            class="divide-y divide-foreground/25 [&>tr>td:nth-child(2)]:font-mono [&>tr>td:nth-child(2)]:text-xs [&>tr>td:nth-child(2)]:font-semibold [&>tr>td:nth-child(2)]:text-blue-600 dark:[&>tr>td:nth-child(2)]:text-blue-300 [&>tr>td]:px-2 [&>tr>td]:py-1 first:[&>tr>td]:font-bold last:[&>tr>td]:leading-tight [&>tr]:divide-x [&>tr]:divide-foreground/25 odd:[&>tr]:bg-foreground/10"
          >
            <tr class="!bg-primary/25">
              <td>Constructor</td>
              <td>(initialValue: Any = null)</td>
              <td>New InputField Instance</td>
              <td>
                The constructor initializes a new InputField instance and takes
                an optional initial value.
              </td>
            </tr>
            <tr>
              <td>setName</td>
              <td>(name: String)</td>
              <td>Current Instance</td>
              <td>Sets the name of the input field.</td>
            </tr>
            <tr v-if="false">
              <td>setId</td>
              <td>(id: String)</td>
              <td>Current Instance</td>
              <td>
                Set custom ID for the field. This is initially called in the
                constructor and set using Helpers.uniqid()
              </td>
            </tr>
            <tr>
              <td>setValue</td>
              <td>(value: Any, deepCopy: Boolean = true)</td>
              <td>Current Instance</td>
              <td>Update the value of the input field.</td>
            </tr>
            <tr v-if="false">
              <td>setInitialValue</td>
              <td>(value: Any)</td>
              <td>Current Instance</td>
              <td>
                Sets the initial value of the input field. This is used when
                resetting the input field value.
              </td>
            </tr>
            <tr>
              <td>setRules</td>
              <td>(rules: String | Array)</td>
              <td>Current Instance</td>
              <td>Sets the rules for validation.</td>
            </tr>
            <tr v-if="false">
              <td>setType</td>
              <td>(type: String)</td>
              <td>Current Instance</td>
              <td>Sets the type of input used.</td>
            </tr>
            <tr>
              <td>reset</td>
              <td>(value: Any = null)</td>
              <td>Current Instance</td>
              <td>Resets value and errors.</td>
            </tr>
            <tr>
              <td>resetError</td>
              <td>N/A</td>
              <td>Current Instance</td>
              <td>Resets error and errorMessage</td>
            </tr>
            <tr>
              <td>setError</td>
              <td>(errorMessage: String)</td>
              <td>Current Instance</td>
              <td>Sets the errorMessage value and error to true,</td>
            </tr>
            <tr>
              <td>getName</td>
              <td>N/A</td>
              <td>String</td>
              <td>Gets the name of the input field.</td>
            </tr>
            <tr>
              <td>validate</td>
              <td>(rules: String | Array = null)</td>
              <td>Boolean</td>
              <td class="grid gap-3">
                <p>
                  Run validation. If <b>rule</b> param is not set, rules set by
                  <b>"setRules"</b> func will be used.
                </p>
                <p class="text-sm italic">
                  Returns true if validation is successful and false otherwise..
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="rounded-lg border border-warning bg-warning/25 px-3 py-1">
        This script uses the <b>jvalidate</b> class to perform validation on
        field values.
      </div>

      <Usage id="usage" @load="onUsageLoad" />
    </div>
  </PageBlock>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const PageBlock = defineAsyncComponent(() =>
  import("../../utils/pageBlock.vue")
);
const CompLink = defineAsyncComponent(() => import("../../utils/compLink.vue"));
const InfoCard = defineAsyncComponent(() => import("../../utils/infoCard.vue"));

const Usage = defineAsyncComponent(() => import("./usage/index.vue"));

const dirs = ref([
  {
    label: "Properties",
    name: "properties",
  },
  {
    label: "Functions",
    name: "functions",
  },
]);

const onUsageLoad = (e) => {
  dirs.value.push({
    label: "Usage",
    name: "usage",
    sub: e.dirs,
  });
};
</script>
