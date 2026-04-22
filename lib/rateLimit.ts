const store = new Map<string, { count: number; time: number }>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 min
  const max = 50;

  const data = store.get(ip);

  if (!data) {
    store.set(ip, { count: 1, time: now });
    return true;
  }

  if (now - data.time > windowMs) {
    store.set(ip, { count: 1, time: now });
    return true;
  }

  if (data.count >= max) {
    return false;
  }

  data.count++;
  return true;
}