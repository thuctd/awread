// const { makeExtendSchemaPlugin, gql } = require("graphile-utils");
import { makeExtendSchemaPlugin, gql } from 'graphile-utils';


const nameOfType = "MyType"; // Or use the inflection system to generate a type

// This tag interpolates the string `nameOfType` to allow dynamic naming of the
// type.
const testType = gql`
  type ${nameOfType} {
    str: String
    int: Int
  }
`;

// This tag interpolates the entire definition in `Type` above.
const typeDefs = gql`
  ${testType}

  extend type Query {
    fieldName: MyType
  }
`;

const MyPlugin = makeExtendSchemaPlugin(build => {
    // Get any helpers we need from `build`
    const { pgSql: sql, inflection } = build;

    return {
        typeDefs: typeDefs,
        resolvers: {
            /*...*/
        },
    };
});

export default MyPlugin;