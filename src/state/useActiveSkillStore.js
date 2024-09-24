import { create } from "zustand";

const useActiveSkillStore = create((set) => ({
  activeSkill: "web-dev",
  setActiveSkill: (skill) => set({ activeSkill: skill }),
}));

export default useActiveSkillStore;
