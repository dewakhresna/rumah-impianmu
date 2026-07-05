import DashboardLayout from "@/components/layouts/DashboardLayout";
import User from "@/components/views/Admin//UserData/user";
import Head from "next/head";

const AdminUserPage = () => {
  return (
    <DashboardLayout
      title="User Data"
      description="List of all House, create new house, and manage existing houses."
      type="admin"
    >
      <User/>
    </DashboardLayout>
  );
};

export default AdminUserPage;
