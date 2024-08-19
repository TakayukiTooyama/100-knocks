'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Input } from '~/component/ui/input';
import { APP_LINKS } from '~/constant';

export default function Home() {
  const [query, setQuery] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredLinks = APP_LINKS.filter((link) => link.label.includes(query));

  return (
    <div className="space-y-4 lg:space-y-8">
      <h1 className="text-center text-3xl font-bold lg:text-5xl">100本ノック！！</h1>
      <Input
        name="search"
        placeholder="リンク検索"
        onChange={handleInputChange}
        className="mx-auto max-w-96"
      />
      <div className="mx-auto max-w-5xl border p-8">
        <ul className="flex h-[456px] flex-col flex-wrap gap-x-16 gap-y-6 overflow-x-scroll">
          {filteredLinks.map((link, index) => (
            <li key={`${link.href}-${index}`} className="hover:underline">
              <Link href={link.href}>
                {index + 1}. {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
