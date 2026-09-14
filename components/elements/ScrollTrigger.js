import { useEffect, useRef } from 'react'

export default function ScrollTrigger({ onEnter, onExit, component: Component = 'div', children, ...props }) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onEnter?.()
                    } else {
                        onExit?.()
                    }
                })
            },
            {
                threshold: 0.1,
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [onEnter, onExit])

    return (
        <Component ref={ref} {...props}>
            {children}
        </Component>
    )
}

