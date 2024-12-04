"use client";

import { ErrorText, Loader, Text } from "@cruk/cruk-react-components";
import { useQuery } from "@tanstack/react-query";
import { urlNasaSearch } from "../services/nasa";
import { NasaResponse, NasaSearchParams } from "../types";
import { ListGrid } from "./ListGrid/ListGrid";
import gridMapper from "../helpers/gridMapper";
import { useEffect } from "react";

export function List({
  params,
  setIsFetching,
}: {
  params: NasaSearchParams;
  setIsFetching: (fetching: boolean) => void;
}) {
  const pageSize = 10;

  const values: NasaSearchParams = {
    keywords: params.keywords,
    mediaType: params.mediaType,
    yearStart: params.yearStart,
    pageSize,
  };

  const urlNasaSearchUrl = values
    ? urlNasaSearch(values as NasaSearchParams)
    : "";

  const { data, isFetching, error } = useQuery<NasaResponse>(
    ["nasaSearch", values],
    () => fetch(urlNasaSearchUrl).then((res) => res.json()),
    { enabled: !!urlNasaSearchUrl.length }
  );

  useEffect(() => {
    setIsFetching(isFetching);
  }, [isFetching, setIsFetching]);

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <ErrorText>Something went wrong. Please try again later.</ErrorText>;
  }

  if (!data?.collection?.items?.length) {
    return <Text>No results found.</Text>;
  }

  return <>{!isFetching && <ListGrid items={gridMapper(data)} />}</>;
}
