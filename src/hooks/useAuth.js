const { useSession } = require("next-auth/react");
const { useState, useEffect } = require("react");

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export const useAuth = () => {
  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (adminEmail && session?.user?.email === adminEmail) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [session]);

  return { isAdmin };
};
