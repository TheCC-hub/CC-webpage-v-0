import React, { ReactNode } from 'react'

export default function Wraper({ children, className }: { children: ReactNode, className?: string }) {

    return (
        <section
            className={`w-full h-auto${className}`}
        >
            {children}
        </section>
    )
}
