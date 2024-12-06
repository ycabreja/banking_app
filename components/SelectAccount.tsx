"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Account {
    $id: string;
    appwriteItemId: string;
    data: {
        name: string;
        officialName: string;
        mask: string;
        currentBalance: number;
    };
}

interface SelectAccountProps {
    accounts: Account[];
    currentAccountId?: string;
}

const SelectAccount = ({ accounts, currentAccountId }: SelectAccountProps) => {
    const handleAccountChange = (value: string) => {
        const url = new URL(window.location.href);
        url.searchParams.set('id', value);
        window.location.href = url.toString();
    }

    if (!accounts || accounts.length === 0) {
        return null;
    }

    const currentAccount = accounts.find(acc => acc.appwriteItemId === currentAccountId);

    return (
        <Select onValueChange={handleAccountChange} value={currentAccountId}>
            <SelectTrigger className="w-[200px] bg-white border border-gray-200">
                <div className="flex items-center gap-2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 20V4C2 3.45 2.196 2.979 2.588 2.587C2.98 2.195 3.45067 1.99933 4 2H20C20.55 2 21.021 2.196 21.413 2.588C21.805 2.98 22.0007 3.45067 22 4V16C22 16.55 21.804 17.021 21.412 17.413C21.02 17.805 20.5493 18.0007 20 18H6L2 22V20ZM5 16H20V4H4V17.175L5 16Z"
                            fill="#344054"
                        />
                    </svg>
                    <SelectValue placeholder="Select Account" />
                </div>
            </SelectTrigger>
            <SelectContent>
                {accounts.map((account) => (
                    <SelectItem 
                        key={account.$id} 
                        value={account.appwriteItemId}
                    >
                        {account.data?.name || account.data?.officialName || 'Unnamed Account'}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SelectAccount
