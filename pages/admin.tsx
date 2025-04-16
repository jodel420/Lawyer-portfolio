import { useEffect } from "react";
import { useRouter } from "next/router";
import AdminPage from "../app/admin/adminPage";
const Admin = () => {
  const router = useRouter();
  console.log("Admin page loaded");

  useEffect(() => {
    const isAuthorized = true; // Replace with actual authorization logic

    if (!isAuthorized) {
      router.push("/"); // Redirect to home if not authorized
    }
  }, [router]);

  return <AdminPage />;
};

export default Admin;