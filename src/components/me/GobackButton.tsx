import { Button } from "@/components/ui/button";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function GobackButton() {
  return (
    <Link to="/">
      <Button variant="ghost" className="text-white border flex gap-x-1">
        <RiArrowGoBackLine className="h-5 w-5" /> Home
      </Button>
    </Link>
  );
}

export default GobackButton;
