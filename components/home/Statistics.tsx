"use client";

import { useEffect, useRef, useState } from "react";

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Luotettavat kiinteistöneuvojasi
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg">
              Huippuluokan kiinteistövälittäjä, joka tarjoaa saumattoman ja mukaansatempaavan kokemuksen unelmiesi kodin löytämiseksi kaupungin sydämestä
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard
                number={17}
                suffix="K+"
                label="Tyytyväistä asiakasta"
                isVisible={isVisible}
                bgColor="bg-gray-900"
              />
              <StatCard
                number={25}
                suffix="+"
                label="Vuotta kokemusta"
                isVisible={isVisible}
                bgColor="bg-white"
                border
              />
              <StatCard
                number={150}
                suffix="+"
                label="Palkintoa voitettu"
                isVisible={isVisible}
                bgColor="bg-white"
                border
              />
              <StatCard
                number={25}
                suffix="+"
                label="Kiinteistökokoelmaa"
                isVisible={isVisible}
                bgColor="bg-white"
                border
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-full">
            <div className="bg-gray-100 rounded-3xl p-8 h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Luotettava kumppani matkallasi
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Olemme todistaneet jatkuvasti kehittyvän kiinteistömarkkinan maisemaa ja tulleet tuhansien asiakkaiden luotetuksi kumppaniksi.
                </p>
              </div>
              
              {/* Image placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                <img
                  src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  bgColor: string;
  border?: boolean;
}

function StatCard({ number, suffix, label, isVisible, bgColor, border }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div className={`${bgColor} ${border ? 'border-2 border-gray-200' : ''} rounded-xl p-4 sm:p-6`}>
      <div className={`text-3xl sm:text-4xl font-bold mb-2 ${bgColor === 'bg-gray-900' ? 'text-white' : 'text-gray-900'}`}>
        {count}
        {suffix}
      </div>
      <div className={`text-xs sm:text-sm font-medium leading-tight ${bgColor === 'bg-gray-900' ? 'text-gray-300' : 'text-gray-600'}`}>
        {label}
      </div>
    </div>
  );
}
