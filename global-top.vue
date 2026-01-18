<template>
  <div class="ssa-logo-global">
    <a href="https://fwdays.com/">
      <img src="/fw_logo.svg" alt="FW Logo" />
    </a>
  </div>
  <div class="pm-logo-global">
    <a href="https://www.youtube.com/c/programmingmentorua">
      <img src="/pm-logo.jpg" alt="Programming Mentor Logo" />
    </a>
  </div>
  <div class="lang-toggle-global">
    <LanguageSelector />
  </div>
</template>

<style>
.ssa-logo-global {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 100;
  pointer-events: auto;
}

.ssa-logo-global img {
  height: 13px;
  width: auto;
}

.ssa-logo-global a {
  text-decoration: none;
  border: 2.4px solid transparent;
  display: block;
}

.ssa-logo-global a:hover {
  border-color: var(--slidev-theme-primary);
}

.pm-logo-global {
  position: fixed;
  bottom: 10px;
  left: 20px;
  z-index: 100;
  pointer-events: auto;
}

.pm-logo-global img {
  height: 24px;
  width: 24px;
  border-radius: 9999px;
}

.pm-logo-global a {
  text-decoration: none;
  border: 2.4px solid transparent;
  display: block;
}

.pm-logo-global a:hover {
  border-color: var(--slidev-theme-primary);
}

.lang-toggle-global {
  position: fixed;
  top: 2px;
  right: 4px;
  z-index: 100;
  pointer-events: auto;
  font-size: 10px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 14px;
  min-width: 0;
  min-height: 0;
  max-width: none;
  max-height: 14px;
  padding: 6px 8px;
  margin: 0;
  white-space: nowrap;
  box-sizing: content-box;
  transform: none;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 4px;
}
</style>
