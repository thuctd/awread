import { makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

const LAST_POST_CREATED_AT = makeAddPgTableOrderByPlugin(
    "public",
    "books",
    ({ pgSql: sql }) => {
        const sqlIdentifier = sql.identifier(Symbol("b"));
        // return orderByAscDesc(
        //     "LAST_POST_CREATED_AT",
        //     ({ queryBuilder }) => {
        //         // console.log('abcxyz', queryBuilder.getTableAlias(), sqlIdentifier);
        //         return sql.fragment`(
        //             select ${sqlIdentifier}."updatedAt" 
        //             from public.books as ${sqlIdentifier}
        //             where ${sqlIdentifier}."updatedAt" = ${queryBuilder.getTableAlias()}."updatedAt"
        //             order by ${sqlIdentifier}."updatedAt" desc
        //             limit 1
        //         )`
        //     });
        return orderByAscDesc(
            "LAST_POST_CREATED_AT",
            ({ queryBuilder }) => {
                // console.log('abcxyz', queryBuilder.getTableAlias(), sqlIdentifier);
                // return sql.fragment`(
                //     select ${sqlIdentifier}."updatedAt" 
                //     from public.books as ${sqlIdentifier}
                //     where ${sqlIdentifier}."updatedAt" = ${queryBuilder.getTableAlias()}."updatedAt"
                //     order by ${sqlIdentifier}."updatedAt" desc
                //     limit 1
                // )`
                return sql.fragment``;
            });
    }
);

export default LAST_POST_CREATED_AT;