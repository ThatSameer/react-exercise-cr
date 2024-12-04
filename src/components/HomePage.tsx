"use client";

import { Box, Heading } from "@cruk/cruk-react-components";
import { useState } from "react";
import { NasaSearchParams } from "../types";
import { Form } from "./Form/Form";
import { List } from "./List";

export const HomePage = () => {
  const [values, setValues] = useState<NasaSearchParams>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleFetching = (fetching: boolean) => {
    setIsFetching(fetching);
  };

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>React Exercise (Sameer)</Heading>
      <Form setValues={setValues} isFetching={isFetching} />
      {values && <List params={values} setIsFetching={handleFetching} />}
    </Box>
  );
};

export default HomePage;
