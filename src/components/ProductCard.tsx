"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  strength?: string;
  inStock?: boolean;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  imageUrl,
  strength,
  inStock = true,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-panel rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square p-6 bg-white/50">
        {/* Placeholder for real image since next/image needs absolute or configured paths */}
        <div className="w-full h-full relative flex items-center justify-center bg-surface-container-lowest rounded-md">
           {/* If imageUrl is empty, show a colored block */}
           {imageUrl ? (
             <img src={imageUrl} alt={name} className="object-contain max-h-full max-w-full" />
           ) : (
             <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">{name.charAt(0)}</span>
             </div>
           )}
        </div>
        
        {strength && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full border border-primary/20">
              {strength}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-[10px] font-bold tracking-widest text-outline uppercase mb-1">
          {category}
        </div>
        <Link href={`/product/${id}`} className="hover:text-primary transition-colors group">
          <h3 className="font-heading font-semibold text-lg text-on-surface line-clamp-2 mb-2 group-hover:text-primary">
            {name}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </div>
          
          <button 
            className={`
              w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
              ${isHovered ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary'}
            `}
            disabled={!inStock}
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
