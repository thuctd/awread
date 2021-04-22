import { gql, makeExtendSchemaPlugin } from "graphile-utils";

const MyRandomUserPlugin = makeExtendSchemaPlugin(build => {
    const { pgSql: sql } = build;
    return {
        typeDefs: gql`
      extend type Query {
        # Individual record
        randomUser: User

        # Connection record
        randomUsersConnection: UsersConnection

        # List record
        randomUsersList: [User!]
      }
    `,
        resolvers: {
            Query: {
                /*
                 * Individual record needs to return just one row but
                 * `selectGraphQLResultFromTable` always returns an array; so the
                 * resolver is responsible for turning the array into a single record.
                 */
                randomUser: async (_query, args, context, resolveInfo) => {
                    // Remember: resolveInfo.graphile.selectGraphQLResultFromTable is where the PostGraphile
                    // look-ahead magic happens!
                    const rows = await resolveInfo.graphile.selectGraphQLResultFromTable(
                        sql.fragment`public.users`,
                        (tableAlias, queryBuilder) => {
                            queryBuilder.orderBy(sql.fragment`random()`);
                            queryBuilder.limit(1);
                        }
                    );
                    return rows[0];
                },

                /*
                 * Connection and list resolvers are identical; PostGraphile handles
                 * the complexities for you. We've simplified these down to a direct
                 * call to `selectGraphQLResultFromTable` but you may wish to wrap this
                 * with additional logic.
                 */
                randomUsersConnection: (_query, args, context, resolveInfo) =>
                    resolveInfo.graphile.selectGraphQLResultFromTable(
                        sql.fragment`public.users`,
                        (tableAlias, queryBuilder) => {
                            queryBuilder.orderBy(sql.fragment`random()`);
                        }
                    ),
                randomUsersList: (_query, args, context, resolveInfo) =>
                    resolveInfo.graphile.selectGraphQLResultFromTable(
                        sql.fragment`public.users`,
                        (tableAlias, queryBuilder) => {
                            queryBuilder.orderBy(sql.fragment`random()`);
                        }
                    ),
            },
        },
    };
});

export default MyRandomUserPlugin;