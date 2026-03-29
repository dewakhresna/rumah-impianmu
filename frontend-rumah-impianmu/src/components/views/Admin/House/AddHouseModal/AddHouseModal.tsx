import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@heroui/react";
import useAddHouseModal from "./useAddHouseModal";
import { Controller } from "react-hook-form";
import { useEffect } from "react";

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
      onClose={() => handleOnClose(onClose)}
    >
      <form onSubmit={handleSubmitForm(handleAddHouse)}>
        <ModalContent className="m-4">
          <ModalHeader>Add New Home Data</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-slate-700">Property Information</p>

              <Controller
                name="nama"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    autoFocus
                    label="Nama Rumah/Cluster"
                    variant="bordered"
                    type="text"
                    isInvalid={errors.nama !== undefined}
                    errorMessage={errors.nama?.message}
                    className="mb-2"
                  />
                )}
              />

              {/* KOLOM HARGA (Number, harus di-convert ke String untuk UI) */}
              <Controller
                name="c1_harga"
                control={control}
                render={({ field: { value, ...fieldProps } }) => (
                  <Input
                    {...fieldProps}
                    value={value !== undefined ? String(value) : ""}
                    label="C1 - Harga (Rupiah)"
                    variant="bordered"
                    type="number"
                    isInvalid={errors.c1_harga !== undefined}
                    errorMessage={errors.c1_harga?.message}
                    className="mb-2"
                  />
                )}
              />

              {/* KOLOM JARAK */}
              <Controller
                name="c2_jarak"
                control={control}
                render={({ field: { value, ...fieldProps } }) => (
                  <Input
                    {...fieldProps}
                    value={value !== undefined ? String(value) : ""}
                    label="C2 - Jarak ke Pusat (Km)"
                    variant="bordered"
                    type="number"
                    isInvalid={errors.c2_jarak !== undefined}
                    errorMessage={errors.c2_jarak?.message}
                    className="mb-2"
                  />
                )}
              />

              <div className="flex gap-2">
                {/* KOLOM KEAMANAN */}
                <Controller
                  name="c3_keamanan"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C3 - Keamanan (1-5)"
                      variant="bordered"
                      type="number"
                      isInvalid={errors.c3_keamanan !== undefined}
                      errorMessage={errors.c3_keamanan?.message}
                      className="mb-2 w-1/2"
                    />
                  )}
                />

                {/* KOLOM LUAS */}
                <Controller
                  name="c4_luas"
                  control={control}
                  render={({ field: { value, ...fieldProps } }) => (
                    <Input
                      {...fieldProps}
                      value={value !== undefined ? String(value) : ""}
                      label="C4 - Luas (m2)"
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
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onPress={() => handleOnClose(onClose)}
              disabled={disabledSubmit}
            >
              Batal
            </Button>
            <Button color="danger" type="submit" disabled={disabledSubmit}>
              {isPendingMutateAddHouse ? (
                <Spinner size="sm" color="white" />
              ) : (
                "Simpan Data"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddHouseModal;