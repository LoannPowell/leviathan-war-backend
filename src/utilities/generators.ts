export const randomHash = (data:string) => {
    const hasher = new Bun.CryptoHasher("md5");
    const date = new Date();
    hasher.update(date + data);
    return hasher.digest("hex");
}