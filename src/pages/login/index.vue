<template>
  <div class="container">
    <div class="logo">
      <img :src="logo" width="240" />
    </div>
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';
  import logo from '@/assets/icons/svg/logo.svg';

  const theme = localStorage.getItem('theme');

  if (theme == 'dark') {
    document.documentElement.classList.add('dark');
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.removeAttribute('arco-theme');
  }
</script>

<style lang="less" scoped>
  .container {
    display: flex;

    height: 100vh;

    .banner {
      width: 550px;

      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      display: flex;

      position: relative;

      padding-bottom: 40px;

      align-items: center;
      flex: 1;
      justify-content: center;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 100%;
    }
  }

  .logo {
    display: inline-flex;

    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;

    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;

      font-size: 20px;

      color: var(--color-fill-1);
    }
  }
</style>
