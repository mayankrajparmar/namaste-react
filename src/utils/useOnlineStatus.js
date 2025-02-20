import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setOnlineStatus(true);
    };
    const handleOffline = () => {
      setOnlineStatus(false);
    };

    addEventListener("offline", handleOffline);

    addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
