import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Textarea,
} from "@heroui/react";
import useAddHouseModal from "./useAddHouseModal";
import { Controller } from "react-hook-form";
import { useEffect } from "react";
import InputFile from "@/components/ui/InputFile"; 

interface PropTypes {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: () => void;
  refetchHouse: () => void;
}

const AddHouseModal = (props: PropTypes) => {
  const { isOpen, onClose, onOpenChange, refetchHouse } = props;

  const {
    control,
    errors,
    handleSubmitForm,
    handleAddHouse,
    isPendingMutateAddHouse,
    isSuccessMutateAddHouse,
    handleOnClose,
  } = useAddHouseModal();

  useEffect(() => {
    if (isSuccessMutateAddHouse) {
      onClose();
      refetchHouse();
    }
  }, [isSuccessMutateAddHouse, onClose, refetchHouse]);

  const disabledSubmit = isPendingMutateAddHouse;

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      size="2xl"
      onClose={() => handleOnClose(onClose)}
    >
      <form onSubmit={handleSubmitForm(handleAddHouse)}>
        <ModalContent className="m-4">
          <ModalHeader>Add New Home Data</ModalHeader>
          <ModalBody>
            {/* --- SECTION 1: HOUSE DATA --- */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-slate-700">
                Property Information (TOPSIS)
              </p>

              <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    autoFocus
                    label="House/Cluster Name"
                    variant="bordered"
                    type="text"
                    isInvalid={errors.nama !== undefined}
                    errorMessage={errors.nama?.message}
                    className="mb-2"
                  />
                )}
              />

              <div className="flex gap-2">
                <Controller
                  name="c1_harga"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C1 - Price (Rupiah)"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.c1_harga !== undefined}
                      errorMessage={errors.c1_harga?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
                <Controller
                  name="c2_jarak"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C2 - Distance to Center (Km)"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.c2_jarak !== undefined}
                      errorMessage={errors.c2_jarak?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
              </div>

              <div className="flex gap-2">
                <Controller
                  name="c3_keamanan"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C3 - Security (1-5)"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.c3_keamanan !== undefined}
                      errorMessage={errors.c3_keamanan?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
                <Controller
                  name="c4_luas"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C4 - Surface Area (m2)"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.c4_luas !== undefined}
                      errorMessage={errors.c4_luas?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
              </div>
            </div>

            {/* --- SECTION 2: HOUSE DETAIL --- */}
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm font-bold text-slate-700">House Details</p>

              <div className="flex gap-2">
                <Controller
                  name="beds"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="Jumlah Kamar Tidur"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.beds !== undefined}
                      errorMessage={errors.beds?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
                <Controller
                  name="baths"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="Jumlah Kamar Mandi"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.baths !== undefined}
                      errorMessage={errors.baths?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />
              </div>

              <Controller
                name="contact"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label="Kontak Pemilik/Agen"
                    variant="bordered"
                    placeholder="Contoh: 0812xxxx"
                    isInvalid={errors.contact !== undefined}
                    errorMessage={errors.contact?.message}
                    className="mb-2"
                  />
                )}
              />

              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    label="Deskripsi Properti"
                    variant="bordered"
                    minRows={3}
                    isInvalid={errors.description !== undefined}
                    errorMessage={errors.description?.message}
                  />
                )}
              />

              {/* --- AREA UPLOAD GAMBAR --- */}
              <p className="text-sm font-bold text-slate-700 mt-2">
                Property Images
              </p>
              <div className="grid grid-cols-3 gap-3">
                <Controller
                  name="image_1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputFile
                      name="image_1"
                      isDropable
                      preview={
                        value && (value as FileList).length > 0
                          ? URL.createObjectURL((value as FileList)[0])
                          : ""
                      }
                      onUpload={(files) => onChange(files)}
                      onDelete={() => onChange(null)}
                    />
                  )}
                />
                <Controller
                  name="image_2"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputFile
                      name="image_2"
                      isDropable
                      preview={
                        value && (value as FileList).length > 0
                          ? URL.createObjectURL((value as FileList)[0])
                          : ""
                      }
                      onUpload={(files) => onChange(files)}
                      onDelete={() => onChange(null)}
                    />
                  )}
                />
                <Controller
                  name="image_3"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputFile
                      name="image_3"
                      isDropable
                      preview={
                        value && (value as FileList).length > 0
                          ? URL.createObjectURL((value as FileList)[0])
                          : ""
                      }
                      onUpload={(files) => onChange(files)}
                      onDelete={() => onChange(null)}
                    />
                  )}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onPress={() => handleOnClose(onClose)}
              disabled={disabledSubmit}
            >
              Cancel
            </Button>
            <Button color="danger" type="submit" disabled={disabledSubmit}>
              {isPendingMutateAddHouse ? (
                <Spinner size="sm" color="white" />
              ) : (
                "Submit Data"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddHouseModal;
