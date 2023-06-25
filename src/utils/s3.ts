import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3Config: S3ClientConfig = {
    region: import.meta.env.VITE_S3_REGION,
    forcePathStyle: true,
    credentials: {
        accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY!,
        secretAccessKey: import.meta.env.VITE_S3_SECRET_KEY!,
    }
};

export const s3 = new S3Client(s3Config);


