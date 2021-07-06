const app = Vue.createApp({
  data() {
    return {
      name: "Sashin",
      age: 25,
      imageUrl:
        "https://images.unsplash.com/photo-1625517938252-6694341e45fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    };
  },
  methods: {
    genRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
