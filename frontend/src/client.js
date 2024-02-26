import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "il2fzcnh",
  dataset: "production",
  apiVersion: "2024-02-25",
  useCdn: true,
  token:
    "skCA6NdDj1cu0duoG6s0aUZu6iYT2OqkTz7SdhSDHBOofXBhCRm68Yc75tqx01aJUptMNsAxJHAwK9uQLRGVRHeRY0BBrfxUkz01Lmv3SdcM8e8lQUxYZHSnCJxQuB9sSDUKdcB2yB6Cg4sb0fyI0tjIxuUnJWyDDPfoZFIfMmSv3zY1wIaI",
});

const buider = imageUrlBuilder(client);
export const urlfor = (source) => buider.image(source);
