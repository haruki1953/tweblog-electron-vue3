<script setup lang="ts">
import AuthUpdate from './components/AuthUpdate.vue'
import ImageConfig from './components/ImageConfig.vue'
import ImageNotUsedDelete from './components/ImageNotUsedDelete.vue'
import ImageAllOriginalDelete from './components/ImageAllOriginalDelete.vue'
import ProxyUpdate from './components/ProxyUpdate.vue'
import ProxyTest from './components/ProxyTest.vue'
import WebInfo from './components/WebInfo.vue'
</script>
<template>
  <div class="system-page">
    <div class="control-box">
      <div class="control-row">
        <WebInfo></WebInfo>
      </div>
      <div class="control-divider"></div>
      <div class="control-row">
        <AuthUpdate></AuthUpdate>
      </div>
    </div>
    <div class="control-box">
      <div class="control-row">
        <ImageConfig></ImageConfig>
      </div>
      <div class="control-divider"></div>
      <div class="control-row">
        <ImageNotUsedDelete></ImageNotUsedDelete>
      </div>
      <div class="control-divider"></div>
      <div class="control-row">
        <ImageAllOriginalDelete></ImageAllOriginalDelete>
      </div>
    </div>
    <div class="control-box">
      <div class="control-row">
        <ProxyUpdate></ProxyUpdate>
      </div>
      <div class="control-divider"></div>
      <div class="control-row">
        <ProxyTest></ProxyTest>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @use '../../styles/control.scss';
</style>
