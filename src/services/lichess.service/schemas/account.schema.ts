import z from 'zod'

const perfSchema = z.object({
    "games": z.number().optional(),
    "rating": z.number().optional(),
    "rd": z.number().optional(),
    "prog": z.number().optional(),
    "prov": z.boolean().optional()
})

export const accountSchema = z.object({
    "id": z.string(),
    "username": z.string(),
    "perfs": z.object({
        "chess960": perfSchema.optional(),
        "atomic": perfSchema.optional(),
        "racingKings": perfSchema.optional(),
        "ultraBullet": perfSchema.optional(),
        "blitz": perfSchema.optional(),
        "kingOfTheHill": perfSchema.optional(),
        "bullet": perfSchema.optional(),
        "correspondence": perfSchema.optional(),
        "horde": perfSchema.optional(),
        "puzzle": perfSchema.optional(),
        "classical": perfSchema.optional(),
        "rapid": perfSchema.optional()
    }),
    "createdAt": z.number(),
    "disabled": z.boolean().optional(),
    "tosViolation": z.boolean().optional(),
    "profile": z.object({
        "country": z.string().optional(),
        "location": z.string().optional(),
        "bio": z.string().optional(),
        "firstName": z.string().optional(),
        "lastName": z.string().optional(),
        "fideRating": z.number().optional(),
        "uscfRating": z.number().optional(),
        "ecfRating": z.number().optional(),
        "links": z.string().optional()
    }),
    "seenAt": z.number(),
    "patron": z.boolean().optional(),
    "verified": z.boolean().optional(),
    "playTime": z.object({
        "total": z.number(),
        "tv": z.number()
    }),
    "title": z.string().optional(),
    "url": z.string(),
    "playing": z.string().optional(),
    "count": z.object({
        "all": z.number(),
        "rated": z.number(),
        "ai": z.number(),
        "draw": z.number(),
        "drawH": z.number(),
        "loss": z.number(),
        "lossH": z.number(),
        "win": z.number(),
        "winH": z.number(),
        "bookmark": z.number(),
        "playing": z.number(),
        "import": z.number(),
        "me": z.number()
    }),
    "streaming": z.boolean().optional(),
    "followable": z.boolean().optional(),
    "following": z.boolean().optional(),
    "blocking": z.boolean().optional(),
    "followsYou": z.boolean().optional()
})

export type AccountSchema = z.infer<typeof accountSchema>;
