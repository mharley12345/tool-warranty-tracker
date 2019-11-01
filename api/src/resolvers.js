module.exports = {
    Query:{
     getTools(_, {input},{models}){
         return models.Tool.findMany(input || {})
     },
     getTool(_,{id}, {models}){
         return models.Tool.findOne({id})
     },
     getToolByExpire(_,{war_expires},{models}){
         return models.Tool.findOne({war_expires})
     },
     user(_,_,{models}){
         return models.User.findOne()
     }

    },
    Mutation: {
        addTool(_,{input},{models,tool}){
            const tool = models.Tool.create({...input, tool: tool.id})
                return Tool
            }
        },
   Tool: {
       user(tool,_,{models}){
           return models.User.findOne({id: tool.id})
       },
    
   },
   Tools: {
       users(tool,_,{models}){
           return models.Tool.findMany({tool:tool.id})
       }
   }
}