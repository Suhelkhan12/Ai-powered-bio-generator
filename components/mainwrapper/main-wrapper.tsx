import React from "react";
type MainWrapperProps = {
  childrenItems: React.ReactNode;
};

const MainWrapper = ({ childrenItems }: MainWrapperProps) => {
  return (
    <main className="pt-36">
      <div className="container mx-auto">{childrenItems}</div>
    </main>
  );
};

export default MainWrapper;
