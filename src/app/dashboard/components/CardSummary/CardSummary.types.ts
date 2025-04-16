import { LucideIdCard } from 'lucide-react';

export type CardSummaryProp = {
    icon: typeof LucideIdCard; 
    total: string;
    average: number;
    title: string;
    tooltiptext: string;
}
