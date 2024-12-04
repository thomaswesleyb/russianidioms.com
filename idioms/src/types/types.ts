export interface Idiom {
    id: string;
    data: {
        idiom: string;
        english: string;
        example?: string;
        submittedBy?: string;
        approvalStatus?: string;
    }
}