'use client';
import { PRODUCT_DATA } from '@/data/product.data';
import { Product } from '@/interface';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BaseHelper } from '@/utils';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const Orders = () => {
  const [data, setData] = useState<Product[]>(PRODUCT_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  // Sorting function
  const sortData = (key: keyof Product) => {
    setSortConfig((current) => {
      const newDirection =
        current.key === key && current.direction === 'asc' ? 'desc' : 'asc';

      const sortedData = [...data].sort((a, b) => {
        if (a[key] < b[key]) return newDirection === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return newDirection === 'asc' ? 1 : -1;
        return 0;
      });

      setData(sortedData);
      return { key, direction: newDirection };
    });
  };

  const getSortIcon = (key: keyof Product) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return '↑';
  };

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h3 className="font-medium text-3xl">Orders</h3>
      <div className="w-[420px] md:w-full border rounded-xl">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <Table>
            <TableHeader className="border bg-[#DCDFE4] rounded-t-xl">
              <TableRow>
                <TableHead className="text-gray-500">
                  <Button
                    variant="ghost"
                    onClick={() => sortData('name')}
                    className="hover:bg-transparent px-0"
                  >
                    Product
                    {getSortIcon('name')}
                  </Button>
                </TableHead>
                <TableHead className="text-gray-500">
                  <Button
                    variant="ghost"
                    onClick={() => sortData('date')}
                    className="hover:bg-transparent px-0"
                  >
                    Date
                    {getSortIcon('date')}
                  </Button>
                </TableHead>
                <TableHead className="text-gray-500">
                  <Button
                    variant="ghost"
                    onClick={() => sortData('timeSpent')}
                    className="hover:bg-transparent px-0"
                  >
                    Time spent
                    {getSortIcon('timeSpent')}
                  </Button>
                </TableHead>
                <TableHead className=" text-gray-500">
                  <Button
                    variant="ghost"
                    onClick={() => sortData('orderValue')}
                    className="hover:bg-transparent px-0"
                  >
                    Order Value
                    {getSortIcon('orderValue')}
                  </Button>
                </TableHead>
                <TableHead className=" text-gray-500">
                  <Button
                    variant="ghost"
                    onClick={() => sortData('commission')}
                    className="hover:bg-transparent px-0"
                  >
                    Commission
                    {getSortIcon('commission')}
                  </Button>
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-gray-50 text-[#212636]"
                >
                  <TableCell className="flex items-center gap-3">
                    <div>
                      <Image
                        src={product.imgUrl}
                        alt={product.imgAlt}
                        width={30}
                        height={30}
                      />
                    </div>
                    {product.name}
                  </TableCell>
                  <TableCell>
                    <div>
                      {product.date}
                      <div className="text-sm text-gray-500">
                        {product.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.timeSpent}</TableCell>
                  <TableCell className="">
                    {BaseHelper.formatCurrency(product.orderValue)}
                  </TableCell>
                  <TableCell className="font-semibold">
                    ${product.commission}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-transparent px-0 text-gray-500 text-xs"
                    >
                      View Chat
                      <Image
                        src={'/icons/arrow-up-right.svg'}
                        alt={'Arrow up right'}
                        width={13}
                        height={13}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="mt-4 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={cn(
                    'cursor-pointer',
                    currentPage === 1 ? 'pointer-events-none opacity-50' : '',
                  )}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={cn(
                    'cursor-pointer',
                    currentPage === totalPages
                      ? 'pointer-events-none opacity-50'
                      : '',
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Orders;
