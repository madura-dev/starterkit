import { PropsWithChildren, ReactNode, useState } from 'react';
import { User } from '@/types';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user?: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <main>{children}</main>
        </div>
    );
}
