import React from 'react';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

interface ButtonProps extends React.ComponentProps<'button'> {
  color?: string;
  variant?: 'primary' | 'navItem';
  className: string | undefined;
  children: React.ReactNode;
  hoverEffect?: 'underline' | 'default';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  hoverEffect = 'default',
  className,
  ...props
}) => {
  const buttonVariants = cva(
    'flex items-center h-16 relative px-4 font-sans text-gray-400 transition-all duration-200',
    {
      variants: {
        variant: { primary: '', navItem: '' },
        border: {
          default: 'hover:text-gray-800',
          underline: 'hover:text-gray-800 hover:border-gray-700 bg-red-100',
        },
        hoverEffect: {
          default: 'hover:text-gray-800',
          underline:
            'border-transparent border-y-2 hover:border-b-2 hover:border-b-gray-700 hover:text-gray-800',
        },
      },
    }
  );

  return (
    <button
      type='button'
      className={twMerge(buttonVariants({ variant, hoverEffect }), className)}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
