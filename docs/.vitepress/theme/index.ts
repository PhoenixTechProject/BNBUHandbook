import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
  extends: DefaultTheme,
  Layout,

  setup() {
  const { frontmatter } = toRefs(useData());
  const route = useRoute();

          giscusTalk({
              repo: 'PhoenixTechProject/BNBUHandbook',
              repoId: 'R_kgDOPe_glA',
              category: 'Announcements', // 或其他分类
              categoryId: 'DIC_kwDOPe_glM4CuPpv',
              mapping: 'pathname',
              strict: "1",
              inputPosition: 'top',
              lang: 'en',
              lightTheme: 'light',
              darkTheme: 'dark',
          }, {
              frontmatter,
              route
          }, true);
    }
};