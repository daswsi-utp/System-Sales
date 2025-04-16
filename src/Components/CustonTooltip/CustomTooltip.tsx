import { Tooltip, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { CustomTolltipProps } from "./CustomTolltip.type"
import { TooltipTrigger } from "../ui/tooltip";
import { Info } from "lucide-react";


export const CustomTooltip = (props: CustomTolltipProps) => {
    const { content } = props;
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger><Info strokeWidth={1} className="h-5 w-5"/></TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}
