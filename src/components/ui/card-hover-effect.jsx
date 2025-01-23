"use client"
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={item?.title}
          href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="relative group block p-2 h-full w-full"
        >
          <div
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-green-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle imgSrc={item.img}>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full cursor-pointer w-full p-3 overflow-hidden bg-white border border-slate-100 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-30">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children, imgSrc }) => {
  return (
    <div className={cn("flex items-center justify-start", className)}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt="Icon"
          className="w-12 h-12 rounded-md object-cover bg-white p-2 mr-2"
        />
      )}
      <h4 className="text-black font-bold tracking-wide">{children}</h4>
    </div>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
