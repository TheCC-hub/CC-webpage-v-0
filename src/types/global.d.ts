declare global {
    interface Window {
        Razorpay: any;
    }
}

declare module "next-auth" {
    interface Session {
        accessToken?: string;
    }
}
export { };
