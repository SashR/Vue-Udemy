const app = Vue.createApp({
  data() {
    return {
      output: "",
      output2: "",
      output3: "",
    };
  },
  methods: {
    alertFn() {
      alert("alerted");
    },
    regInput(event) {
      this.output = event.target.value;
    },
    regInput2(event) {
      this.output2 = event.target.value;
    },
    regInput3() {
      this.output3 = this.output2;
    },
  },
});

app.mount("#assignment");
