import DashboardLayout from "@/components/layouts/DashboardLayout";
import EditProfile from "@/components/views/Admin/Profile/EditProfile/EditProfile";

const AdminEditProfilePage = () => {
  return (
    <DashboardLayout
      title="EditProfile"
      description="List of all EditProfile, create new EditProfile, and manage existing EditProfiles."
      type="admin"
    >
      <EditProfile />
    </DashboardLayout>
  );
};

export default AdminEditProfilePage;
