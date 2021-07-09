const app = Vue.createApp({
  data() {
    return {
      table: [
        ["Mark", 16, [95, "Math"]],
        ["Jesse", 17, [32, "Eng"]],
        ["Carl", 19, [9, "Science"]],
        ["Stacey", 15, [87, "Math"]],
      ],
    };
  },
});

app.mount("#vueApp");
