
export const add = (a, b) => {
  return a + b;
}

export const subtract = (a, b) => {
    return a - b;
}

export const multiply = (a, b) => {
    return a * b;
}


export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

export const getUserName = (user) => {
    return user?.name ?? "Unknown User";
}

