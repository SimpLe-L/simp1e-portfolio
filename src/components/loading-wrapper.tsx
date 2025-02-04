"use client";

import { useState } from "react";
import Loader from "./loading";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading ? <Loader setHideLoader={setIsLoading} /> : children}</>;
};

export default LoadingWrapper;
