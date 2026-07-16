import DashboardLayout from "@/components/layouts/DashboardLayout";
import Password from "@/components/views/Profile/EditPassword/EditPassword";

const AdminPasswordPage = () => {
  return (
    <DashboardLayout
      title="EditPassword"
      description="List of all Password, create new Password, and manage existing Passwords."
      type="admin"
    >
      <Password />
    </DashboardLayout>
  );
};

export default AdminPasswordPage;
