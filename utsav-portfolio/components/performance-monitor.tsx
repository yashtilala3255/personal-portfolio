'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('[v0] Performance Metric:', {
              name: entry.name,
              duration: entry.duration,
              startTime: entry.startTime,
            })
          }
        })

        observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'largest-contentful-paint'] })

        return () => observer.disconnect()
      } catch (e) {
        console.log('[v0] Performance monitoring not fully supported')
      }
    }
  }, [])

  return null
}
