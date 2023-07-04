import { names } from "./data.js";
import { numbers } from "./data.js";
import {firstElementNames} from "./function.js"
console.log(firstElementNames());

import {firstElementNumbers} from "./function.js"
console.log(firstElementNumbers());
/* 
import {notLastName} from "./function.js";
console.log(notLastName(names));

import {notLastNumber} from "./function.js";
console.log(notLastNumber()); */

/* 
import {onlyLastname} from "./function.js"
console.log(onlyLastname());

import {onlyLastNumber} from "./function.js"
console.log(onlyLastNumber());
 */

import { allMinusLastName } from "./function.js";
console.log(allMinusLastName());

import { allMinusLastNumber } from "./function.js";
console.log(allMinusLastNumber());


import { removeElement } from "./function.js";
console.log(removeElement(names, "Eric"));

import { removeElement2 } from "./function.js";
console.log(removeElement2(numbers, 1));


import { spreadArray } from "./function.js";
console.log(spreadArray(numbers));

import { calcArray } from "./function.js";
console.log(calcArray(numbers));


import { randomNumber } from "./function.js";
console.log(randomNumber());

import { mitString } from "./function.js";
console.log(mitString("hello"));

import { mitStringAllesGross } from "./function.js";
console.log(mitStringAllesGross("hello"));

import { checkParam } from "./function.js";
console.log(checkParam("Test", "t"));
console.log(checkParam("Test", "q"));