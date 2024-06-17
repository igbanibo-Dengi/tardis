import { mutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";

// Define the mutation for creating a time capsule
export const createTimeCapsule = mutation({
    // Define the expected arguments and their types
    args: {
        title: v.string(),
        description: v.string(),
        imageUrl: v.string(),
        endDateTime: v.string(),
    },
    // Handler function to process the mutation
    handler: async (ctx, args) => {


        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError("User not authenticated");
        }

        const user = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), identity.email))
            .collect();

        if (user.length === 0) {
            throw new ConvexError("User not found");
        }
        // Insert the new time capsule into the "timeCapsules" collection
        return await ctx.db.insert("timeCapsules", {
            user: user[0]._id,
            title: args.title,
            description: args.description,
            imageUrl: args.imageUrl,
            endDateTime: args.endDateTime,
            name: user[0].name
        });
    },
});
