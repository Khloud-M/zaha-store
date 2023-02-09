import getters from "@/store/Categery/getters.js";
import actions from "@/store/Categery/actions.js";
import mutations from "@/store/Categery/mutations.js";
export default {
  namespaced: true,
  state() {
    return {
      chooseCategory: [
        {
          id: "c1",
          itemName: "Jellabuya",
        //   img: require("@/assest/je.jpg"),
        },
        {
          id: "c2",
          itemName: "abaya",
        //   img: require("@/assest/cat2.png"),
        },
        {
          id: "c3",
          itemName: "cloche",
        //   img: require("@/assest/cat3.jpg"),
        },
        {
          id: "c4",
          itemName: "farasha",
        //   img: require("@/assest/cat4.jpg"),
        },
        {
          id: "5",
          itemName: "sale up to 60%",
        //   img: require("@/assest/cat5.jpg"),
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
