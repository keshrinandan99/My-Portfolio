'use client';

import { SpringElement } from "@/components/ui/spring-element";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <SpringElement>
        <Avatar className="size-20">
          <AvatarImage
            draggable={false}
            src="/picofme (1).png"
          />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </SpringElement>
    </div>
  );
};

export default DemoOne; 