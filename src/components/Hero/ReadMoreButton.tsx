// components/Hero/ReadMoreButton.tsx
import React from "react";
import Link from "next/link";

interface ReadMoreButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  href,
  className = "",
  children = "Read More"
}) => {
  return (
    <Link href={href} passHref>
      <button
        className={`px-6 py-2 rounded-md transition-colors ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ReadMoreButton;
