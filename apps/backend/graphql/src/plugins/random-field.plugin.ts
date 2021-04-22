export default function MyRandomFieldPlugin(
    builder,
    { myDefaultMin = 1, myDefaultMax = 100 }
) {
    builder.hook(
        "GraphQLObjectType:fields",
        (
            fields, // input object
            { extend, graphql: { GraphQLInt } }, // Build
            context // Context
        ) => {
            return extend(fields, {
                random: {
                    type: GraphQLInt,
                    args: {
                        sides: {
                            type: GraphQLInt,
                        },
                    },
                    resolve(_, { sides = myDefaultMax }) {
                        console.log("what is _", JSON.stringify(_))
                        return (
                            Math.floor(Math.random() * (sides - myDefaultMin + 1)) +
                            myDefaultMin
                        );
                    },
                },
            });
        }
    );
};