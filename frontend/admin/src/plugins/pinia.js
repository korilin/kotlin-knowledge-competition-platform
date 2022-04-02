import { defineStore } from "pinia";
import HttpService from "../utils/axios-service";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      kkcpAdminToken: null,
    };
  },
});

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      questionTypes: [],
      questionLevels: [],
    };
  },
  getters: {
    getTypeById: (state) => {
      return (typeId) =>
        state.questionTypes.find((type) => type.id == typeId);
    },
    getLevelById: (state) => {
      return (levelId) =>
        state.questionLevels.find((level) => level.id == levelId);
    },
  },
});
export const useContestsStore = defineStore("contests", {
  state: () => {
    return {
      init: false,
      data: [],
    };
  },
});

export const useQuestionsStore = defineStore("questions", {
  state: () => ({
    init: false,
    data: [],
  }),
  actions: {
    reQueryData() {
      this.init = false
      this.data = []
    }
  }
});
