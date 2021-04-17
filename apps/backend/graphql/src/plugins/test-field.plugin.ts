export default function TestFieldPlugin(builder) {
    builder.hook(
        "GraphQLObjectType:fields:field:args",
        (args, build, context) => {
            const {
                graphql: { GraphQLBoolean },
                pgSql: sql,
            } = build;
            const {
                Self,
                scope: { fieldName },
                addArgDataGenerator,
            } = context;
            // if (Self.name !== "Toy" || fieldName !== "categories") {
            //     return args;
            // }

            addArgDataGenerator(({ approved }) => {
                return {
                    pgQuery: queryBuilder => {
                        if (approved == true) {
                            console.log('approved', approved, sql);
                            queryBuilder.orderBy(sql.fragment`random()`);
                            queryBuilder.limit(3);
                        }
                    },
                };
            });

            return build.extend(
                args,
                {
                    approved: {
                        type: GraphQLBoolean,
                    },
                },
                "Test"
            );
        }
    );
};
