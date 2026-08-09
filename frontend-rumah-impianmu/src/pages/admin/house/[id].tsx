import DashboardLayout from "@/components/layouts/DashboardLayout";
import DetailHouse from "@/components/views/Admin/DetailHouse/DetailHouse";

const AdminDetailHousePage = () => {
    return (
        <DashboardLayout
            title="Data Rumah"
            description="Daftar semua rumah, buat rumah baru, dan kelola rumah yang sudah ada."
            type="admin"
        >
            <DetailHouse />
        </DashboardLayout>
    );
};

export default AdminDetailHousePage;