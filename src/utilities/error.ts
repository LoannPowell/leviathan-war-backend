export const errorHandler = (e: unknown) => {
    if (e instanceof Error) {
        return {
            message: e.message
        };
    } 
    return {
        message: "An unexpected error occurred"
    };
}