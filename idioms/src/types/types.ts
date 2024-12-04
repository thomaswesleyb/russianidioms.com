export interface Idiom {
    id: string;
    idiom: string;
    english: string;
    example?: string;
    submittedBy?: string;
    approvalStatus?: string;
}

export interface ApiIdiom {
    id: string;
    data: {
        idiom: string;
        english: string;
        example?: string;
        submittedBy?: string;
        approvalStatus?: string;
    };
}

export function transformApiIdiom(apiIdiom: ApiIdiom): Idiom {
    return {
        id: apiIdiom.id,
        idiom: apiIdiom.data.idiom,
        english: apiIdiom.data.english,
        example: apiIdiom.data.example,
        submittedBy: apiIdiom.data.submittedBy,
        approvalStatus: apiIdiom.data.approvalStatus,
    };
}