const { gql } = require('db/node_modules/apollo-server')

const typeDefs = gql`
     enum ToolType {
         WRENCHS
         RATCHETS
         HAMMERS
         SCREWDRIVERS
         PLIERS
         WIRE CRIMPERS
         FUNNELS
         WIRE CONNECTORS
         FUSES
         FLOOR JACKS
         CAR LIFTS
         RAMPS
         AIR COMPRESSORS
         JUMP BOXS
         CREEPERS
         FLASHLIGHTS
         OBDII SCANNERS
         TIRE GUAGES
         MULTIMETERS
         RADIATOR PRESSURE TESTER KITS
         BRAKE CALIPER TOOLS
         OIL FILTER WRENCHS
         OIL DRIP PANS
         AC MACHINE

 type User {
     id:ID!
     username: String!
     tools:[Tool]!
 }


     }

 type Tool {
     id : ID!
     toolname: String!
     qty: Int!
     type: ToolType!
     war_expries: Int!
     expect_fail: Int!
     createdAt: Int!
     user: User!
   
 }
     input NewToolInput {
         toolname: String!
         qty:Int!
         type: ToolType!
         war_expries: Int!
         expect_fail: Int!
         createdAt: Int!
  

     }
 input ToolInput {
     type :ToolType
 }
 type Query {
     user: User!
     getTools: Tool!
     getTool(id: ID!): Tool!
     getToolByExpire(war_expires: Int!): Tool!

 }
 type Mutation {
     addTool(input: NewToolInput!): Tool!
 }
`
module.exports = typeDefs