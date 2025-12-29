'use client';

import { buttonVariants } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { useMediaQuery } from '../../hooks/use-media-query';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import NumberFlow from '@number-flow/react';
import { Highlighter } from '@/src/components/ui/highlighter';

const plans = [
  {
    name: 'STARTER',
    price: '50',
    yearlyPrice: '40',
    period: 'per month',
    features: [
      'Up to 10 projects',
      'Basic analytics',
      '48-hour support response time',
      'Limited API access',
      'Community support',
    ],
    description: 'Perfect for individuals and small projects',
    buttonText: 'Start Free Trial',
    href: '/sign-up',
    isPopular: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '99',
    yearlyPrice: '79',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      '24-hour support response time',
      'Full API access',
      'Priority support',
      'Team collaboration',
      'Custom integrations',
    ],
    description: 'Ideal for growing teams and businesses',
    buttonText: 'Get Started',
    href: '/sign-up',
    isPopular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '299',
    yearlyPrice: '239',
    period: 'per month',
    features: [
      'Everything in Professional',
      'Custom solutions',
      'Dedicated account manager',
      '1-hour support response time',
      'SSO Authentication',
      'Advanced security',
      'Custom contracts',
      'SLA agreement',
    ],
    description: 'For large organizations with specific needs',
    buttonText: 'Contact Sales',
    href: '/contact',
    isPopular: false,
  },
];

export default function PricingComponent() {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }
  };

  return (
    <div className="container py-6">
      <div className="mb-6 space-y-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Code Smarter , Not Harder
        </h2>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            <Highlighter action="highlight" color="#ADE2FF">
              Choose Your Plan. 
            </Highlighter>
        </h2>
      </div>
{/* 003AFF */}
      <div className="mb-10 flex justify-center">
        <label className="relative inline-flex cursor-pointer items-center">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold">
          Annual billing <span className="text-primary">(Save 10%)</span>
        </span>
      </div>

      {/* 🔑 ONLY CHANGE: relative added */}
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: 'spring',
              stiffness: 100,
              damping: 30,
              delay: 0.4,
            }}
            className={cn(
              'bg-background relative rounded-2xl border p-6 text-center flex flex-col',
              plan.isPopular
                ? 'z-20 border-primary border-2'
                : 'z-10',
              !plan.isPopular && 'mt-5'
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl bg-primary px-2 py-0.5">
                <Star className="h-4 w-4 fill-current text-primary-foreground" />
                <span className="ml-1 font-semibold text-primary-foreground">
                  Popular
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col">
              <p className="text-muted-foreground text-base font-semibold">
                {plan.name}
              </p>

              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight">
                  <NumberFlow
                    value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                    format={{
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                  />
                </span>
                <span className="text-muted-foreground text-sm font-semibold">
                  / {plan.period}
                </span>
              </div>

              <p className="text-muted-foreground text-xs">
                {isMonthly ? 'billed monthly' : 'billed annually'}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4" />

              <Link
                href={plan.href}
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'w-full text-lg font-semibold',
                  plan.isPopular
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background'
                )}
              >
                {plan.buttonText}
              </Link>

              <p className="text-muted-foreground mt-6 text-xs">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
