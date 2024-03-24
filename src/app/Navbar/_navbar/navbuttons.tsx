import { Button } from "@/components/ui/button";
import Link from "next/link";

const navbuttons = () => {
    return ( 
        <div className="space-x-4 lg:block hidden">
      <Link href="/contact">
        <Button>Our Products</Button>
      </Link>
        </div>
     );
}
 
export default navbuttons;