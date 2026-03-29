import { IHouse } from "@/types/House";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Skeleton,
  Spinner,
} from "@heroui/react";
import useHouseData from "./useHouseData";
import { Controller } from "react-hook-form";
import { useEffect } from "react";

interface PropTypes {
  dataHouse?: IHouse;
  onUpdate: (data: IHouse) => void;
  isPendingUpdate: boolean;
  isSuccessUpdate: boolean;
}

const HouseData = (props: PropTypes) => {
  const { dataHouse, onUpdate, isPendingUpdate, isSuccessUpdate } = props;
  
  const {
    controlUpdateInfo,
    errorsUpdateInfo,
    handleSubmitUpdateInfo,
    resetUpdateInfo,
    setValueUpdateInfo,
  } = useHouseData();

  useEffect(() => {
    if (dataHouse) {
      setValueUpdateInfo("nama", `${dataHouse.nama || ""}`);
      setValueUpdateInfo("c1_harga", dataHouse.c1_harga || 0);
      setValueUpdateInfo("c2_jarak", dataHouse.c2_jarak || 0);
      setValueUpdateInfo("c3_keamanan", dataHouse.c3_keamanan || 0);
      setValueUpdateInfo("c4_luas", dataHouse.c4_luas || 0);
    }
  }, [dataHouse, setValueUpdateInfo]);

  useEffect(() => {
    if (isSuccessUpdate) {
      resetUpdateInfo(); 
    }
  }, [isSuccessUpdate, resetUpdateInfo]);

  return (
    <Card className="w-full p-4">
      <CardHeader className="flex-col items-start">
        <h1 className="w-full text-xl font-bold">Home Information</h1>
        <p className="w-full text-small text-default-400">
          Change this property's criteria information
        </p>
      </CardHeader>
      <CardBody>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmitUpdateInfo(onUpdate)}
        >
          <Skeleton isLoaded={!!dataHouse?.nama} className="rounded-lg">
            <Controller
              name="nama"
              control={controlUpdateInfo}
              render={({ field }) => (
                <Input
                  {...field}
                  label="House/Cluster Name"
                  variant="bordered"
                  labelPlacement="outside"
                  type="text"
                  isInvalid={errorsUpdateInfo.nama !== undefined}
                  errorMessage={errorsUpdateInfo.nama?.message}
                  className="mt-2"
                />
              )}
            />
          </Skeleton>

          <Skeleton isLoaded={dataHouse?.c1_harga !== undefined} className="rounded-lg">
            <Controller
              name="c1_harga"
              control={controlUpdateInfo}
              render={({ field: { value, ...fieldProps } }) => (
                <Input
                  {...fieldProps}
                  value={value !== undefined ? String(value) : ""}
                  label="C1 - Price (Rupiah)"
                  labelPlacement="outside"
                  variant="bordered"
                  type="number"
                  isInvalid={errorsUpdateInfo.c1_harga !== undefined}
                  errorMessage={errorsUpdateInfo.c1_harga?.message}
                  className="mt-2"
                />
              )}
            />
          </Skeleton>

          <Skeleton isLoaded={dataHouse?.c2_jarak !== undefined} className="rounded-lg">
            <Controller
              name="c2_jarak"
              control={controlUpdateInfo}
              render={({ field: { value, ...fieldProps } }) => (
                <Input
                  {...fieldProps}
                  value={value !== undefined ? String(value) : ""}
                  label="C2 - Distance to Center (Km)"
                  labelPlacement="outside"
                  variant="bordered"
                  type="number"
                  isInvalid={errorsUpdateInfo.c2_jarak !== undefined}
                  errorMessage={errorsUpdateInfo.c2_jarak?.message}
                  className="mt-2"
                />
              )}
            />
          </Skeleton>

          <div className="flex gap-4">
            <Skeleton isLoaded={dataHouse?.c3_keamanan !== undefined} className="w-1/2 rounded-lg">
              <Controller
                name="c3_keamanan"
                control={controlUpdateInfo}
                render={({ field: { value, ...fieldProps } }) => (
                  <Input
                    {...fieldProps}
                    value={value !== undefined ? String(value) : ""}
                    label="C3 - Security (1-5)"
                    labelPlacement="outside"
                    variant="bordered"
                    type="number"
                    isInvalid={errorsUpdateInfo.c3_keamanan !== undefined}
                    errorMessage={errorsUpdateInfo.c3_keamanan?.message}
                    className="mt-2"
                  />
                )}
              />
            </Skeleton>

            <Skeleton isLoaded={dataHouse?.c4_luas !== undefined} className="w-1/2 rounded-lg">
              <Controller
                name="c4_luas"
                control={controlUpdateInfo}
                render={({ field: { value, ...fieldProps } }) => (
                  <Input
                    {...fieldProps}
                    value={value !== undefined ? String(value) : ""}
                    label="C4 - Area (m2)"
                    labelPlacement="outside"
                    variant="bordered"
                    type="number"
                    isInvalid={errorsUpdateInfo.c4_luas !== undefined}
                    errorMessage={errorsUpdateInfo.c4_luas?.message}
                    className="mt-2"
                  />
                )}
              />
            </Skeleton>
          </div>

          <Button
            color="danger"
            className="mt-4 disabled:bg-default-500"
            type="submit"
            disabled={isPendingUpdate || !dataHouse?.id}
          >
            {isPendingUpdate ? (
              <Spinner size="sm" color="white" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default HouseData;