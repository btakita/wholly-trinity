import type { Ctx } from '@ctx-core/object'
import type { VercelRequest, VercelResponse } from '@vercel/node'
export function handler(req:VercelRequest, res:VercelResponse):Promise<void>
export function payload_(ctx:Ctx, request:VercelRequest|Request):Promise<void>
