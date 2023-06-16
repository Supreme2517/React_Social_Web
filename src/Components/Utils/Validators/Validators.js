export const required = value => {
    if (value) return undefined;

    return <div>Field is required</div>;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

