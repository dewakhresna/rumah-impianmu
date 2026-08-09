import DashboardLayout from "@/components/layouts/DashboardLayout";
import House from "@/components/views/Admin/House/house";

const AdminHousePage = () => {
  return (
    <DashboardLayout
      title="Data Rumah"
      description="Daftar semua rumah, buat rumah baru, dan kelola rumah yang sudah ada."
      type="admin"
    >
      <House />
    </DashboardLayout>
  );
};

export default AdminHousePage;
