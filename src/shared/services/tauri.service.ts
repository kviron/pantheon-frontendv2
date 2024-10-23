import { userStore } from "@/shared/store/user.store.ts";
import { Theme } from "@tauri-apps/api/window";

class TauriService {
  async getTheme() {
    return await userStore.get<Theme>("theme");
  }

  async setTheme(value: Theme) {
    await userStore.set("theme", value);
  }
}

export const tauriService = new TauriService();
