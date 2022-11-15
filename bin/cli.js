#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

if (!("sides" in args)) {
	args.sides = 6;
}

if (!("dice" in args)) {
	args.dice = 2;
}

if (!("rolls" in args)) {
	args.rolls = 1;
}

console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));

