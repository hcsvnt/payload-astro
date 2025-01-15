
export type Block = {
    blockType: string;
    title: string;
    content: string;
    'content-localized': string;
    id: string;
    content_html: string;
    content_localized_html: string;
};

export type Page = {
    id: string;
    slugLock: boolean;
    _status: string;
    layout: Block[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    title: string;
};
