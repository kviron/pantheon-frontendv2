import { createStore } from "@tauri-apps/plugin-store";
// when using `"withGlobalTauri": true`, you may use
// const { createStore } = window.__TAURI__.store;

// create a new store or load the existing one
export const userStore = await createStore("store.bin", {
  // we can save automatically after each store modification
  // @ts-ignore
  autoSave: 1000,
});
