import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUserContext } from "../_context/UserDetailsProvider";

export default function Home() {
  
  return (
    <div className="main-container w-screen " style={{padding:"0 10vw"}}>
      <Button><Link href={"/sign-in"}>SignIn</Link></Button>
    </div>
  );
}
