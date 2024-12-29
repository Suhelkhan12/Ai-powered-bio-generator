import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import CopyBio from "./copy-bio";

const BioCard = ({ bio }: { bio: string }) => {
  return (
    <div>
      <Card className=" rounded-br-none">
        <CardContent className="p-4 rounded-sm">
          <CardDescription>{bio}</CardDescription>
        </CardContent>
      </Card>
      <CopyBio bio={bio} />
    </div>
  );
};

export default BioCard;
