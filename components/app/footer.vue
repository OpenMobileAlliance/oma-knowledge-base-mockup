<template>
  <div :class="ui.megaFooter">
    <img src="/logo.png" alt="oma logo" :class="ui.img" />
    <div :class="ui.contentContainer">
      <ContentQuery path="/footer-content" v-slot="{ data }">
        <ContentRenderer :value="item" v-for="item in data" :class="ui.megaFooterContent" />
      </ContentQuery>
    </div>
  </div>

  <footer :class="ui.footer" v-bind="attrs">
    <UContainer :class="ui.container">
      <div :class="ui.copyrightContainer">
        <span :class="ui.copyright">
          Copyright &copy; &nbsp; <div>{{ year }}</div>.
        </span>
        <ClientOnly>
          <!-- <ColorMode :class="ui.colorMode" /> -->
        </ClientOnly>
        <AppSocialLinks :class="ui.socialLinks" />
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">

const date = new Date();
const year = date.getFullYear();

const config = {
  megaFooter: "relative border-t-2 dark:border-golden/[0.5] p-6 dark:bg-neutral-950/[0.3] overflow-hidden bottom-0",
  contentContainer: "relative z-30",
  megaFooterContent: "text-center z-40",
  img: "absolute bottom-0 md:-top-[220%] md:-left-64 size-[200%] md:size-[330%] opacity-20 object-cover md:object-contain z-20",
  footer: "py-1 sm:py-2 bottom-0 w-full bg-background/75 backdrop-blur border-t border-primary/[0.4] dark:border-primary/[0.4] z-50",
  container: "",
  copyrightContainer: "flex justify-center sm:items-center sm:justify-around",
  copyright: "text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center",
  colorMode: "",
  socialLinks: "hidden xl:flex",
};

const props = withDefaults(
  defineProps<{
    ui?: Partial<typeof config>;
    class?: any;
  }>(),
  {
    ui: () => ({}),
    class: undefined,
  },
);

const { ui, attrs } = useUI(
  "footer",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true,
);
</script>
