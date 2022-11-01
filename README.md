# Vue3 on the way

一直用`vue`比较多，也比较喜欢，首先因为是类似开箱即用的框架，无需对`js`进行过多的深入学习即可进行开发工作，其次也因为是国人开发的，多多少少也会有点影响，声明，我不是狭隘的爱国主义，只是觉得在众多的国外框架中能杀出一条路，还是值得肯定和支持的。至于其与其他框架优劣对比，因为我用其他框架开发的经验确实不多，此处不作对比。从去年(2021)开始，推出了`Vue3.x`版本，很多公司也都陆续加入到了升级行列，但由于其升级改动较多，包括重写了数据双向绑定的底层代码、compisition api 是使用等，所以迟迟未进行实际开发应用，最近在把之前帮老婆开发的工具升级，启用了`Vue3`，因此准备在此记录并学习。

## 创建项目

1. vite

   ```shell
   npm init vite@latest
   ```

   ```shell
   ? Project name: » vite-project
   √ Project name: ... vite-project
   ? Select a framework: » - Use arrow-keys. Return to submit.
      Vanilla
   >   Vue
      React
      Preact
      Lit
      Svelte
      Others
   √ Select a framework: » Vue
   ? Select a variant: » - Use arrow-keys. Return to submit.
      JavaScript
   >   TypeScript
      Customize with create-vue ↗
      Nuxt ↗
   √ Select a variant: » TypeScript
   ```

2. 脚手架

   ```shell
   npm init vue@latest
   ```

   ```shell
   ? Project name: » vue-project
   √ Project name: ... vue-project
   ? Add TypeScript? » No / Yes
   √ Add TypeScript? ... No / Yes
   ? Add JSX Support? » No / Yes
   √ Add JSX Support? ... No / Yes
   ? Add Vue Router for Single Page Application development? » No / Yes
   √ Add Vue Router for Single Page Application development? ... No / Yes
   ? Add Pinia for state management? » No / Yes
   √ Add Pinia for state management? ... No / Yes
   ? Add Vitest for Unit Testing? » No / Yes
   √ Add Vitest for Unit Testing? ... No / Yes
   ? Add Cypress for both Unit and End-to-End testing? » No / Yes
   √ Add Cypress for both Unit and End-to-End testing? ... No / Yes
   ? Add ESLint for code quality? » No / Yes
   √ Add ESLint for code quality? ... No / Yes
   ```
