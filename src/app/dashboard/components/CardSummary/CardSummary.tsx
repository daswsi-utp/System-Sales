import { CustomIcon } from "@/Components/CustomIcon";
import { CardSummaryProp } from "./CardSummary.types";
import { CustomTooltip } from "@/Components/CustonTooltip";

export const CardSummary = (props: CardSummaryProp) => {
    const { average, icon: Icon, title, tooltiptext, total } = props;
    
    return (
        <div className="shadow-sm bg-background  p-5 py-3 hover:shadow-lg transition rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <CustomIcon icon={Icon} />
                    <span className="font-semibold text-lg">{title}</span>
                </div>
                <CustomTooltip content={tooltiptext} />
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div className="text-sm text-gray-600">{total}</div>
                <div className="text-xs text-gray-400">Average: {average}</div>
            </div>
        </div>
    );
};
