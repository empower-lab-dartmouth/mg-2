import {atom, selector} from "recoil";
import {image} from "../models/image";
import {question} from "../models/question";

export const currentimage = atom<image>({
    key: "current-image",
    default:{
        label: "apple",
        path: "apple.jpeg",
    }
})

export const status = atom({
    key: "status",
    default: 1,
})

export const currentnode = atom<question>({
    key: "current-node",
    default: {
        question: "NA",
        yes: null,
        no: null,
    }
})