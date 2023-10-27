import { ORDER } from "../actionTypes";

const order = (value) => {
    console.log(value);
    return {
        type: ORDER,
        payload: value
    }
}

export default order