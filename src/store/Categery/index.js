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
          img: require("@/assets/image/je.jpg"),
        },
        {
          id: "c2",
          itemName: "abaya",
          img: require("@/assets/image/cat2.png"),
        },
        {
          id: "c3",
          itemName: "cloche",
          img: require("@/assets/image/cat3.jpg"),
        },
        {
          id: "c4",
          itemName: "farasha",
          img: require("@/assets/image/cat4.jpg"),
        },
        {
          id: "5",
          itemName: "sale up to 60%",
          img: require("@/assets/image/cat5.jpg"),
        },
      ],
      prodcuts: [
        {
          id: "p1",
          itemName: "Jellabuya",
          img: require("@/assets/image/item1.jpg"),
          collectImg: [
            "@/assets/image/repeate1.jpg",
            "@/assets/image/repeate2.jpg",
            "@/assets/image/repeate3.jpg",
            "@/assets/image/repeate4.jpg",
          ],
          soonMoney: 219,
          oldPrice: 437,
          sale: "30% off",
          not: "notAvalible",
          rate: 1,
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 5,
          code: "#J0745",
          imageSmall: [
            "@/assest/item1.jpg",
            "@/assest/item1.jpg",
            "@/assest/item1.jpg",   
          ],
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p2",
          itemName: "Sadu linen abaya",
          img: require("@/assets/image/item2.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney: 219,
          oldPrice: 437,
          sale: "40% off",
          not: "notAvalible",
          rate: 5,
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 10,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']
        },
        {
          id: "p3",
          itemName: "Sadu linen abaya",
          img: require("@/assets/image/item3.jpg"),
          collectImg: [
            require("@/assets/image/repeate1.jpg"),
            require("@/assets/image/repeate2.jpg"),
            require("@/assets/image/repeate3.jpg"),
            require("@/assets/image/repeate4.jpg"),
          ],
          soonMoney: 219,
          oldPrice: 437,
          not: "notAvalible",
          sale: "50% off",
          rate: 2,
          size: ["M", "S", "L", "XL", "XXL"],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 5,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p4",
          itemName: "Sadu linen abaya",
          img: require("@/assets/image/item4.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney: 219,
          oldPrice: 437,
          not: "notAvalible",
          sale: "Not Avalible",
          rate: 1,
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 7,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p5",
          itemName: "Jellabuya",
          img: require("@/assets/image/item5.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney:219,
          oldPrice :437,
          sale: "30% off",
          not: "notAvalible",
          rate: 2,
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 3,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p6",
          itemName: "Sadu linen abaya",
          img: require("@/assets/image/item6.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney:219,
          oldPrice :437,
          not: "notAvalible",
          sale: "40% off",
          rate: 1,
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 9,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p7",
          itemName: "Sadu linen abaya",
          img: require("@/assets/image/item7.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney:219,
          oldPrice :437,
          sale: "50% off",
          rate: 3,
          not: "notAvalible",
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 5,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']

        },
        {
          id: "p8",
          itemName: "Sadu linen abaya",
          // img:require('@/assest/item8.jpg') ,
          img: require("@/assets/image/item8.jpg"),
        collectImg: [
          "@/assets/image/repeate1.jpg",
          "@/assets/image/repeate2.jpg",
          "@/assets/image/repeate3.jpg",
          "@/assets/image/repeate4.jpg",
        ],
          soonMoney:219,
          oldPrice :437,
          sale: "Not Avalible",
          rate: 1,
          not: "notAvalible",
          size: [52, 54, 56, 58, 60],
          description:
            "A black abaya with a modern and distinctive design with sadu details and soft beads from the sleeves and a longitudinal suggestion that gives you a feeling of comfort and freedom of movement. It is woven from linen fabric.",
          quantity: 5,
          code: "#J0745",
          color:['#000' , '#0000FF' , '#FF0000']
        },
      ],
      SizeFilter: ["S", "X", "Xl", "XXl", 40, 44, 48, 50, 52,55],
      colours:['#0000FF', '#000080' ,'#FF00FF' ,'#800080' ,'#C0C0C0' ,
      '#FFFFFF', '#808000' ,'#C0C0C0' ,'#FFF221', '#800000', '#FF0000	' ,'#000000'],
    };
  },
  getters,
  mutations,
  actions,
};
