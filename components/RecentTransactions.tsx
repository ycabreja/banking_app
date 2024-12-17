"use client";

import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
import { Pagination } from './Pagination'


interface RecentTransactionsProps {
    accounts: Account[];
    transactions?: Transaction[];
    appwriteItemId?: string;
    page?: number;
}

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1,
}: RecentTransactionsProps) => {
    const rowsPerPage = 10;
    const totalPages = Math.ceil(transactions.length / rowsPerPage);

    const indexOfLastTransaction = page * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = transactions.slice(
        indexOfFirstTransaction, indexOfLastTransaction
    );

    if (!accounts || accounts.length === 0) {
        return null;
    }

    return (
        <section className="recent-transactions">
            <header className="flex items-center justify-between">
                <h2 className="recent-transactions-label">Recent transactions</h2>
                <Link
                    href={`/transaction-history/?id=${appwriteItemId}`}
                    className="view-all-btn"
                >
                    View all
                </Link>
            </header>

            <Tabs defaultValue={appwriteItemId || accounts[0]?.appwriteItemId} className="w-full">
                <TabsList className="recent-transactions-tablist">
                    {accounts.map((account) => (
                        <TabsTrigger
                            key={account.appwriteItemId}
                            value={account.appwriteItemId}
                        >
                            <BankTabItem
                                account={account}
                                appwriteItemId={appwriteItemId}
                            />
                        </TabsTrigger>
                    ))}
                </TabsList>

                {accounts.map((account) => (
                    <TabsContent
                        value={account.appwriteItemId}
                        key={account.appwriteItemId}
                        className="space-y-4"
                    >
                        <BankInfo
                            account={account}
                            appwriteItemId={appwriteItemId}
                            type="full"
                        />

                        <TransactionsTable
                            transactions={currentTransactions}
                        />

                        {totalPages > 1 && (
                            <div className="my-4 w-full">
                                <Pagination totalPages={totalPages} page={page} />
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}

export default RecentTransactions