"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"]



const small = () => {
    return ( <div>
              <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
          <Menu size={22} />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent style={{ width: '400px' }}>
          <DropdownMenuLabel className="text-lg ml-6"><strong className="text-blue-500">Pet</strong>hub</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem

          >
            Puppy Guide
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem

          >
            Our Products
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem

            >
                Dog Training
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
     );
}
 
export default small;