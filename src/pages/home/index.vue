<template>
  <Page class="flex flex-col items-center">
    <div
      class="grid max-h-screen w-full snap-y snap-mandatory gap-10 overflow-y-scroll text-center"
    >
      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section :title="$system.product_name">
          <div class="py-4">
            Version {{ version }} (Commit Date: {{ commitDate }})
          </div>
          Welcome to the comprehensive documentation for our web template
          components! This guide is designed to provide you with detailed
          insights into each component, including their properties, events,
          methods, and other essential information. Whether you are a beginner
          or an experienced developer, this documentation aims to be your go-to
          resource for understanding and effectively utilizing our web template
          components.
        </Section>
      </div>

      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section title="Getting Started">
          Before diving into the details of individual components, let's get
          started with an overview of the web template and its core concepts.
          This section will help you set up the environment, understand the
          overall structure, and familiarize yourself with the key principles
          guiding the development of these components.
        </Section>
      </div>

      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section title="Component Overview">
          In this section, we will explore each component in-depth, outlining
          their properties, events, and methods. Understanding these aspects is
          crucial for harnessing the full potential of our web template and
          customizing it to meet your specific needs.
        </Section>
      </div>

      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section title="Sample Code">
          To facilitate a seamless integration of our components into your
          projects, we provide sample code snippets demonstrating the proper
          usage of each feature. These examples serve as practical guides,
          illustrating how to implement various functionalities and showcasing
          best practices for optimal performance.
        </Section>
      </div>

      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section title="Template Version Information">
          This documentation is based on Version {{ version }} of the web
          template, with a commit date of {{ commitDate }}. Please ensure that
          you are referring to the appropriate version for accurate and relevant
          information.
        </Section>
      </div>

      <div class="mx-auto flex h-screen max-w-5xl snap-center items-center">
        <Section title="Let's Get Started!">
          Now that you have a roadmap for navigating this documentation, let's
          embark on a journey to explore and leverage the powerful components
          within our web template. Whether you are building a new project or
          enhancing an existing one, we're confident that this documentation
          will be a valuable companion on your development path.
          <div class="py-2 font-semibold">Happy coding!</div>
        </Section>
      </div>
    </div>
  </Page>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import { Helpers } from "@/scripts";

const Section = defineAsyncComponent(() => import("./section.vue"));

const version = ref("1.0");
const commitDate = ref(Helpers.formatDate("11/29/2023"));
</script>
