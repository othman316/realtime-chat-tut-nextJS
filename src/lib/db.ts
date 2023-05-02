import { Redis } from '@upstash/redis'

const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL || 'default-url'
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN || 'default-token'
export const db = new Redis({
    url: upstashRedisRestUrl,
    token: upstashRedisRestToken
})
