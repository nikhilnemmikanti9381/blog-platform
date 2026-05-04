const attempts = new Map();

export function rateLimit(key, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();

  const record = attempts.get(key) || {
    count: 0,
    resetTime: now + windowMs,
  };

  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }

  record.count += 1;
  attempts.set(key, record);

  return {
    success: record.count <= limit,
    remaining: Math.max(limit - record.count, 0),
    resetTime: record.resetTime,
  };
}