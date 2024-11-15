import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Menu} from "lucide-react";
import {Separator} from "@radix-ui/react-separator";
import {Button} from "@/components/ui/button.tsx";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
          <Menu className='text-orange-500'/>
      </SheetTrigger>
        <SheetContent className={'space-y-3'}>
            <SheetTitle><span>Welcome to MernEats</span></SheetTitle>
            <Separator/>
            <SheetDescription className={'flex'}>
                <Button className='flex-1 font-bold bg-orange-500'>
                    Log In
                </Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  );
}