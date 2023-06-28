"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import {Listbox, Transistion} from '@headlessui/react';
import { CustomFilterProps } from '@/types';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span>filter</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter