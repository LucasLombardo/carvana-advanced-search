const example = {
    id: 123,
    title: `something`,
}

export const resolvers = {
    Query: {
        example: () => {
            return example
        },
    },

    Mutation: {
        createExample: () => {
            return example
        },
    },
}
