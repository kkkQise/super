import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 Tailwind 类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 模拟异步数据请求延迟
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
