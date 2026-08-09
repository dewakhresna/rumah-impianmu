import DashboardLayout from "@/components/layouts/DashboardLayout";
import Profile from "@/components/views/Admin/Profile/ProfileInfo";

const AdminProfilePage = () => {
  return (
    <DashboardLayout
      title="Profil Admin"
      description="Kelola Profil Admin"
      type="admin"
    >
      <Profile />
    </DashboardLayout>
  );
};

export default AdminProfilePage;
