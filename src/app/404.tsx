'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function NotFoundComponent() {
    const searchParams = useSearchParams();
    const param = searchParams.get('error'); // example usage

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            {param && <p className="text-red-500 mt-2">Error: {param}</p>}
        </div>
    );
}

export default function NotFoundPage() {
    return (
        <Suspense>
            <NotFoundComponent />
        </Suspense>
    );
}