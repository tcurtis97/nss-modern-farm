const { transformSync } = require("@babel/core")

export const createAsparagus = () => {
    const crop = {
        type: "Asparagus",
        height: 24,
        output: 4
    }
    return crop
}