import { codeWidget } from "@silverbulletmd/silverbullet/syscalls";

export async function refreshWidgets() {
  try {
    await codeWidget.refreshAll();
  } catch (error) {
    console.error("Error refreshing widgets:", error);
  }
}
