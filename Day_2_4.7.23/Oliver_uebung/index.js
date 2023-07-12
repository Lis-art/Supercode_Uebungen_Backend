import cowsay from "cowsay";
import { hello } from "./lib/dialog.js";

hello();


import cowsay from "cowsay";

const kids_eyes = "..";
const mother_eyes = "OO";

export const hello = () => {
  console.log(
    cowsay.say({ text: "Should i get up today?", e: kids_eyes }),
    cowsay.think({ text: "But i hate Mondays", e: kids_eyes }),
    cowsay.say({ text: "Nah doesn't worth it.", e: kids_eyes }),
    cowsay.say({ text: "GET THE FUCK UP", e: mother_eyes })
  );
};