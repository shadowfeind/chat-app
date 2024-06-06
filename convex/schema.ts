import {defineSchema, defineTable} from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
    //we use plular values
    users: defineTable({
        username: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        email: v.string()
    }).index("by_email", ['email']).index("by_clerkId", ['clerkId'])
})