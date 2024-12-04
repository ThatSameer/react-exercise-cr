import { Box, Select, TextField } from "@cruk/cruk-react-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { NasaSearchParams } from "../../types";
import {
  InputFieldsContainer,
  MediaAndYearFieldsContainer,
  SearchButton,
} from "./Form.styles";

export const formSchema = z.object({
  keywords: z
    .string()
    .min(2, { message: "Keywords must have at least 2 characters." })
    .max(50, { message: "Keywords must have at most 50 characters." }),
  mediaType: z.enum(["audio", "video", "image"], {
    message: "Please select a media type.",
  }),
  yearStart: z.coerce
    .number({ message: "Please enter a valid number." })
    .min(1900, { message: "Year start must be after 1900." })
    .max(new Date().getFullYear(), {
      message: "Year start must not be in the future.",
    })
    .or(z.literal(""))
    .optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const initialData = {
  keywords: "",
  mediaType: "",
  yearStart: "",
} as unknown as FormValues;

export function Form({
  setValues,
  isFetching,
}: {
  setValues: Dispatch<SetStateAction<NasaSearchParams | undefined>>;
  isFetching: boolean;
}) {
  const formProps = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
    shouldFocusError: true,
    defaultValues: initialData,
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = formProps;

  const onSubmit: SubmitHandler<FormValues> = async (data): Promise<void> => {
    setValues({
      keywords: data.keywords,
      mediaType: data.mediaType,
      ...(data.yearStart !== "" && { yearStart: data.yearStart }),
    });
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputFieldsContainer>
          <TextField
            {...register("keywords")}
            errorMessage={errors.keywords?.message}
            label="Keywords"
            required
          />
          <MediaAndYearFieldsContainer>
            <Select
              {...register("mediaType")}
              errorMessage={errors.mediaType?.message}
              label="Media type"
              required
            >
              <option disabled value={""}>
                Please choose an option
              </option>
              <option value={"image"}>Image</option>
              <option value={"video"}>Video</option>
              <option value={"audio"}>Audio</option>
            </Select>
            <TextField
              {...register("yearStart")}
              errorMessage={errors.yearStart?.message}
              label="Year start"
            />
          </MediaAndYearFieldsContainer>
        </InputFieldsContainer>
        <Box marginBottom="m">
          <SearchButton type="submit" disabled={isFetching}>
            Search
          </SearchButton>
        </Box>
      </form>
    </>
  );
}
