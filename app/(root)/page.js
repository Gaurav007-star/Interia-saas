import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container w-screen  ">
      <Button><Link href={"/sign-in"}>SignIn</Link></Button>
    </div>
  );
}
