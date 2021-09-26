<template>
  <div>
    <img v-if="answer.image" :src="answer.image" alt="test image" />
    <div class="bg-dark"></div>

    <div class="indecision-container">
      <input
        @input="getAnswer($event.target.value)"
        type="text"
        placeholder="Hazme una pregunta"
      />
      <p>Reacuerda terminar con un signo de interrogacion (?)</p>

      <div>
        <h2>
          {{ question }}
        </h2>
        <h1 v-show="answer.answer">
          {{ answer.answer }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IIndesicionData } from "@/types/Interfaces";

export default {
  data(): IIndesicionData {
    return {
      question: "",
      answer: {
        answer: "",
        forced: false,
        image: "",
      },
    };
  },
  methods: {
    async getAnswer(event: string): Promise<void> {
      this.question = event;
      if (event.endsWith("?")) {
        this.answer = await fetch("https://yesno.wtf/api").then((response) =>
          response.json()
        );
      }
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 16px;
}

h1,
h2 {
  color: white;
}

h1 {
  font-size: 4rem;
  text-transform: uppercase;
}

h2 {
  margin-top: 150px;
}
</style>
