import { Disease } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean;
    diseases?: Array<Disease>
}